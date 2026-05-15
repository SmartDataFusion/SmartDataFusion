import { PageFrame } from './PageFrame';
import { Footer } from '../landing/Footer';
import about1 from '../../assets/dashboard/about1.svg';
import about2 from '../../assets/dashboard/about2.svg';
import about3 from '../../assets/dashboard/about3.svg';
import about4 from '../../assets/dashboard/about4.svg';

interface AboutPageProps {
  onLaunchDashboard: () => void;
}

export function AboutPage({ onLaunchDashboard }: AboutPageProps) {
  return (
    <PageFrame
      eyebrow="// ABOUT SMARTDATAFUSION"
      title="Built to unify enterprise and IoT data into one intelligence layer."
      description="SmartDataFusion helps teams ingest, fuse, and act on fragmented data across ERP systems, APIs, cloud platforms, and connected devices."
      onLaunchDashboard={onLaunchDashboard}>

      <section className="py-20 border-b border-sdf-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-sdf-text">Our mission</h2>
            <p className="font-mono text-sm text-sdf-muted leading-relaxed">
              SmartDataFusion Analytics Inc. is focused on removing data silos between operational systems and real-time sources.
              We combine ingestion, transformation, analytics, and alerting in a single platform so teams can move from disconnected
              dashboards to actionable intelligence.
            </p>
            <p className="font-mono text-sm text-sdf-muted leading-relaxed">
              The platform is designed for enterprise and industrial environments where reliability, observability, and rapid decision-making matter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                  icon: <img src={about1} alt="Unified workflows" className="w-8 h-8" aria-hidden="true" />,
                title: 'Unified workflows',
                text: 'Connect and orchestrate data flows across systems without rebuilding the stack.'
              },
              {
                  icon: <img src={about2} alt="Real-time insight" className="w-8 h-8" aria-hidden="true" />,
                title: 'Real-time insight',
                text: 'Detect changes and surface events as they happen.'
              },
              {
                  icon: <img src={about3} alt="Security first" className="w-8 h-8" aria-hidden="true" />,
                title: 'Security first',
                text: 'Designed with authentication, abuse prevention, and protected user journeys in mind.'
              },
              {
                  icon: <img src={about4} alt="Built for teams" className="w-8 h-8" aria-hidden="true" />,
                title: 'Built for teams',
                text: 'Supports business, operations, and engineering stakeholders in one experience.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-sdf-border bg-sdf-surface p-5">
                <div className="w-14 h-14 rounded-lg border border-sdf-border bg-sdf-bg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-sdf-text mb-2">{item.title}</h3>
                <p className="font-mono text-xs text-sdf-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              label: 'What we connect',
              value: 'ERP, IoT, REST APIs, cloud data, and support systems.'
            },
            {
              label: 'What we deliver',
              value: 'Analytics, alerts, and predictive insights for faster decisions.'
            },
            {
              label: 'Who we serve',
              value: 'Enterprise teams, industrial operators, and UK/EU clients needing compliant data handling.'
            }
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-sdf-border bg-sdf-surface/60 p-6">
              <div className="font-mono text-xs text-sdf-cyan uppercase tracking-widest mb-3">{item.label}</div>
              <p className="font-mono text-sm text-sdf-muted leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-sdf-border bg-sdf-surface/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-bold text-sdf-text">How we partner</h2>
            <p className="mt-3 font-mono text-sm text-sdf-muted leading-relaxed">
              We align stakeholders early, map data readiness, and deliver phased rollouts
              so enterprise teams can prove impact quickly without disrupting core operations.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Discovery workshops',
                text: 'Define data priorities, KPIs, and integration scope in a structured kickoff.'
              },
              {
                title: 'Solution architecture',
                text: 'Design ingestion, fusion, and analytics layers tailored to your environment.'
              },
              {
                title: 'Continuous optimization',
                text: 'Iterate on models, alerts, and dashboards with ongoing performance reviews.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-sdf-border bg-sdf-surface p-6">
                <h3 className="font-heading text-lg font-semibold text-sdf-text mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-sdf-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-sdf-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-sdf-text mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Manufacturing', desc: 'Real-time production data fusion' },
              { name: 'Energy & Utilities', desc: 'Grid and asset monitoring' },
              { name: 'Logistics', desc: 'Fleet and supply chain visibility' },
              { name: 'Healthcare', desc: 'Patient and operational insights' }
            ].map((industry) => (
              <div key={industry.name} className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
                <h3 className="font-ui font-semibold text-sdf-text mb-2">{industry.name}</h3>
                <p className="font-mono text-xs text-sdf-muted">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}