import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Building2, Briefcase, Wifi } from 'lucide-react';
export function Industries() {
  const industries = [
  {
    icon: <Factory className="w-10 h-10 opacity-50" />,
    title: 'Manufacturing & Industrial',
    desc: 'Real-time IoT sensor fusion for production optimization'
  },
  {
    icon: <Building2 className="w-10 h-10 opacity-50" />,
    title: 'Smart Infrastructure & Cities',
    desc: 'Unified data intelligence for urban systems and services'
  },
  {
    icon: <Briefcase className="w-10 h-10 opacity-50" />,
    title: 'Enterprise & Large Organizations',
    desc: 'Cross-system analytics for operational efficiency'
  },
  {
    icon: <Wifi className="w-10 h-10 opacity-50" />,
    title: 'IoT Solution Providers',
    desc: 'AI-powered intelligence layer for IoT platform builders'
  }];

  return (
    <section
      className="py-24 border-t border-sdf-border bg-sdf-bg relative"
      id="iot">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // WHO IT'S FOR
          </span>
          <h2 className="font-heading text-3xl font-bold text-sdf-text">
            Designed for Intelligence-Critical Industries.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {industries.map((ind, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1
            }}
            className="bg-sdf-surface border border-sdf-border p-6 rounded-lg relative overflow-hidden group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
            
              <div className="absolute -right-4 -bottom-4 text-sdf-border group-hover:text-sdf-border/80 transition-colors">
                {ind.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-sdf-text mb-2 relative z-10">
                {ind.title}
              </h3>
              <p className="font-mono text-xs text-sdf-muted relative z-10">
                {ind.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}