import React from 'react';
import { motion } from 'framer-motion';
import {
  Network,
  Combine,
  Zap,
  TrendingUp,
  LayoutDashboard,
  Cloud } from
'lucide-react';
import platform1 from '../../assets/mainPage/PLATFORM CAPABILITIES.svg';
import platform2 from '../../assets/mainPage/PLATFORM CAPABILITIES (2).svg';
import platform3 from '../../assets/mainPage/PLATFORM CAPABILITIES (3).svg';
import platform4 from '../../assets/mainPage/PLATFORM CAPABILITIES (4).svg';
import platform5 from '../../assets/mainPage/PLATFORM CAPABILITIES (5).svg';
import platform6 from '../../assets/mainPage/PLATFORM CAPABILITIES (6).svg';
export function Features() {
  const features = [
  {
    icon: <img src={platform1} alt="Multi-Source Data Ingestion" className="w-10 h-10" aria-hidden="true" />,
    title: 'Multi-Source Data Ingestion with PLATFORM CAPABILITIES',
    desc: 'Connects enterprise systems, APIs, and IoT devices. Aggregates structured and unstructured data from heterogeneous environments.',
    tag: 'INTEGRATION'
  },
  {
    icon: <img src={platform2} alt="Real-Time Intelligence Processing" className="w-10 h-10" aria-hidden="true" />,
    title: 'Real-Time Intelligence Processing with PLATFORM CAPABILITIES',
    desc: 'Processes live data streams with sub-5ms latency. Generates actionable insights instantly as events occur across connected systems.',
    tag: 'REAL-TIME'
  },
  {
    icon: <img src={platform3} alt="Unified Analytics Dashboard" className="w-10 h-10" aria-hidden="true" />,
    title: 'Unified Analytics Dashboard with PLATFORM CAPABILITIES',
    desc: 'Visualizes unified data insights across all sources. Provides configurable reports, KPIs, and performance metrics in a single view.',
    tag: 'ANALYTICS'
  },
  {
    icon: <img src={platform4} alt="AI Data Fusion Engine" className="w-10 h-10" aria-hidden="true" />,
    title: 'AI Data Fusion Engine with PLATFORM CAPABILITIES',
    desc: 'Combines and correlates data from multiple sources simultaneously. Identifies hidden relationships, cross-system patterns, and signal dependencies.',
    tag: 'FUSION'
  },
  {
    icon: <img src={platform5} alt="Predictive Analytics" className="w-10 h-10" aria-hidden="true" />,
    title: 'Predictive Analytics with PLATFORM CAPABILITIES',
    desc: 'Forecasts trends and system behavior using AI models. Proactively detects anomalies and inefficiencies before they impact operations.',
    tag: 'PREDICTIVE'
  },
  {
    icon: <img src={platform6} alt="Scalable Enterprise Architecture" className="w-10 h-10" aria-hidden="true" />,
    title: 'Scalable Enterprise Architecture with PLATFORM CAPABILITIES',
    desc: 'Designed for enterprise and IoT deployments at scale. Supports high-volume data ingestion, GPU-accelerated processing, and multi-region distribution.',
    tag: 'SCALE'
  }];

  return (
    <section className="py-24 border-t border-sdf-border bg-sdf-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // PLATFORM CAPABILITIES
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text">
            Every Capability Your Data Intelligence Stack Needs.
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {features.map((feat, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="group relative bg-sdf-bg border border-sdf-border p-6 rounded-xl hover:-translate-y-1 hover:border-sdf-cyan/50 hover:shadow-[0_10px_30px_rgba(0,200,255,0.1)] transition-all duration-300 break-inside-avoid mb-6">
            
              <div className="absolute top-4 right-4">
                <span className="font-mono text-[10px] text-sdf-muted bg-sdf-surface px-2 py-1 rounded border border-sdf-border group-hover:text-sdf-cyan group-hover:border-sdf-cyan/30 transition-colors">
                  {feat.tag}
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-sdf-surface border border-sdf-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>

              <h3 className="font-heading text-lg font-bold text-sdf-text mb-3">
                {feat.title}
              </h3>

              <p className="font-mono text-sm text-sdf-muted leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}