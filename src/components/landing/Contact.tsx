import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    useCase: 'Industrial IoT',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  );
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [ReCAPTCHAComponent, setReCAPTCHAComponent] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    if (recaptchaSiteKey) {
      import('react-google-recaptcha').then((mod) => {
        if (mounted) setReCAPTCHAComponent(() => mod.default);
      }).catch(() => {});
    }
    return () => { mounted = false; };
  }, [recaptchaSiteKey]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') {
      return;
    }

    try {
      setRecaptchaError('');

      if (!recaptchaToken) {
        setRecaptchaError('Please complete the reCAPTCHA check.');
        return;
      }

      setStatus('sending');
      const response = await fetch('https://formspree.io/f/mjgloqbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          useCase: formState.useCase,
          message: formState.message
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed.');
      }

      setStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        useCase: 'Industrial IoT',
        message: ''
      });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 border-t border-sdf-border bg-sdf-surface/30 relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // CONTACT US
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text">
            Talk to the SmartDataFusion team.
          </h2>
          <p className="font-mono text-sm text-sdf-muted mt-4 max-w-2xl mx-auto">
            Share your deployment goals and data challenges. We will respond with a tailored
            roadmap, integration plan, and timeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-sdf-bg border border-sdf-border rounded-xl p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-sdf-muted block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        name: event.target.value
                      }))
                    }
                    className="w-full rounded-md bg-sdf-surface border border-sdf-border px-4 py-3 text-sm text-sdf-text placeholder:text-sdf-muted/60 focus:outline-none focus:border-sdf-cyan/50"
                    placeholder="Jane Perera"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-sdf-muted block mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: event.target.value
                      }))
                    }
                    className="w-full rounded-md bg-sdf-surface border border-sdf-border px-4 py-3 text-sm text-sdf-text placeholder:text-sdf-muted/60 focus:outline-none focus:border-sdf-cyan/50"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-sdf-muted block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        company: event.target.value
                      }))
                    }
                    className="w-full rounded-md bg-sdf-surface border border-sdf-border px-4 py-3 text-sm text-sdf-text placeholder:text-sdf-muted/60 focus:outline-none focus:border-sdf-cyan/50"
                    placeholder="Smart Factory Inc."
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-sdf-muted block mb-2">
                    Use Case
                  </label>
                  <select
                    name="useCase"
                    value={formState.useCase}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        useCase: event.target.value
                      }))
                    }
                    className="w-full rounded-md bg-sdf-surface border border-sdf-border px-4 py-3 text-sm text-sdf-text focus:outline-none focus:border-sdf-cyan/50">
                    <option>Industrial IoT</option>
                    <option>Enterprise Data Fusion</option>
                    <option>Smart Infrastructure</option>
                    <option>Custom AI Insights</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-sdf-muted block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      message: event.target.value
                    }))
                  }
                  className="w-full rounded-md bg-sdf-surface border border-sdf-border px-4 py-3 text-sm text-sdf-text placeholder:text-sdf-muted/60 focus:outline-none focus:border-sdf-cyan/50"
                  placeholder="Tell us about your data sources, scale, and timing."
                />
              </div>

              {recaptchaSiteKey ? (
                <div className="pt-2">
                  {ReCAPTCHAComponent ? (
                    <ReCAPTCHAComponent
                      ref={recaptchaRef}
                      sitekey={recaptchaSiteKey}
                      onChange={(token: string) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                    />
                  ) : null}
                </div>
              ) : (
                <p className="text-xs font-mono text-sdf-red">
                  Missing reCAPTCHA site key. Set VITE_RECAPTCHA_SITE_KEY.
                </p>
              )}

              {recaptchaError && (
                <p className="text-xs font-mono text-sdf-red">{recaptchaError}</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 bg-sdf-cyan text-sdf-bg font-ui font-bold px-6 py-3 rounded hover:bg-sdf-cyan/90 hover:shadow-[0_0_20px_rgba(0,200,255,0.35)] transition-all">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>

              {status === 'success' && (
                <p className="text-sm font-mono text-sdf-green">
                  Thanks! Your message has been sent to support@smartdatafusion.com.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-mono text-sdf-red">
                  Something went wrong. Please try again or email support@smartdatafusion.com.
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-sdf-bg border border-sdf-border rounded-xl p-8 flex flex-col gap-6">
            <div>
              <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest">
                // CONTACT DETAILS
              </span>
              <h3 className="font-heading text-xl font-semibold text-sdf-text mt-3">
                Reach the command center.
              </h3>
              <p className="font-mono text-sm text-sdf-muted mt-3">
                Our solution architects can map your systems and deliver a multi-stage
                integration plan within 72 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sdf-surface border border-sdf-border flex items-center justify-center">
                  <Mail className="w-4 h-4 text-sdf-cyan" />
                </div>
                <div>
                  <div className="font-mono text-xs text-sdf-muted">Email</div>
                  <div className="font-ui text-sm text-sdf-text">hello@smartdatafusion.ai</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sdf-surface border border-sdf-border flex items-center justify-center">
                  <Phone className="w-4 h-4 text-sdf-green" />
                </div>
                <div>
                  <div className="font-mono text-xs text-sdf-muted">Phone</div>
                  <div className="font-ui text-sm text-sdf-text">+1 (415) 771-9023</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sdf-surface border border-sdf-border flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-sdf-violet" />
                </div>
                <div>
                  <div className="font-mono text-xs text-sdf-muted">HQ</div>
                  <div className="font-ui text-sm text-sdf-text">
                    1 Sansome Street, San Francisco, CA 94104, USA
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-sdf-border/60">
                <div className="font-mono text-xs text-sdf-muted">Company</div>
                <div className="font-ui text-sm text-sdf-text">
                  SmartDataFusion Analytics Inc.
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-sdf-muted">Founder &amp; CEO</div>
                <div className="font-ui text-sm text-sdf-text">
                  Ayesha Wickramasinghe
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-sdf-muted">Website</div>
                <a
                  href="https://smartdatafusion.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-ui text-sm text-sdf-cyan hover:text-sdf-cyan/80 transition-colors">
                  smartdatafusion.com
                </a>
              </div>
            </div>

            <div className="mt-auto border border-sdf-border/60 rounded-lg p-4 bg-sdf-surface/60">
              <div className="font-mono text-xs text-sdf-muted">Response SLA</div>
              <div className="font-heading text-lg text-sdf-text">4 hours</div>
              <div className="font-mono text-[11px] text-sdf-muted mt-1">
                Dedicated enterprise support window.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
