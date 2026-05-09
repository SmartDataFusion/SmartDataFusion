import React, { useEffect, useState, useRef } from 'react';
function Counter({
  end,
  suffix = '',
  duration = 2000




}: {end: number;suffix?: string;duration?: number;}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>);

}
export function Stats() {
  return (
    <section className="py-16 border-y border-sdf-border bg-sdf-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sdf-cyan/5 via-sdf-violet/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-sdf-border/50">
          <div className="text-center px-4 py-6 md:py-0 md:w-1/4">
            <div className="font-heading text-3xl md:text-4xl font-bold text-sdf-cyan mb-2">
              <Counter end={84000} suffix="+" />
            </div>
            <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">
              Events Fused / Sec
            </div>
          </div>

          <div className="text-center px-4 py-6 md:py-0 md:w-1/4">
            <div className="font-heading text-3xl md:text-4xl font-bold text-sdf-text mb-2">
              <Counter end={1200} suffix="+" />
            </div>
            <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">
              Data Sources Supported
            </div>
          </div>

          <div className="text-center px-4 py-6 md:py-0 md:w-1/4">
            <div className="font-heading text-3xl md:text-4xl font-bold text-sdf-green mb-2">
              &lt;
              <Counter end={5} suffix="ms" />
            </div>
            <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">
              Processing Latency
            </div>
          </div>

          <div className="text-center px-4 py-6 md:py-0 md:w-1/4">
            <div className="font-heading text-3xl md:text-4xl font-bold text-sdf-text mb-2">
              <Counter end={99} suffix=".99%" />
            </div>
            <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">
              Platform Uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>);

}