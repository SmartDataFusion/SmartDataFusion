import type { Response } from 'express';
import { onRequest } from 'firebase-functions/v2/https';

const parseAllowedOrigins = (value?: string) =>
  (value ?? '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

const isLocalhostOrigin = (origin?: string) =>
  Boolean(
    origin &&
      (origin.startsWith('http://localhost:') ||
        origin.startsWith('http://127.0.0.1:'))
  );

const setCorsHeaders = (
  res: Response,
  origin?: string,
  allowedOrigins: string[] = parseAllowedOrigins(
    process.env.RECAPTCHA_ALLOWED_ORIGINS
  )
) => {
  const allowAllOrigins = allowedOrigins.length === 0;
  if (allowAllOrigins) {
    res.set('Access-Control-Allow-Origin', origin ?? '*');
  } else if (origin && (allowedOrigins.includes(origin) || isLocalhostOrigin(origin))) {
    res.set('Access-Control-Allow-Origin', origin);
  }

  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
};

export const verifyRecaptcha = onRequest(
  { region: 'asia-south1' },
  async (req, res) => {
  const origin = req.get('origin');
  setCorsHeaders(res, origin ?? undefined);

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed.' });
    return;
  }

  const token = typeof req.body?.token === 'string' ? req.body.token : '';
  if (!token) {
    res.status(400).json({ success: false, error: 'Missing reCAPTCHA token.' });
    return;
  }

  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) {
    res.status(500).json({ success: false, error: 'Missing reCAPTCHA secret.' });
    return;
  }

  try {
    const params = new URLSearchParams();
    params.set('secret', secret);
    params.set('response', token);
    if (req.ip) {
      params.set('remoteip', req.ip);
    }

    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      }
    );

    const data = (await response.json()) as {
      success: boolean;
      score?: number;
      'error-codes'?: string[];
    };

    if (!data.success) {
      res.status(400).json({
        success: false,
        errorCodes: data['error-codes'] ?? []
      });
      return;
    }

    res.status(200).json({
      success: true,
      score: data.score
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Verification failed.' });
  }
  }
);
