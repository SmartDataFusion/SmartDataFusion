import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import probIcon1 from '../../assets/mainPage/the problem.svg';
import probIcon2 from '../../assets/mainPage/the problem (2).svg';
import probIcon3 from '../../assets/mainPage/the problem (3).svg';
import probIcon4 from '../../assets/mainPage/the problem (4).svg';
export function Problem() {
  const problems = [
  {
    id: 'ERR_001',
    icon: <img src={probIcon1} alt="Data Silos" className="w-8 h-8" aria-hidden="true" />,
    title: 'Data Silos',
    desc: 'Enterprise and IoT systems operating in isolation, blocking unified visibility.'
  },
  {
    id: 'ERR_002',
    icon: <img src={probIcon2} alt="Integration Complexity" className="w-8 h-8" aria-hidden="true" />,
    title: 'Integration Complexity',
    desc: 'Difficulty connecting diverse APIs, protocols, and data formats.'
  },
  {
    id: 'ERR_003',
    icon: <img src={probIcon3} alt="Limited Real-Time Visibility" className="w-8 h-8" aria-hidden="true" />,
    title: 'Limited Real-Time Visibility',
    desc: 'Delayed insights causing reactive rather than proactive decisions.'
  },
  {
    id: 'ERR_004',
    icon: <img src={probIcon4} alt="Inefficient Decision-Making" className="w-8 h-8" aria-hidden="true" />,
    title: 'Inefficient Decision-Making',
    desc: 'Fragmented data forcing teams to work without complete context.'
  }];

  return (
    <section
      className="py-24 border-t border-sdf-border bg-sdf-bg relative"
      id="problem">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // THE PROBLEM
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text max-w-2xl">
            Why Your Data Isn't Working for You.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6">
          {problems.map((prob, idx) =>
          <motion.div
            key={prob.id}
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
            className="relative group p-6 bg-sdf-surface border border-sdf-border rounded-lg overflow-hidden hover:border-sdf-cyan/50 transition-colors w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
            
              {/* Left border glow */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-sdf-cyan opacity-50 group-hover:opacity-100 group-hover:glow-cyan transition-all"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-sdf-bg rounded-md border border-sdf-border">
                  {prob.icon}
                </div>
                <span className="font-mono text-xs text-sdf-red bg-sdf-red/10 px-2 py-1 rounded">
                  {prob.id}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-sdf-text mb-3">
                {prob.title}
              </h3>
              <p className="font-mono text-sm text-sdf-muted leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}