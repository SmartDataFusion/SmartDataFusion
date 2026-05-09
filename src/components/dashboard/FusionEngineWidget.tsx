import React, { useEffect, useState, useRef } from 'react';
import { Cpu } from 'lucide-react';
export function FusionEngineWidget() {
  const [logs, setLogs] = useState<string[]>([
  '[14:32:01.443] Fusing: SAP ERP + IoT Floor Sensors — Pattern Match: 94.2%',
  '[14:32:01.891] Anomaly Detected: Sensor Cluster B — Variance Threshold Exceeded',
  '[14:32:02.210] Insight Generated: Production throughput deviation +12.4%',
  '[14:32:02.774] Correlation Found: ERP order spike ↔ IoT conveyor load (r=0.91)']
  );
  const logContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const templates = [
    'Fusing: Cloud Data + REST API — Pattern Match: {rand}%',
    'Insight Generated: Resource optimization potential +{rand}%',
    'Correlation Found: API latency ↔ DB load (r=0.{rand})',
    'Processing batch {rand} from IoT Edge Nodes',
    'Model Update: Weights adjusted based on recent anomalies'];

    let intervalId: number | undefined;

    const pushLog = () => {
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;
      const isAnomaly = Math.random() > 0.8;
      let msg = '';
      if (isAnomaly) {
        msg = `[${timeStr}] Anomaly Detected: System variance threshold exceeded (Code: ERR_${Math.floor(Math.random() * 900) + 100})`;
      } else {
        const tpl = templates[Math.floor(Math.random() * templates.length)];
        msg = `[${timeStr}] ${tpl.replace(/{rand}/g, Math.floor(Math.random() * 90 + 10).toString())}`;
      }
      setLogs((prev) => [...prev.slice(-15), msg]);
    };

    const start = () => {
      if (intervalId) return;
      intervalId = window.setInterval(pushLog, 2000);
    };

    const stop = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    // start when visible
    if (!document.hidden) start();

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);
  useEffect(() => {
    if (!logContainerRef.current) return;
    logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
  }, [logs]);
  return (
    <div className="bg-sdf-surface border border-sdf-border rounded-xl flex flex-col h-full overflow-hidden relative">
      <div className="p-4 border-b border-sdf-border flex items-center justify-between z-10 bg-sdf-surface">
        <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest">
          // AI FUSION ENGINE
        </span>
        <div className="inline-flex items-center gap-1.5 bg-[#76B900]/10 border border-[#76B900]/30 px-2 py-1 rounded">
          <span className="w-2 h-2 bg-[#76B900] rounded-full animate-pulse"></span>
          <span className="text-[10px] font-mono text-[#76B900]">
            Powered by NVIDIA SDK
          </span>
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="h-64 relative bg-sdf-bg border-b border-sdf-border overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 300"
          preserveAspectRatio="xMidYMid meet">
          
          <defs>
            <linearGradient id="dashGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7B2FFF" />
            </linearGradient>
            <linearGradient id="dashGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7B2FFF" />
              <stop offset="100%" stopColor="#00FF9C" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Input to Core */}
          <g
            stroke="url(#dashGrad1)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
            className="animate-dash">
            
            <path d="M 100 50 C 250 50, 300 150, 400 150" />
            <path d="M 100 150 C 250 150, 300 150, 400 150" />
            <path d="M 100 250 C 250 250, 300 150, 400 150" />
          </g>

          {/* Core to Output */}
          <g
            stroke="url(#dashGrad2)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
            className="animate-dash">
            
            <path d="M 400 150 C 500 150, 550 80, 700 80" />
            <path d="M 400 150 C 500 150, 550 150, 700 150" />
            <path d="M 400 150 C 500 150, 550 220, 700 220" />
          </g>

          {/* Particles */}
          <circle cx="250" cy="100" r="2" fill="#00C8FF">
            <animate
              attributeName="cx"
              values="100;400"
              dur="1.5s"
              repeatCount="indefinite" />
            
            <animate
              attributeName="cy"
              values="50;150"
              dur="1.5s"
              repeatCount="indefinite" />
            
          </circle>
          <circle cx="250" cy="150" r="2" fill="#00C8FF">
            <animate
              attributeName="cx"
              values="100;400"
              dur="2s"
              repeatCount="indefinite" />
            
            <animate
              attributeName="cy"
              values="150;150"
              dur="2s"
              repeatCount="indefinite" />
            
          </circle>
          <circle cx="250" cy="200" r="2" fill="#00C8FF">
            <animate
              attributeName="cx"
              values="100;400"
              dur="1.8s"
              repeatCount="indefinite" />
            
            <animate
              attributeName="cy"
              values="250;150"
              dur="1.8s"
              repeatCount="indefinite" />
            
          </circle>

          <circle cx="550" cy="115" r="2" fill="#00FF9C">
            <animate
              attributeName="cx"
              values="400;700"
              dur="1.5s"
              repeatCount="indefinite" />
            
            <animate
              attributeName="cy"
              values="150;80"
              dur="1.5s"
              repeatCount="indefinite" />
            
          </circle>
          <circle cx="550" cy="150" r="2" fill="#00FF9C">
            <animate
              attributeName="cx"
              values="400;700"
              dur="2s"
              repeatCount="indefinite" />
            
            <animate
              attributeName="cy"
              values="150;150"
              dur="2s"
              repeatCount="indefinite" />
            
          </circle>
          <circle cx="550" cy="185" r="2" fill="#00FF9C">
            <animate
              attributeName="cx"
              values="400;700"
              dur="1.8s"
              repeatCount="indefinite" />
            
            <animate
              attributeName="cy"
              values="150;220"
              dur="1.8s"
              repeatCount="indefinite" />
            
          </circle>
        </svg>

        {/* Nodes */}
        <div className="absolute left-[12.5%] top-1/2 -translate-y-1/2 flex flex-col gap-16">
          <div className="w-3 h-3 rounded-full bg-sdf-cyan shadow-[0_0_10px_#00C8FF]"></div>
          <div className="w-3 h-3 rounded-full bg-sdf-cyan shadow-[0_0_10px_#00C8FF]"></div>
          <div className="w-3 h-3 rounded-full bg-sdf-cyan shadow-[0_0_10px_#00C8FF]"></div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-16 h-16 rounded-xl border border-sdf-violet bg-sdf-surface flex items-center justify-center animate-pulse-glow-violet z-10">
            <img src="/favicon.svg" alt="AI Fusion Engine" className="w-6 h-6" aria-hidden="true" />
          </div>
        </div>

        <div className="absolute right-[12.5%] top-1/2 -translate-y-1/2 flex flex-col gap-12">
          <div className="w-3 h-3 rounded-full bg-sdf-green shadow-[0_0_10px_#00FF9C]"></div>
          <div className="w-3 h-3 rounded-full bg-sdf-green shadow-[0_0_10px_#00FF9C]"></div>
          <div className="w-3 h-3 rounded-full bg-sdf-green shadow-[0_0_10px_#00FF9C]"></div>
        </div>
      </div>

      {/* Log Area */}
      <div
        ref={logContainerRef}
        className="flex-1 bg-[#020408] p-4 overflow-y-auto font-mono text-[11px] leading-relaxed">
        {logs.map((log, i) => {
          const isAnomaly = log.includes('Anomaly Detected');
          const isNew = i === logs.length - 1;
          return (
            <div
              key={i}
              className={`mb-1 ${isAnomaly ? 'text-sdf-red' : 'text-sdf-muted'} ${isNew ? 'animate-[pulse_1s_ease-in-out]' : ''}`}
              style={
              isNew && !isAnomaly ?
              {
                color: '#F5A623'
              } :
              {}
              }>
              
              {log}
            </div>);

        })}
      </div>
    </div>);

}