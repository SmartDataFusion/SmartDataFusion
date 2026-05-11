import React from 'react';
import { motion } from 'framer-motion';
import { PageFrame } from './PageFrame';
import { Footer } from '../landing/Footer';
import { ArrowRight, Cpu, Network, Zap, TrendingUp, Shield, BarChart3 } from 'lucide-react';

interface ProductPageProps {
  onLaunchDashboard: () => void;
}

export function ProductPage({ onLaunchDashboard }: ProductPageProps) {
  const features = [
    {
      icon: <Network className="w-8 h-8 text-sdf-cyan" />,
      title: 'Multi-Source Data Ingestion',
      desc: 'Seamlessly connect enterprise systems, APIs, cloud platforms, and IoT devices. Aggregate structured and unstructured data from diverse environments into a unified stream.',
      tag: 'INTEGRATION'
    },
    {
      icon: <Zap className="w-8 h-8 text-sdf-cyan" />,
      title: 'Real-Time Intelligence Processing',
      desc: 'Process live data streams with sub-5ms latency. Generate actionable insights instantly as events unfold across your connected systems.',
      tag: 'REAL-TIME'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-sdf-cyan" />,
      title: 'Unified Analytics Dashboard',
      desc: 'Visualize comprehensive data insights in a single, intuitive interface. Access configurable reports, KPIs, and performance metrics at a glance.',
      tag: 'ANALYTICS'
    },
    {
      icon: <Cpu className="w-8 h-8 text-sdf-cyan" />,
      title: 'AI Data Fusion Engine',
      desc: 'Correlate and fuse data from multiple sources simultaneously. Uncover hidden relationships, cross-system patterns, and critical signal dependencies.',
      tag: 'FUSION'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-sdf-cyan" />,
      title: 'Predictive Analytics',
      desc: 'Forecast trends and system behavior using advanced AI models. Proactively detect anomalies and inefficiencies before they impact your operations.',
      tag: 'PREDICTIVE'
    },
    {
      icon: <Shield className="w-8 h-8 text-sdf-cyan" />,
      title: 'Enterprise-Grade Security',
      desc: 'Built with authentication, encryption, and compliance in mind. Ensure data integrity and protect sensitive information across all integrations.',
      tag: 'SECURITY'
    }
  ];

  const benefits = [
    {
      title: 'Eliminate Data Silos',
      desc: 'Break down barriers between disconnected systems and create a single source of truth for your enterprise data.'
    },
    {
      title: 'Accelerate Decision Making',
      desc: 'Transform raw data into actionable intelligence in real-time, enabling faster and more informed business decisions.'
    },
    {
      title: 'Reduce Operational Costs',
      desc: 'Optimize processes, predict maintenance needs, and prevent costly downtime through proactive insights.'
    },
    {
      title: 'Scale with Confidence',
      desc: 'Built on robust architecture that grows with your business, handling increasing data volumes and complexity.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Connect Your Data Sources',
      desc: 'Easily integrate enterprise systems, IoT devices, APIs, and cloud platforms using our intuitive connectors.'
    },
    {
      step: '02',
      title: 'AI-Powered Processing',
      desc: 'Our advanced AI engine processes and correlates data streams in real-time, identifying patterns and anomalies.'
    },
    {
      step: '03',
      title: 'Unified Intelligence',
      desc: 'Access comprehensive insights through a single dashboard, with automated reports and alerts.'
    },
    {
      step: '04',
      title: 'Continuous Optimization',
      desc: 'Machine learning models continuously improve, providing increasingly accurate predictions and insights.'
    }
  ];

  return (
    <PageFrame
      eyebrow="// NEXARA PRO"
      title="The Next-Generation AI-Powered Data Fusion Platform"
      description="Nexara Pro revolutionizes how enterprises harness their data, turning fragmented information into unified intelligence that drives real-time decisions and strategic insights."
      onLaunchDashboard={onLaunchDashboard}>

      {/* Hero CTA */}
      <section className="py-12 border-b border-sdf-border bg-sdf-surface/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => window.open('https://smartdatafusion.com/dashboard', '_blank')}
              className="group inline-flex items-center gap-2 bg-sdf-cyan text-sdf-bg font-ui font-bold px-8 py-4 rounded-lg hover:bg-sdf-cyan/90 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] transition-all duration-300 text-lg">
              Try Nexara Pro Live
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 font-mono text-sm text-sdf-muted">
              Experience the power of unified data intelligence in real-time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 border-b border-sdf-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4">
              Powerful Features for Modern Enterprises
            </h2>
            <p className="font-mono text-sdf-muted max-w-2xl mx-auto">
              Nexara Pro combines cutting-edge AI with enterprise-grade reliability to deliver unparalleled data fusion capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 border border-sdf-border rounded-lg bg-sdf-surface/20 hover:bg-sdf-surface/40 transition-all duration-300 hover:border-sdf-cyan/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <span className="font-mono text-xs text-sdf-cyan uppercase tracking-wider">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-sdf-text mb-2">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm text-sdf-muted leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-b border-sdf-border bg-sdf-surface/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4">
              Transform Your Business Operations
            </h2>
            <p className="font-mono text-sdf-muted max-w-2xl mx-auto">
              Discover how Nexara Pro can revolutionize your data strategy and drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-sdf-border rounded-lg bg-sdf-surface/20"
              >
                <h3 className="font-heading text-2xl font-bold text-sdf-text mb-4">
                  {benefit.title}
                </h3>
                <p className="font-mono text-sdf-muted leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-b border-sdf-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4">
              How Nexara Pro Works
            </h2>
            <p className="font-mono text-sdf-muted max-w-2xl mx-auto">
              A streamlined process that turns complex data integration into simple, powerful insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-sdf-cyan rounded-full flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-sdf-cyan">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-sdf-text mb-3">
                  {step.title}
                </h3>
                <p className="font-mono text-sm text-sdf-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Foundation */}
      <section className="py-20 border-b border-sdf-border bg-sdf-surface/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4">
              Built on Cutting-Edge Technology
            </h2>
            <p className="font-mono text-sdf-muted max-w-2xl mx-auto">
              Powered by NVIDIA's advanced SDKs for unparalleled performance and intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-sdf-border rounded-lg bg-sdf-surface/20">
              <h4 className="font-heading text-lg font-bold text-sdf-text mb-2">
                Real-Time Processing
              </h4>
              <p className="font-mono text-sm text-sdf-muted">
                NVIDIA Morpheus for sub-5ms latency data fusion and anomaly detection.
              </p>
            </div>
            <div className="p-6 border border-sdf-border rounded-lg bg-sdf-surface/20">
              <h4 className="font-heading text-lg font-bold text-sdf-text mb-2">
                AI Model Training
              </h4>
              <p className="font-mono text-sm text-sdf-muted">
                NVIDIA RAPIDS for high-speed data processing and machine learning.
              </p>
            </div>
            <div className="p-6 border border-sdf-border rounded-lg bg-sdf-surface/20">
              <h4 className="font-heading text-lg font-bold text-sdf-text mb-2">
                Intelligent Reports
              </h4>
              <p className="font-mono text-sm text-sdf-muted">
                NVIDIA NeMo for generating human-readable insights and summaries.
              </p>
            </div>
            <div className="p-6 border border-sdf-border rounded-lg bg-sdf-surface/20">
              <h4 className="font-heading text-lg font-bold text-sdf-text mb-2">
                Production Deployment
              </h4>
              <p className="font-mono text-sm text-sdf-muted">
                NVIDIA Triton Inference Server and TensorRT for optimized deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-bold text-sdf-text mb-6">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="font-mono text-sdf-muted mb-8 max-w-2xl mx-auto">
              Join leading enterprises already using Nexara Pro to unlock the full potential of their data.
            </p>
            <button
              onClick={() => window.open('https://smartdatafusion.com/dashboard', '_blank')}
              className="group inline-flex items-center gap-2 bg-sdf-cyan text-sdf-bg font-ui font-bold px-8 py-4 rounded-lg hover:bg-sdf-cyan/90 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] transition-all duration-300 text-lg">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}