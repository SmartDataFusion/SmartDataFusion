import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';
import heroIcon1 from '../../assets/mainPage/hero icons.svg';
import heroIcon2 from '../../assets/mainPage/hero icons (2).svg';
import heroIcon3 from '../../assets/mainPage/hero icons (3).svg';
import heroIcon4 from '../../assets/mainPage/hero icons (4).svg';
interface HeroProps {
  onLaunchDashboard: () => void;
}
export function Hero({ onLaunchDashboard }: HeroProps) {
  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 bg-dot-pattern opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="flex flex-col gap-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sdf-border bg-sdf-surface/50 backdrop-blur w-fit">
              <span className="w-2 h-2 rounded-full bg-sdf-green animate-pulse"></span>
              <span className="text-xs font-mono text-sdf-muted uppercase tracking-wider">
                System Status: Optimal
              </span>
            </div>

            <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-sdf-text">
              <span className="block">Enterprise & IoT Data,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sdf-cyan to-sdf-violet">
                Fused Into One
              </span>
              <span className="block">Intelligence Layer.</span>
            </h1>

            <p className="font-mono text-sdf-muted text-sm lg:text-base leading-relaxed max-w-xl">
              Fuse enterprise systems and IoT data into a single, decision-grade intelligence engine.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onLaunchDashboard}
                className="group flex items-center gap-2 bg-sdf-cyan text-sdf-bg font-ui font-bold px-6 py-3 rounded hover:bg-sdf-cyan/90 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] transition-all duration-300">
                
                Explore the Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 border border-sdf-border bg-sdf-surface/50 hover:bg-sdf-surface text-sdf-text font-mono text-sm px-6 py-3 rounded transition-all duration-300">
                <Terminal className="w-4 h-4 text-sdf-muted" />
                Request a Demo
              </button>
            </div>
          </motion.div>

          {/* Hero Visual - Animated SVG Network */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.2
            }}
            className="relative h-[400px] lg:h-[500px] w-full border border-sdf-border/50 rounded-xl bg-sdf-surface/20 backdrop-blur-sm overflow-hidden flex items-center justify-center">
            
            {/* SVG Diagram */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 500"
              preserveAspectRatio="xMidYMid meet">
              
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0F2035" />
                  <stop offset="50%" stopColor="#00C8FF" />
                  <stop offset="100%" stopColor="#7B2FFF" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection Lines */}
              <g
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 6"
                className="animate-dash">
                
                <path d="M 150 100 C 300 100, 300 250, 400 250" />
                <path d="M 150 200 C 300 200, 300 250, 400 250" />
                <path d="M 150 300 C 300 300, 300 250, 400 250" />
                <path d="M 150 400 C 300 400, 300 250, 400 250" />

                <path d="M 400 250 C 500 250, 500 150, 650 150" />
                <path d="M 400 250 C 500 250, 500 250, 650 250" />
                <path d="M 400 250 C 500 250, 500 350, 650 350" />
              </g>

              {/* Particles along paths (simulated with small circles) */}
              <circle
                cx="275"
                cy="175"
                r="3"
                fill="#00C8FF"
                filter="url(#glow)">
                
                <animate
                  attributeName="cx"
                  values="150;400"
                  dur="2s"
                  repeatCount="indefinite" />
                
                <animate
                  attributeName="cy"
                  values="100;250"
                  dur="2s"
                  repeatCount="indefinite" />
                
              </circle>
              <circle
                cx="275"
                cy="225"
                r="3"
                fill="#00C8FF"
                filter="url(#glow)">
                
                <animate
                  attributeName="cx"
                  values="150;400"
                  dur="2.5s"
                  repeatCount="indefinite" />
                
                <animate
                  attributeName="cy"
                  values="200;250"
                  dur="2.5s"
                  repeatCount="indefinite" />
                
              </circle>
              <circle
                cx="275"
                cy="275"
                r="3"
                fill="#00C8FF"
                filter="url(#glow)">
                
                <animate
                  attributeName="cx"
                  values="150;400"
                  dur="1.8s"
                  repeatCount="indefinite" />
                
                <animate
                  attributeName="cy"
                  values="300;250"
                  dur="1.8s"
                  repeatCount="indefinite" />
                
              </circle>
              <circle
                cx="275"
                cy="325"
                r="3"
                fill="#00C8FF"
                filter="url(#glow)">
                
                <animate
                  attributeName="cx"
                  values="150;400"
                  dur="2.2s"
                  repeatCount="indefinite" />
                
                <animate
                  attributeName="cy"
                  values="400;250"
                  dur="2.2s"
                  repeatCount="indefinite" />
                
              </circle>

              <circle
                cx="525"
                cy="200"
                r="3"
                fill="#7B2FFF"
                filter="url(#glow)">
                
                <animate
                  attributeName="cx"
                  values="400;650"
                  dur="2s"
                  repeatCount="indefinite" />
                
                <animate
                  attributeName="cy"
                  values="250;150"
                  dur="2s"
                  repeatCount="indefinite" />
                
              </circle>
              <circle
                cx="525"
                cy="250"
                r="3"
                fill="#00FF9C"
                filter="url(#glow)">
                
                <animate
                  attributeName="cx"
                  values="400;650"
                  dur="1.5s"
                  repeatCount="indefinite" />
                
                <animate
                  attributeName="cy"
                  values="250;250"
                  dur="1.5s"
                  repeatCount="indefinite" />
                
              </circle>
              <circle
                cx="525"
                cy="300"
                r="3"
                fill="#FF4C4C"
                filter="url(#glow)">
                
                <animate
                  attributeName="cx"
                  values="400;650"
                  dur="2.3s"
                  repeatCount="indefinite" />
                
                <animate
                  attributeName="cy"
                  values="250;350"
                  dur="2.3s"
                  repeatCount="indefinite" />
                
              </circle>
            </svg>

            {/* HTML Overlays for Nodes */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Input Nodes */}
              <div className="absolute left-[10%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded border border-sdf-border bg-sdf-surface flex items-center justify-center shadow-lg">
                    <img src={heroIcon1} alt="ERP Systems" className="w-7 h-7" aria-hidden="true" />
                  </div>
                <span className="text-[10px] font-mono text-sdf-muted">
                  ERP Systems
                </span>
              </div>
              <div className="absolute left-[10%] top-[40%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded border border-sdf-border bg-sdf-surface flex items-center justify-center shadow-lg">
                  <img src={heroIcon2} alt="IoT Sensors" className="w-7 h-7" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-mono text-sdf-muted">
                  IoT Sensors
                </span>
              </div>
              <div className="absolute left-[10%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded border border-sdf-border bg-sdf-surface flex items-center justify-center shadow-lg">
                  <img src={heroIcon3} alt="REST APIs" className="w-7 h-7" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-mono text-sdf-muted">
                  REST APIs
                </span>
              </div>
              <div className="absolute left-[10%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded border border-sdf-border bg-sdf-surface flex items-center justify-center shadow-lg">
                  <img src={heroIcon4} alt="Cloud Data" className="w-7 h-7" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-mono text-sdf-muted">
                  Cloud Data
                </span>
              </div>

              {/* Central Fusion Core */}
              <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                <div className="relative w-20 h-20 rounded-xl border border-sdf-violet/50 bg-sdf-surface flex items-center justify-center animate-pulse-glow-violet backdrop-blur-md">
                  <img src="/favicon.svg" alt="Fusion Engine" className="w-14 h-14" aria-hidden="true" />
                  <div className="absolute inset-0 border-2 border-sdf-violet rounded-xl animate-ping opacity-20"></div>
                </div>
                <div className="text-center">
                  <span className="block text-xs font-heading font-bold text-sdf-text">
                    FUSION ENGINE
                  </span>
                  <span className="text-[9px] font-mono text-sdf-violet">
                    AI CORE ACTIVE
                  </span>
                </div>
              </div>

              {/* Output Nodes */}
              <div className="absolute left-[85%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-sdf-cyan/30 bg-sdf-surface flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sdf-cyan animate-pulse"></div>
                </div>
                <span className="text-[10px] font-mono text-sdf-cyan">
                  Insights
                </span>
              </div>
              <div className="absolute left-[85%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-sdf-green/30 bg-sdf-surface flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sdf-green animate-pulse"></div>
                </div>
                <span className="text-[10px] font-mono text-sdf-green">
                  Predictions
                </span>
              </div>
              <div className="absolute left-[85%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-sdf-red/30 bg-sdf-surface flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sdf-red animate-pulse"></div>
                </div>
                <span className="text-[10px] font-mono text-sdf-red">
                  Alerts
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Live Ticker Strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-sdf-border bg-sdf-surface/80 backdrop-blur-md py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] font-mono text-xs text-sdf-muted items-center gap-8 px-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sdf-green animate-pulse"></span>
            <span className="text-sdf-text">LIVE</span>
          </div>
          <span>|</span>
          <span>
            Data Sources Connected: <span className="text-sdf-cyan">1,247</span>
          </span>
          <span>|</span>
          <span>
            Events Fused/sec: <span className="text-sdf-cyan">84,320</span>
          </span>
          <span>|</span>
          <span>
            Anomalies Detected: <span className="text-sdf-red">3</span>
          </span>
          <span>|</span>
          <span>
            Latency: <span className="text-sdf-green">2.4ms</span>
          </span>
          <span>|</span>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sdf-green animate-pulse"></span>
            <span className="text-sdf-text">LIVE</span>
          </div>
          <span>|</span>
          <span>
            Data Sources Connected: <span className="text-sdf-cyan">1,247</span>
          </span>
          <span>|</span>
          <span>
            Events Fused/sec: <span className="text-sdf-cyan">84,320</span>
          </span>
          <span>|</span>
          <span>
            Anomalies Detected: <span className="text-sdf-red">3</span>
          </span>
          <span>|</span>
          <span>
            Latency: <span className="text-sdf-green">2.4ms</span>
          </span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>);

}