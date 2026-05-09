import React, { useEffect, useState } from 'react';
import { Activity, Database, Zap, Cpu } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, BarChart, Bar } from 'recharts';
export function HealthWidget() {
  const [ingestionData, setIngestionData] = useState(
    Array.from(
      {
        length: 20
      },
      (_, i) => ({
        val: 80000 + Math.random() * 10000
      })
    )
  );
  const [throughputData, setThroughputData] = useState(
    Array.from(
      {
        length: 10
      },
      (_, i) => ({
        val: 10 + Math.random() * 5
      })
    )
  );
  const [metrics, setMetrics] = useState({
    ingestion: 84320,
    throughput: 12.4,
    latency: 2.4,
    gpu: 73
  });
  useEffect(() => {
    let intervalId: number | undefined;

    const tick = () => {
      setMetrics((prev) => ({
        ingestion: Math.floor(84000 + Math.random() * 2000 - 1000),
        throughput: +(12.4 + Math.random() * 0.4 - 0.2).toFixed(1),
        latency: +(2.4 + Math.random() * 0.6 - 0.3).toFixed(1),
        gpu: Math.floor(73 + Math.random() * 10 - 5)
      }));
      setIngestionData((prev) => [
        ...prev.slice(1),
        {
          val: 80000 + Math.random() * 10000
        }
      ]);
      setThroughputData((prev) => [
        ...prev.slice(1),
        {
          val: 10 + Math.random() * 5
        }
      ]);
    };

    const start = () => {
      if (intervalId) return;
      intervalId = window.setInterval(tick, 3000);
    };

    const stop = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Ingestion Rate */}
      <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-mono text-[10px] text-sdf-muted uppercase tracking-wider block mb-1">
              Data Ingestion Rate
            </span>
            <span className="font-heading text-2xl font-bold text-sdf-text">
              {metrics.ingestion.toLocaleString()}{' '}
              <span className="text-xs font-mono text-sdf-muted font-normal">
                ev/s
              </span>
            </span>
          </div>
          <div className="p-1.5 bg-sdf-bg rounded border border-sdf-border">
            <Database className="w-4 h-4 text-sdf-cyan" />
          </div>
        </div>
        <div className="h-10 w-full mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ingestionData}>
              <Line
                type="monotone"
                dataKey="val"
                stroke="#00C8FF"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false} />
              
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center gap-1.5 mt-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-sdf-green"></span>
          <span className="font-mono text-[10px] text-sdf-muted">NOMINAL</span>
        </div>
      </div>

      {/* Throughput */}
      <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-mono text-[10px] text-sdf-muted uppercase tracking-wider block mb-1">
              Fusion Throughput
            </span>
            <span className="font-heading text-2xl font-bold text-sdf-text">
              {metrics.throughput}{' '}
              <span className="text-xs font-mono text-sdf-muted font-normal">
                TB/hr
              </span>
            </span>
          </div>
          <div className="p-1.5 bg-sdf-bg rounded border border-sdf-border">
            <Activity className="w-4 h-4 text-sdf-violet" />
          </div>
        </div>
        <div className="h-10 w-full mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={throughputData}>
              <Bar
                dataKey="val"
                fill="#7B2FFF"
                radius={[2, 2, 0, 0]}
                isAnimationActive={false} />
              
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center gap-1.5 mt-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-sdf-green"></span>
          <span className="font-mono text-[10px] text-sdf-muted">OPTIMAL</span>
        </div>
      </div>

      {/* Latency */}
      <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-mono text-[10px] text-sdf-muted uppercase tracking-wider block mb-1">
              System Latency
            </span>
            <span className="font-heading text-2xl font-bold text-sdf-green">
              {metrics.latency}{' '}
              <span className="text-xs font-mono text-sdf-muted font-normal">
                ms
              </span>
            </span>
          </div>
          <div className="p-1.5 bg-sdf-bg rounded border border-sdf-border">
            <Zap className="w-4 h-4 text-sdf-green" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mb-2">
          {/* Simple CSS Gauge */}
          <div className="relative w-24 h-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-sdf-border border-b-transparent border-r-transparent transform -rotate-45"></div>
            <div
              className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-sdf-green border-b-transparent border-r-transparent transition-transform duration-500"
              style={{
                transform: `rotate(${-45 + metrics.latency / 10 * 90}deg)`
              }}>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sdf-green"></span>
            <span className="font-mono text-[10px] text-sdf-muted">GREEN</span>
          </div>
          <span className="font-mono text-[10px] text-sdf-muted">
            Threshold: &lt;5ms
          </span>
        </div>
      </div>

      {/* GPU Util */}
      <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-mono text-[10px] text-sdf-muted uppercase tracking-wider block mb-1">
              GPU Utilization
            </span>
            <span className="font-heading text-2xl font-bold text-sdf-text">
              {metrics.gpu}
              <span className="text-xs font-mono text-sdf-muted font-normal">
                %
              </span>
            </span>
          </div>
          <div className="p-1.5 bg-sdf-bg rounded border border-sdf-border">
            <Cpu className="w-4 h-4 text-[#76B900]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 mb-2">
          <div className="w-full h-2 bg-sdf-bg rounded-full overflow-hidden flex">
            <div
              className="h-full bg-[#76B900] transition-all duration-500"
              style={{
                width: `${metrics.gpu}%`
              }}>
            </div>
          </div>
          <span className="font-mono text-[9px] text-sdf-muted text-right">
            NVIDIA A100 — CUDA Active
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#76B900] animate-pulse"></span>
          <span className="font-mono text-[10px] text-sdf-muted">ACTIVE</span>
        </div>
      </div>
    </div>);

}