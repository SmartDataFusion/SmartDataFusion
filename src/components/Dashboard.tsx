import React, { lazy, Suspense } from 'react';
import { Sidebar } from './dashboard/Sidebar';
import { TopNav } from './dashboard/TopNav';
const DataSourceWidget = lazy(() =>
  import('./dashboard/DataSourceWidget').then((module) => ({
    default: module.DataSourceWidget
  }))
);
const FusionEngineWidget = lazy(() =>
  import('./dashboard/FusionEngineWidget').then((module) => ({
    default: module.FusionEngineWidget
  }))
);
const HealthWidget = lazy(() =>
  import('./dashboard/HealthWidget').then((module) => ({
    default: module.HealthWidget
  }))
);
const AnalyticsWidget = lazy(() =>
  import('./dashboard/AnalyticsWidget').then((module) => ({
    default: module.AnalyticsWidget
  }))
);
interface DashboardProps {
  onBackToSite: () => void;
  onSignOut: () => void;
}
export function Dashboard({ onBackToSite, onSignOut }: DashboardProps) {
  const widgetFallback = (
    <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 font-mono text-xs text-sdf-muted">
      Loading widget...
    </div>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-sdf-bg">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav onBackToSite={onBackToSite} onSignOut={onSignOut} />

        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-[1600px] mx-auto space-y-6">
            {/* Top Row: Health Metrics */}
            <Suspense fallback={widgetFallback}>
              <HealthWidget />
            </Suspense>

            {/* Middle Row: Data Sources & Fusion Engine */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5">
                <Suspense fallback={widgetFallback}>
                  <DataSourceWidget />
                </Suspense>
              </div>
              <div className="lg:col-span-7">
                <Suspense fallback={widgetFallback}>
                  <FusionEngineWidget />
                </Suspense>
              </div>
            </div>

            {/* Bottom Row: Analytics */}
            <Suspense fallback={widgetFallback}>
              <AnalyticsWidget />
            </Suspense>
          </div>
        </main>
      </div>
    </div>);

}