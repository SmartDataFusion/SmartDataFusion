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
                  icon: <img src={about1} alt="Unified workflows" className="w-5 h-5" aria-hidden="true" />,
                title: 'Unified workflows',
                text: 'Connect and orchestrate data flows across systems without rebuilding the stack.'
              },
              {
                  icon: <img src={about2} alt="Real-time insight" className="w-5 h-5" aria-hidden="true" />,
                title: 'Real-time insight',
                text: 'Detect changes and surface events as they happen.'
              },
              {
                  icon: <img src={about3} alt="Security first" className="w-5 h-5" aria-hidden="true" />,
                title: 'Security first',
                text: 'Designed with authentication, abuse prevention, and protected user journeys in mind.'
              },
              {
                  icon: <img src={about4} alt="Built for teams" className="w-5 h-5" aria-hidden="true" />,
                title: 'Built for teams',
                text: 'Supports business, operations, and engineering stakeholders in one experience.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-sdf-border bg-sdf-surface p-5">
                <div className="w-10 h-10 rounded-lg border border-sdf-border bg-sdf-bg flex items-center justify-center mb-4">
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

      <Footer />
    </PageFrame>
  );
}