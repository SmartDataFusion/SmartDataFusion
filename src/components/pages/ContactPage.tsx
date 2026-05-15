import React from 'react';
import { PageFrame } from './PageFrame';
import { Contact } from '../landing/Contact';
import { Footer } from '../landing/Footer';
import { Clock, Users, MapPin } from 'lucide-react';

interface ContactPageProps {
  onLaunchDashboard: () => void;
}

export function ContactPage({ onLaunchDashboard }: ContactPageProps) {
  return (
    <PageFrame
      eyebrow="// CONTACT SMARTDATAFUSION"
      title="Start a conversation with the SmartDataFusion team."
      description="Use this page to reach the team for platform questions, demos, integration planning, or support inquiries."
      onLaunchDashboard={onLaunchDashboard}>

      <Contact />

      <section className="py-16 border-t border-sdf-border bg-sdf-surface/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Enterprise onboarding',
              text: 'Get a tailored rollout plan covering data sources, security, and timelines.'
            },
            {
              title: 'Technical support',
              text: '24/7 response coverage for critical integrations and production workflows.'
            },
            {
              title: 'Regional availability',
              text: 'Engagements available across North America, UK, EU, and APAC time zones.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-sdf-border bg-sdf-surface p-6">
              <h3 className="font-heading text-lg font-semibold text-sdf-text mb-2">{item.title}</h3>
              <p className="font-mono text-xs text-sdf-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-sdf-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-8">Support Channels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <Clock className="w-8 h-8 text-sdf-cyan mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Response Times</h3>
              <p className="font-mono text-sm text-sdf-muted">
                • Critical: 1 hour
                • Urgent: 4 hours
                • Standard: 24 hours
              </p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <Users className="w-8 h-8 text-sdf-violet mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Support Team</h3>
              <p className="font-mono text-sm text-sdf-muted">
                Technical experts with enterprise integration experience and hands-on support.
              </p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <MapPin className="w-8 h-8 text-sdf-cyan mb-4" />
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Global Coverage</h3>
              <p className="font-mono text-sm text-sdf-muted">
                Support available 24/7 across all major time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sdf-border bg-sdf-surface/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-8 text-center">Common Questions</h2>
          <div className="space-y-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">How quickly can we get started?</h3>
              <p className="font-mono text-sm text-sdf-muted">Most integrations launch within 2-4 weeks, depending on data complexity and stakeholder availability.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">What's your implementation process?</h3>
              <p className="font-mono text-sm text-sdf-muted">We follow a phased approach: discovery → architecture → MVP → optimization. Each phase includes stakeholder reviews.</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Do you offer training?</h3>
              <p className="font-mono text-sm text-sdf-muted">Yes. Onboarding includes platform training, dashboard customization workshops, and ongoing team enablement.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}