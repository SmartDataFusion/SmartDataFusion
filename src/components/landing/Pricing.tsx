import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
export function Pricing() {
  const plans = [
  {
    name: 'Starter',
    target: 'CORE',
    desc: 'SMBs & Startups',
    color: 'border-sdf-cyan',
    features: [
    'Up to 10 Data Sources',
    '10,000 Events/sec',
    'Standard Dashboards',
    'Email Support']

  },
  {
    name: 'Growth',
    target: 'ENTERPRISE',
    desc: 'Large Organizations',
    color: 'border-sdf-violet',
    popular: true,
    features: [
    'Unlimited Data Sources',
    '100,000 Events/sec',
    'Advanced AI Fusion',
    'Predictive Analytics',
    '24/7 Priority Support']

  },
  {
    name: 'Scale',
    target: 'PLATFORM',
    desc: 'IoT & Infrastructure Providers',
    color: 'border-[#F5A623]',
    features: [
    'Multi-Region Deployment',
    'Unlimited Events/sec',
    'Custom AI Models',
    'White-label API',
    'Dedicated Success Manager']

  }];

  return (
    <section
      className="py-24 border-t border-sdf-border bg-sdf-bg relative"
      id="pricing">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // PRICING
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text">
            Scalable Plans for Every Intelligence Need.
          </h2>
          <p className="font-mono text-sm text-sdf-muted mt-4 max-w-2xl mx-auto">
            Subscription-based SaaS pricing with tiers aligned to data volume,
            integrations and deployment scale.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) =>
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
            className={`relative bg-sdf-surface border border-sdf-border rounded-xl p-8 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] ${plan.popular ? 'shadow-[0_0_30px_rgba(123,47,255,0.15)] md:-translate-y-4' : ''}`}>
            
              {/* Top Color Border */}
              <div
              className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl border-t-2 ${plan.color}`}>
            </div>

              {plan.popular &&
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sdf-violet text-white text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
            }

              <div className="mb-8">
                <span className="font-mono text-xs text-sdf-muted mb-2 block">
                  {plan.target}
                </span>
                <h3 className="font-heading text-2xl font-bold text-sdf-text mb-1">
                  {plan.name}
                </h3>
                <p className="font-ui text-sm text-sdf-muted">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, i) =>
              <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-sdf-text shrink-0 mt-0.5" />
                    <span className="font-mono text-sm text-sdf-muted">
                      {feat}
                    </span>
                  </li>
              )}
              </ul>

              <button
              className={`w-full py-3 rounded font-ui font-bold transition-all ${plan.popular ? 'bg-sdf-violet text-white hover:bg-sdf-violet/90 hover:shadow-[0_0_15px_rgba(123,47,255,0.4)]' : 'bg-transparent border border-sdf-border text-sdf-text hover:border-sdf-cyan hover:text-sdf-cyan'}`}>
              
                {plan.popular ? 'Get Started' : 'Contact Sales'}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}