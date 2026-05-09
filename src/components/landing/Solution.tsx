import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
export function Solution() {
  const capabilities = [
  'Multi-Source Data Integration',
  'AI Data Fusion & Correlation Engine',
  'Real-Time Intelligence Processing',
  'Predictive Analytics & Anomaly Detection',
  'Unified Analytics Dashboard',
  'Scalable Enterprise & IoT Architecture'];

  return (
    <section
      className="py-24 border-t border-sdf-border bg-sdf-surface/30 relative"
      id="platform">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <span className="font-mono text-xs text-sdf-cyan uppercase tracking-widest mb-4 block">
              // THE SOLUTION
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text mb-6">
              SmartDataFusion - One Unified Intelligence Engine.
            </h2>
            <div className="space-y-6 font-mono text-sm text-sdf-muted leading-relaxed">
              <p>
                Break down data silos with a centralized intelligence layer. Our
                platform ingests streams from legacy ERPs, modern REST APIs, and
                high-frequency IoT sensors simultaneously.
              </p>
              <p>
                Using advanced AI models, it merges structured and unstructured
                data, correlates cross-system patterns in real-time, and
                generates actionable intelligence before issues impact your
                bottom line.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-sdf-surface border border-sdf-border rounded-xl p-8 relative overflow-hidden">
            
            {/* Background accent */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-sdf-violet/10 rounded-full blur-3xl"></div>

            <h3 className="font-heading text-xl font-semibold text-sdf-text mb-8 relative z-10">
              Core Capabilities
            </h3>

            <div className="space-y-4 relative z-10">
              {capabilities.map((cap, idx) =>
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + idx * 0.1
                }}
                className="flex items-center gap-4 p-3 rounded bg-sdf-bg/50 border border-sdf-border/50 hover:border-sdf-cyan/30 transition-colors">
                
                  <CheckCircle2 className="w-7 h-7 text-sdf-green shrink-0 animate-pulse" />
                  <span className="font-mono text-sm text-sdf-text">{cap}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}