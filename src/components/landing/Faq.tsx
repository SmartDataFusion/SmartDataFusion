import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What data sources can SmartDataFusion connect to?',
    answer:
      'We support enterprise systems, REST APIs, cloud data stores, and IoT telemetry streams. The platform is designed for heterogeneous protocols and data formats.'
  },
  {
    question: 'How fast is real-time processing?',
    answer:
      'SmartDataFusion is optimized for sub-5ms insight latency, enabling live decisioning and anomaly detection as events occur.'
  },
  {
    question: 'Is this offered as SaaS or private deployment?',
    answer:
      'Both. We offer subscription SaaS tiers as well as enterprise deployments for regulated or high-scale environments.'
  },
  {
    question: 'How does pricing scale?',
    answer:
      'Plans scale by data volume, number of integrations, and compute requirements. Enterprise tiers include dedicated support and custom AI models.'
  },
  {
    question: 'How do we get access to the Developer API?',
    answer:
      'API access is rolling out in phases. Contact our team to join the early access list and receive integration guidance.'
  }
];

export function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 border-t border-sdf-border bg-sdf-surface/30 relative"
      id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text">
            Common Questions, Clear Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-sdf-bg border border-sdf-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-sdf-surface/50 transition-colors">
                <h3 className="font-heading text-lg font-semibold text-sdf-text text-left">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-sdf-cyan transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 border-t border-sdf-border">
                  <p className="font-mono text-sm text-sdf-muted leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
