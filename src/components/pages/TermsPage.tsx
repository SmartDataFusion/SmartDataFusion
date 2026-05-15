import { PageFrame } from './PageFrame';
import { Terms } from '../landing/Terms';
import { Footer } from '../landing/Footer';
import { AlertCircle, CreditCard, BarChart3 } from 'lucide-react';

interface TermsPageProps {
  onLaunchDashboard: () => void;
}

export function TermsPage({ onLaunchDashboard }: TermsPageProps) {
  return (
    <PageFrame
      eyebrow="// TERMS & CONDITIONS"
      title="The policies that govern how you use SmartDataFusion services."
      description="These terms explain acceptable use, subscriptions, and the legal framework for accessing SmartDataFusion websites and services."
      onLaunchDashboard={onLaunchDashboard}>
      <Terms />

      <section className="py-16 border-t border-sdf-border bg-sdf-surface/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-4">
            Service commitments
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Availability targets',
                text: 'Enterprise uptime and incident response targets are defined in your contract.'
              },
              {
                title: 'Acceptable use',
                text: 'We require lawful use of the platform and prohibit abusive traffic.'
              },
              {
                title: 'Billing clarity',
                text: 'Subscription tiers and renewal terms are communicated before activation.'
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
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-8">Key Terms Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <CreditCard className="w-8 h-8 text-sdf-cyan mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Subscription & Payment</h3>
              <p className="font-mono text-sm text-sdf-muted">Recurring charges, auto-renewal, and cancellation policies are clearly defined.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <AlertCircle className="w-8 h-8 text-sdf-violet mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">User Responsibilities</h3>
              <p className="font-mono text-sm text-sdf-muted">You agree to maintain account security and comply with all applicable laws.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <BarChart3 className="w-8 h-8 text-sdf-cyan mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Limitations of Liability</h3>
              <p className="font-mono text-sm text-sdf-muted">Our liability is limited to the amount you paid in the past 12 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sdf-border bg-sdf-surface/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-8 text-center">Dispute Resolution & Support</h2>
          <div className="space-y-4">
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Governing Law</h3>
              <p className="font-mono text-sm text-sdf-muted">These terms are governed by UK law and subject to UK courts jurisdiction.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Dispute Resolution Process</h3>
              <p className="font-mono text-sm text-sdf-muted">We encourage resolution through support channels first; escalation procedures are available.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Contact & Support</h3>
              <p className="font-mono text-sm text-sdf-muted">For terms questions, reach out to our legal team via the contact form.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageFrame>
  );
}
