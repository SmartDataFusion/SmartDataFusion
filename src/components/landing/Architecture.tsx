import { Cpu } from 'lucide-react';
import archIcon from '../../assets/mainPage/PLATFORM CAPABILITIES (3).svg';

export function Architecture() {
  return (
    <section
      className="py-24 border-t border-sdf-border bg-sdf-bg relative overflow-hidden"
      id="architecture">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
            // ARCHITECTURE
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sdf-text">
            How SmartDataFusion Works - Powered by NVIDIA SDK Architecture.
          </h2>
        </div>

        <div className="relative w-full overflow-x-auto pb-8">
          <div className="min-w-[1000px] h-[400px] relative">
            {/* SVG Background Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none">
              
              <defs>
                <linearGradient
                  id="archGrad1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%">
                  
                  <stop offset="0%" stopColor="#0F2035" />
                  <stop offset="100%" stopColor="#00C8FF" />
                </linearGradient>
                <linearGradient
                  id="archGrad2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%">
                  
                  <stop offset="0%" stopColor="#00C8FF" />
                  <stop offset="50%" stopColor="#7B2FFF" />
                  <stop offset="100%" stopColor="#00FF9C" />
                </linearGradient>
              </defs>

              {/* Lines from Input to Fusion */}
              <g
                stroke="url(#archGrad1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
                className="animate-dash">
                
                <path d="M 180 100 C 250 100, 300 200, 380 200" />
                <path d="M 180 166 C 250 166, 300 200, 380 200" />
                <path d="M 180 233 C 250 233, 300 200, 380 200" />
                <path d="M 180 300 C 250 300, 300 200, 380 200" />
              </g>

              {/* Lines from Fusion to Intelligence */}
              <g
                stroke="url(#archGrad2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
                className="animate-dash">
                
                <path d="M 580 200 L 680 200" />
              </g>

              {/* Lines from Intelligence to Output */}
              <g
                stroke="#00FF9C"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
                className="animate-dash"
                opacity="0.5">
                
                <path d="M 880 200 C 920 200, 930 150, 980 150" />
                <path d="M 880 200 L 980 200" />
                <path d="M 880 200 C 920 200, 930 250, 980 250" />
              </g>
            </svg>

            {/* Nodes Container */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {/* Input Layer */}
              <div className="flex flex-col gap-4 w-40 z-10">
                <div className="text-center mb-2">
                  <span className="font-heading text-sm text-sdf-text font-bold">
                    [Input Layer]
                  </span>
                </div>
                {[
                'Enterprise ERP',
                'IoT Sensors',
                'REST APIs',
                'Cloud Systems'].
                map((item, i) =>
                <div
                  key={i}
                  className="bg-sdf-surface border border-sdf-border p-3 rounded text-center text-xs font-mono text-sdf-muted hover:border-sdf-cyan hover:text-sdf-cyan transition-colors cursor-default group relative">
                  
                    {item}
                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-sdf-bg border border-sdf-border p-2 rounded text-[10px] w-32 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20">
                      Ingesting raw data streams.
                    </div>
                  </div>
                )}
              </div>

              {/* Fusion Engine */}
              <div className="w-48 z-10 relative group">
                <div className="text-center mb-4">
                  <span className="font-heading text-sm text-sdf-text font-bold">
                    [Fusion Engine]
                  </span>
                </div>
                <div className="bg-sdf-surface border-2 border-sdf-violet p-6 rounded-xl text-center relative overflow-hidden glow-violet">
                  <div className="absolute inset-0 bg-sdf-violet/5"></div>
                  <img src="/favicon.svg" alt="Fusion Engine" className="w-13 h-13 text-sdf-violet mx-auto mb-1" aria-hidden="true" />
                  <h4 className="font-heading font-bold text-sdf-text text-sm mb-2">
                    AI Data Fusion & Correlation Engine
                  </h4>

                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-sdf-bg border border-sdf-border p-2 rounded text-[10px] font-mono text-sdf-muted w-48 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-center z-20">
                  GPU-accelerated correlation of multi-modal data streams.
                </div>
              </div>

              {/* Intelligence Layer */}
              <div className="w-48 z-10 group relative">
                <div className="text-center mb-4">
                  <span className="font-heading text-sm text-sdf-text font-bold">
                    [Intelligence Layer]
                  </span>
                </div>
                <div className="bg-sdf-surface border border-sdf-cyan p-4 rounded-lg text-center">
                  <ul className="space-y-3 text-xs font-mono text-sdf-text">
                    <li className="border-b border-sdf-border pb-2">
                      Predictive Analytics
                    </li>
                    <li className="border-b border-sdf-border pb-2">
                      Anomaly Detection
                    </li>
                    <li>Pattern Recognition</li>
                  </ul>
                </div>
              </div>

              {/* Output Layer */}
              <div className="flex flex-col gap-4 w-32 z-10">
                <div className="text-center mb-2">
                  <span className="font-heading text-sm text-sdf-text font-bold">
                    [Output Layer]
                  </span>
                </div>
                {['Dashboards', 'Alerts', 'API Outputs'].map((item, i) =>
                <div
                  key={i}
                  className="bg-sdf-surface border border-sdf-border p-3 rounded text-center text-xs font-mono text-sdf-green hover:border-sdf-green transition-colors cursor-default">
                  
                    {item}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}