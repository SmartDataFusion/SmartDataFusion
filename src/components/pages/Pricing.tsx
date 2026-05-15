import { PageFrame } from './PageFrame';
import { Footer } from '../landing/Footer';
import { Pricing } from '../landing/Pricing';
import { CheckCircle2, HelpCircle, Zap } from 'lucide-react';

interface PricingPageProps {
  onLaunchDashboard: () => void;
}

export function PricingPage({ onLaunchDashboard }: PricingPageProps) {
  const features = [
    { icon: Zap, title: 'Lightning-Fast Integration', desc: 'Real-time data fusion with sub-millisecond latency' },
    { icon: CheckCircle2, title: 'Enterprise-Grade Security', desc: 'End-to-end encryption and compliance ready' },
    { icon: HelpCircle, title: '24/7 Support', desc: 'Dedicated support team for enterprise plans' }
  ];

  const faqs = [
    { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, you can change your plan at any time. Billing adjusts proportionally.' },
    { q: 'Do you offer custom plans?', a: 'Absolutely. Contact our sales team for enterprise solutions tailored to your needs.' },
    { q: 'What payment methods do you accept?', a: 'We accept credit cards, bank transfers, and can arrange custom payment terms for enterprise.' }
  ];

  return (
    <PageFrame
      eyebrow="// PRICING"
      title="Plans built for every stage of data fusion maturity."
      description="Choose the tier that matches your data volume, integration complexity, and deployment scale."
      onLaunchDashboard={onLaunchDashboard}
      ctaLabel="Launch Dashboard">
      
      {/* Pricing Section */}
      <Pricing />

      {/* Features Section */}
      <section className="py-20 border-b border-sdf-border bg-sdf-surface/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4">Why Choose SmartDataFusion?</h2>
            <p className="font-mono text-sm text-sdf-muted">Industry-leading capabilities included in all plans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-sdf-bg border border-sdf-border rounded-lg p-6 hover:border-sdf-cyan/50 transition-colors">
                  <Icon className="w-8 h-8 text-sdf-cyan mb-4" />
                  <h3 className="font-ui text-lg font-semibold text-sdf-text mb-2">{feature.title}</h3>
                  <p className="font-mono text-sm text-sdf-muted">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-b border-sdf-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
                <h3 className="font-ui font-semibold text-sdf-text mb-2">{faq.q}</h3>
                <p className="font-mono text-sm text-sdf-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sdf-surface/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4">Ready to transform your data?</h2>
          <p className="font-mono text-sm text-sdf-muted mb-6">Start with a free trial. No credit card required.</p>
          <button
            onClick={onLaunchDashboard}
            className="bg-sdf-cyan text-sdf-bg font-ui font-semibold px-6 py-3 rounded hover:bg-sdf-cyan/90 transition-all">
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}
