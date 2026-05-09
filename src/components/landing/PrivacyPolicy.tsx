export function PrivacyPolicy() {
  return (
    <section
      className="py-24 border-t border-sdf-border bg-sdf-bg relative"
      id="privacy-policy">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // PRIVACY POLICY
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text">
            Privacy & Data Protection
          </h2>
          <p className="font-mono text-sm text-sdf-muted mt-4">
            Last updated: May 8, 2026
          </p>
        </div>

        <div className="space-y-8 text-sm font-mono text-sdf-muted leading-relaxed">
          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Company
            </h3>
            <p>SmartDataFusion Analytics Inc.</p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Information We Collect
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Contact details you submit, including name, email, and company.</li>
              <li>Inquiry details, use case information, and message content.</li>
              <li>Authentication events and account data created through Firebase Auth.</li>
              <li>Cookie and session data used for essential site functionality and security.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              How We Use Firebase Auth Data
            </h3>
            <p>
              Firebase Auth is used to authenticate users, protect dashboard access,
              manage email verification status, and maintain secure sessions. We use
              this information only to provide and secure the SmartDataFusion service.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Cookie Policy
            </h3>
            <p>
              We use essential cookies and similar technologies to keep the site secure,
              remember session state, and protect forms. Third-party services such as
              Firebase, Tawk.to, reCAPTCHA, and Formspree may also set cookies or use
              local storage in line with their own policies.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Third Party Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Firebase: authentication, hosting, and app security support.</li>
              <li>Tawk.to: live chat and support messaging.</li>
              <li>reCAPTCHA: abuse prevention and spam protection on forms.</li>
              <li>Formspree: form submission processing and email delivery.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              How We Use Information
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Respond to inquiries and provide product information.</li>
              <li>Improve site messaging, UX, analytics, and performance.</li>
              <li>Maintain security, prevent abuse, and ensure availability.</li>
              <li>Operate customer support and account access features.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              GDPR / UK User Rights
            </h3>
            <p>
              If you are located in the UK or EEA, you may request access, correction,
              restriction, portability, or deletion of your personal data, and you may
              object to certain processing activities where applicable. You can also
              withdraw consent where processing is based on consent.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Data Sharing
            </h3>
            <p>
              We do not sell personal data. We only share information with service
              providers that help us operate the website, secure the platform, or manage
              communications. Those providers are expected to protect your data and use
              it only for the services they provide to us.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Contact
            </h3>
            <p>
              For privacy questions or to exercise your rights, contact us at{' '}
              <a
                href="mailto:support@smartdatafusion.com"
                className="text-sdf-cyan hover:text-sdf-cyan/80 transition-colors">
                support@smartdatafusion.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
