export function Terms() {
  return (
    <section className="py-24 border-t border-sdf-border bg-sdf-bg relative" id="terms">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // TERMS & CONDITIONS
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text">
            Terms of Service
          </h2>
          <p className="font-mono text-sm text-sdf-muted mt-4">
            Last updated: May 13, 2026
          </p>
        </div>

        <div className="space-y-8 text-sm font-mono text-sdf-muted leading-relaxed">
          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Agreement to Terms
            </h3>
            <p>
              By accessing SmartDataFusion websites or services, you agree to these
              terms and our privacy policy. If you do not agree, do not use the
              services.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Use of the Service
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the platform only for lawful business purposes.</li>
              <li>Do not attempt to bypass security, rate limits, or authentication.</li>
              <li>Do not upload or transmit malware, abusive content, or spam.</li>
              <li>Keep your account credentials confidential.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Accounts & Access
            </h3>
            <p>
              Account access may require verified email ownership. We may suspend
              accounts for suspected abuse or security risks to protect customers
              and infrastructure.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Subscriptions & Enterprise Engagements
            </h3>
            <p>
              Commercial subscriptions and enterprise deployments may be governed by
              a separate written agreement, which will control in the event of a
              conflict with these terms.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Intellectual Property
            </h3>
            <p>
              The SmartDataFusion name, branding, platform design, and underlying
              software are owned by SmartDataFusion Analytics Inc. You may not copy,
              reverse engineer, or resell any portion of the service without written
              permission.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Third-Party Services
            </h3>
            <p>
              The service may integrate with third-party providers such as Firebase,
              Formspree, reCAPTCHA, and Tawk.to. Your use of those services is
              governed by their respective terms.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Disclaimers
            </h3>
            <p>
              The service is provided "as is" and "as available". We do not warrant
              that the service will be uninterrupted, error-free, or meet every
              integration requirement without a signed enterprise agreement.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by law, SmartDataFusion Analytics Inc.
              will not be liable for indirect, incidental, or consequential damages
              arising from use of the service.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Termination
            </h3>
            <p>
              We may suspend or terminate access for violations of these terms or
              to protect the security of the platform. You may stop using the
              service at any time.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Governing Law
            </h3>
            <p>
              These terms are governed by applicable laws where SmartDataFusion
              Analytics Inc. is established, unless a signed enterprise agreement
              specifies otherwise.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
              Contact
            </h3>
            <p>
              Questions about these terms can be sent to{' '}
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
