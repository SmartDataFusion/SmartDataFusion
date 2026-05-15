import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logoFooter from '../../assets/logoFooter.png';

interface PageFrameProps {
  eyebrow: string;
  title: string;
  description: string;
  onLaunchDashboard: () => void;
  ctaLabel?: string;
  children: React.ReactNode;
}

export function PageFrame({
  eyebrow,
  title,
  description,
  onLaunchDashboard,
  ctaLabel = 'SmartDataFusion',
  children
}: PageFrameProps) {
  return (
    <div className="min-h-screen bg-sdf-bg text-sdf-text">
      <header className="sticky top-0 z-30 border-b border-sdf-border bg-sdf-surface/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-6">
          <a href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <img src={logoFooter} alt="SmartDataFusion" className="h-16 sm:h-24 w-auto" />
          </a>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap justify-end">
            <a
              href="/"
              className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-ui text-sdf-muted hover:text-sdf-text transition-colors">
              <ArrowLeft className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className="hidden sm:inline">Home</span>
            </a>

            <button
              onClick={onLaunchDashboard}
              className="font-ui text-xs sm:text-sm font-semibold px-2 sm:px-4 py-1.5 sm:py-2 border border-sdf-cyan text-sdf-cyan rounded hover:bg-sdf-cyan/10 hover:shadow-[0_0_15px_rgba(0,200,255,0.3)] transition-all duration-300 whitespace-nowrap">
              {ctaLabel}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-sdf-border bg-sdf-surface/20">
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24">
            <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
              {eyebrow}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-sdf-text max-w-3xl leading-tight">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl font-mono text-sm md:text-base text-sdf-muted leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {children}
      </main>
    </div>
  );
}