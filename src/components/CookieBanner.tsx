import { useEffect, useState } from 'react';

type ConsentValue = 'accepted' | 'declined';

const STORAGE_KEY = 'sdf_cookie_consent';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(STORAGE_KEY);
    if (!storedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60]">
      <div className="max-w-4xl mx-auto bg-sdf-surface/95 border border-sdf-border rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="font-heading text-lg text-sdf-text">
              Cookie preferences
            </p>
            <p className="font-mono text-xs text-sdf-muted max-w-2xl">
              We use essential cookies to keep SmartDataFusion secure and to protect
              forms. You can accept or decline optional analytics cookies. Learn more
              in our privacy policy.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/privacy-policy"
              className="text-xs font-ui text-sdf-muted hover:text-sdf-text transition-colors">
              Privacy Policy
            </a>
            <button
              type="button"
              onClick={() => handleConsent('declined')}
              className="text-xs font-ui px-4 py-2 rounded border border-sdf-border text-sdf-text hover:border-sdf-cyan/50 hover:text-sdf-cyan transition-all">
              Decline
            </button>
            <button
              type="button"
              onClick={() => handleConsent('accepted')}
              className="text-xs font-ui px-4 py-2 rounded bg-sdf-cyan text-sdf-bg font-semibold hover:bg-sdf-cyan/90 transition-all">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
