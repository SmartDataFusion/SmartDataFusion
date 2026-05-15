import React from 'react';
import { PageFrame } from './PageFrame';
import { PrivacyPolicy } from '../landing/PrivacyPolicy';
import { Footer } from '../landing/Footer';
import { Lock, Eye, Shield } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onLaunchDashboard: () => void;
}

export function PrivacyPolicyPage({ onLaunchDashboard }: PrivacyPolicyPageProps) {
  return (
    <PageFrame
      eyebrow="// PRIVACY POLICY"
      title="How SmartDataFusion handles personal data, cookies, and service providers."
      description="This policy explains how SmartDataFusion Analytics Inc. collects and uses information across the website, contact forms, authentication flows, and support tools."
      onLaunchDashboard={onLaunchDashboard}>

      <PrivacyPolicy />

      <section className="py-16 border-t border-sdf-border bg-sdf-surface/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-4">
            Privacy highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Data minimization',
                text: 'We collect only the data required to deliver the platform experience.'
              },
              {
                title: 'Retention controls',
                text: 'Retention windows are configurable to meet contractual and regulatory needs.'
              },
              {
                title: 'Secure processing',
                text: 'Access is restricted, monitored, and audited across all environments.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-sdf-border bg-sdf-surface p-6">
                <h3 className="font-heading text-lg font-semibold text-sdf-text mb-2">{item.title}</h3>
                <p className="font-mono text-xs text-sdf-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sdf-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-8">Your Privacy Rights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <Lock className="w-8 h-8 text-sdf-cyan mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Access & Control</h3>
              <p className="font-mono text-sm text-sdf-muted">You can request access to, or deletion of, your personal data at any time.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <Eye className="w-8 h-8 text-sdf-violet mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Transparency</h3>
              <p className="font-mono text-sm text-sdf-muted">We provide clear documentation of our data processing practices.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <Shield className="w-8 h-8 text-sdf-cyan mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Protection</h3>
              <p className="font-mono text-sm text-sdf-muted">Your data is protected with industry-standard encryption and security measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sdf-border bg-sdf-surface/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-8 text-center">Compliance & Certifications</h2>
          <div className="space-y-4">
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">GDPR Compliant</h3>
              <p className="font-mono text-sm text-sdf-muted">Full compliance with General Data Protection Regulation for EU residents.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Data Processing Agreement</h3>
              <p className="font-mono text-sm text-sdf-muted">Standard DPA available for enterprise customers handling sensitive data.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Security Audits</h3>
              <p className="font-mono text-sm text-sdf-muted">Regular third-party security assessments and penetration testing.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}