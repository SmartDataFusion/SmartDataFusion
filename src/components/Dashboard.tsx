import React, { lazy, Suspense, useMemo, useState, useLayoutEffect, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [newSourceName, setNewSourceName] = useState('');
  const [newSourceType, setNewSourceType] = useState('Enterprise');
  const [dataSources, setDataSources] = useState([
    { status: 'live', name: 'SAP ERP Core', type: 'Enterprise', events: '1,240', latency: '1.2ms' },
    { status: 'live', name: 'IoT Floor Sensors (Plant A)', type: 'IoT', events: '4,820', latency: '0.8ms' },
    { status: 'live', name: 'REST API Gateway', type: 'API', events: '3,400', latency: '2.1ms' },
    { status: 'sync', name: 'Cloud Data Warehouse', type: 'Cloud', events: '890', latency: '4.6ms' },
    { status: 'error', name: 'Legacy SCADA System', type: 'Industrial', events: '0', latency: '—' }
  ]);

  // ─── SCROLL TO TOP ON SECTION CHANGE ─────────────────────────────
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const raf1 = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      const raf2 = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      });
      return () => cancelAnimationFrame(raf2);
    });

    return () => cancelAnimationFrame(raf1);
  }, [activeSection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeSection]);
  // ─────────────────────────────────────────────────────────────────

  const handleAddSource = () => {
    if (newSourceName.trim()) {
      const newSource = {
        status: 'live',
        name: newSourceName,
        type: newSourceType,
        events: '0',
        latency: '0.0ms'
      };
      setDataSources([...dataSources, newSource]);
      setNewSourceName('');
      setNewSourceType('Enterprise');
      setConnectModalOpen(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      setActiveSection('data-sources');
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const navItems = useMemo(
    () => [
      { id: 'overview', label: 'Overview' },
      { id: 'data-sources', label: 'Data Sources' },
      { id: 'fusion-engine', label: 'Fusion Engine' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'anomaly-detection', label: 'Anomaly Detection' },
      { id: 'iot-monitor', label: 'IoT Monitor' },
      { id: 'reports', label: 'Reports' },
      { id: 'settings', label: 'Settings' }
    ],
    []
  );

  const widgetFallback = (
    <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 font-mono text-xs text-sdf-muted">
      Loading widget...
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'data-sources':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <Suspense fallback={widgetFallback}>
              <DataSourceWidget
                searchQuery={searchQuery}
                onConnect={() => setConnectModalOpen(true)}
                sources={dataSources}
              />
            </Suspense>
            <section className="bg-sdf-surface border border-sdf-border rounded-xl p-6">
              <h2 className="font-heading text-xl text-sdf-text mb-2">Data Source Health</h2>
              <p className="font-mono text-sm text-sdf-muted">Overview of connectivity, lag, and error rate across connected sources.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Average Latency</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">1.8 ms</div>
                </div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Sync Success</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">98.6%</div>
                </div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Errors (24h)</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">2</div>
                </div>
              </div>
            </section>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Sync History</h3>
              <p className="font-mono text-sm text-sdf-muted">Recent sync events and timestamps for data sources.</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm font-mono text-sdf-muted">
                  <span>Cloud Data Warehouse</span><span>Today · 09:18</span>
                </div>
                <div className="flex items-center justify-between text-sm font-mono text-sdf-muted">
                  <span>REST API Gateway</span><span>Today · 08:12</span>
                </div>
                <div className="flex items-center justify-between text-sm font-mono text-sdf-muted">
                  <span>IoT Floor Sensors (Plant A)</span><span>Today · 07:50</span>
                </div>
              </div>
            </section>
            <section className="bg-sdf-surface border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Schema Validation & Data Quality</h3>
              <p className="font-mono text-sm text-sdf-muted">Track schema mismatches, null spikes, and field-level quality checks before ingestion.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Schema Mismatches</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">3 warnings</div>
                </div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Quality Score</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">94 / 100</div>
                </div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Quarantined Records</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">27</div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'fusion-engine':
        return (
          <div className="max-w-[1400px] mx-auto space-y-6">
            <Suspense fallback={widgetFallback}>
              <FusionEngineWidget />
            </Suspense>
            <section className="bg-sdf-surface border border-sdf-border rounded-xl p-6">
              <h2 className="font-heading text-xl text-sdf-text mb-2">Fusion Rules & Configuration</h2>
              <p className="font-mono text-sm text-sdf-muted">Manage transformation rules, mappings, and fusion pipelines.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">Active Rules: <div className="font-ui text-sm text-sdf-text mt-2">42</div></div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">Pending Deploys: <div className="font-ui text-sm text-sdf-text mt-2">3</div></div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">Last Deploy: <div className="font-ui text-sm text-sdf-text mt-2">Today · 06:22</div></div>
              </div>
            </section>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Throughput & Latency</h3>
              <p className="font-mono text-sm text-sdf-muted">Real-time throughput metrics and processing latency.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Ingest/sec: <div className="font-ui text-sm text-sdf-text mt-2">12,400</div></div>
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Avg Processing: <div className="font-ui text-sm text-sdf-text mt-2">2.1 ms</div></div>
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Failed Jobs (24h): <div className="font-ui text-sm text-sdf-text mt-2">1</div></div>
              </div>
            </section>
            <section className="bg-sdf-surface border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Pipeline Dependencies</h3>
              <p className="font-mono text-sm text-sdf-muted">Visualize upstream/downstream dependencies and identify potential bottlenecks.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Critical Chains</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">5 chains monitored</div>
                </div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Bottlenecks</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">1 potential delay</div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'analytics':
        return (
          <div className="max-w-[1400px] mx-auto">
            <Suspense fallback={widgetFallback}>
              <AnalyticsWidget />
            </Suspense>
          </div>
        );

      case 'anomaly-detection':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-xl p-6">
              <h2 className="font-heading text-xl text-sdf-text mb-3">Anomaly Detection</h2>
              <p className="font-mono text-sm text-sdf-muted">Monitor anomaly thresholds, alert routing, and response workflows.</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Alert Policies</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">4 policies active · 2 escalations pending</div>
                </div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Recent Alerts</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">7 alerts in the last 24 hours</div>
                </div>
              </div>
            </div>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Alert Tuning</h3>
              <p className="font-mono text-sm text-sdf-muted">Adjust sensitivity, select detectors, and configure escalations.</p>
            </section>
            <section className="bg-sdf-surface border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Response Playbooks</h3>
              <p className="font-mono text-sm text-sdf-muted">Predefined actions and runbooks to handle common anomalies.</p>
            </section>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Anomaly Timeline</h3>
              <p className="font-mono text-sm text-sdf-muted">Chronological view of anomalies with severity and acknowledgement status.</p>
              <div className="mt-4 space-y-2 font-mono text-xs text-sdf-muted">
                <div className="flex items-center justify-between"><span>High variance · Sensor Cluster B</span><span>09:34</span></div>
                <div className="flex items-center justify-between"><span>Packet loss spike · Gateway 12</span><span>08:57</span></div>
                <div className="flex items-center justify-between"><span>Unexpected idle window · Line 4</span><span>07:41</span></div>
              </div>
            </section>
          </div>
        );

      case 'iot-monitor':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-xl p-6">
              <h2 className="font-heading text-xl text-sdf-text mb-3">IoT Monitor</h2>
              <p className="font-mono text-sm text-sdf-muted">Track live device health, connectivity, and data drift across IoT fleets.</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Device Uptime', 'Gateway Status', 'Edge Latency'].map((item) => (
                  <div key={item} className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                    <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">{item}</div>
                    <div className="font-ui text-sm text-sdf-text mt-2">Stable · No incidents</div>
                  </div>
                ))}
              </div>
            </div>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Device Map</h3>
              <p className="font-mono text-sm text-sdf-muted">Geographic distribution and online/offline status for all devices.</p>
            </section>
            <section className="bg-sdf-surface border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Edge Health & Firmware</h3>
              <p className="font-mono text-sm text-sdf-muted">Firmware versions, recent updates, and edge resource usage.</p>
            </section>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Connectivity Incidents</h3>
              <p className="font-mono text-sm text-sdf-muted">Recent disconnect events and recovery duration across IoT gateways.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Incidents (24h): <div className="font-ui text-sm text-sdf-text mt-2">4</div></div>
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Auto-Recovered: <div className="font-ui text-sm text-sdf-text mt-2">3</div></div>
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Avg Recovery: <div className="font-ui text-sm text-sdf-text mt-2">2m 11s</div></div>
              </div>
            </section>
          </div>
        );

      case 'reports':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-xl p-6">
              <h2 className="font-heading text-xl text-sdf-text mb-3">Reports</h2>
              <p className="font-mono text-sm text-sdf-muted">Generate weekly performance summaries, compliance exports, and operational intelligence briefs.</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-sdf-bg border border-sdf-border rounded-lg p-4 text-left hover:border-sdf-cyan/50 transition-colors">
                  <div className="font-ui text-sm text-sdf-text">Generate Weekly Report</div>
                  <div className="font-mono text-xs text-sdf-muted mt-2">Last run: 3 days ago</div>
                </button>
                <button className="bg-sdf-bg border border-sdf-border rounded-lg p-4 text-left hover:border-sdf-cyan/50 transition-colors">
                  <div className="font-ui text-sm text-sdf-text">Export Compliance Snapshot</div>
                  <div className="font-mono text-xs text-sdf-muted mt-2">PDF, CSV, JSON</div>
                </button>
              </div>
            </div>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Report Templates</h3>
              <p className="font-mono text-sm text-sdf-muted">Create reusable templates for regular reporting needs.</p>
            </section>
            <section className="bg-sdf-surface border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Scheduled Reports & Export History</h3>
              <p className="font-mono text-sm text-sdf-muted">Manage schedules and view export history for audit purposes.</p>
            </section>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Delivery Channels</h3>
              <p className="font-mono text-sm text-sdf-muted">Send reports via email, webhook, or secure storage endpoints.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Email Targets: <div className="font-ui text-sm text-sdf-text mt-2">12</div></div>
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Webhook Routes: <div className="font-ui text-sm text-sdf-text mt-2">4</div></div>
                <div className="bg-sdf-surface border border-sdf-border rounded-lg p-4">Storage Buckets: <div className="font-ui text-sm text-sdf-text mt-2">2</div></div>
              </div>
            </section>
          </div>
        );

      case 'settings':
        return (
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-xl p-6">
              <h2 className="font-heading text-xl text-sdf-text mb-3">Settings</h2>
              <p className="font-mono text-sm text-sdf-muted">Manage profile preferences, notification routing, and data policies.</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Notification Channels</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">Email · Slack · PagerDuty</div>
                </div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
                  <div className="font-mono text-xs text-sdf-muted uppercase tracking-wider">Data Retention</div>
                  <div className="font-ui text-sm text-sdf-text mt-2">30 days hot storage</div>
                </div>
              </div>
            </div>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">User Management & Permissions</h3>
              <p className="font-mono text-sm text-sdf-muted">Invite users, assign roles, and manage access policies.</p>
            </section>
            <section className="bg-sdf-surface border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Integrations</h3>
              <p className="font-mono text-sm text-sdf-muted">Configure third-party connectors, webhooks, and API keys.</p>
            </section>
            <section className="bg-sdf-bg border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Retention & Backup</h3>
              <p className="font-mono text-sm text-sdf-muted">Set retention windows and scheduled backups for compliance.</p>
            </section>
            <section className="bg-sdf-surface border border-sdf-border rounded-lg p-4">
              <h3 className="font-ui text-lg text-sdf-text mb-2">Audit & Compliance Controls</h3>
              <p className="font-mono text-sm text-sdf-muted">Manage audit logs, access history, and policy enforcement checks.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">Audit Events: <div className="font-ui text-sm text-sdf-text mt-2">1,248</div></div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">Policy Violations: <div className="font-ui text-sm text-sdf-text mt-2">0</div></div>
                <div className="bg-sdf-bg border border-sdf-border rounded-lg p-4">Last Compliance Check: <div className="font-ui text-sm text-sdf-text mt-2">Today · 05:10</div></div>
              </div>
            </section>
          </div>
        );

      case 'overview':
      default:
        return (
          <div className="max-w-[1600px] mx-auto space-y-6">
            <Suspense fallback={widgetFallback}>
              <HealthWidget />
            </Suspense>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5">
                <Suspense fallback={widgetFallback}>
                  <DataSourceWidget
                    searchQuery={searchQuery}
                    onConnect={() => setConnectModalOpen(true)}
                    sources={dataSources}
                  />
                </Suspense>
              </div>
              <div className="lg:col-span-7">
                <Suspense fallback={widgetFallback}>
                  <FusionEngineWidget />
                </Suspense>
              </div>
            </div>
            <Suspense fallback={widgetFallback}>
              <AnalyticsWidget />
            </Suspense>
          </div>
        );
    }
  };

  return (
    <div className={"flex min-h-screen w-full overflow-hidden bg-sdf-bg " + (collapsed ? 'lg:pl-16' : 'lg:pl-64')}>
      <Sidebar
        navItems={navItems}
        activeId={activeSection}
        collapsed={collapsed}
        isOpen={sidebarOpen}
        onToggleCollapsed={() => setCollapsed((prev) => !prev)}
        onSelect={(id) => { handleNavigate(id); setSidebarOpen(false); }}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden pt-28 sm:pt-32 lg:pt-16">
        <TopNav
          onBackToSite={onBackToSite}
          onSignOut={onSignOut}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onNavigate={handleNavigate}
          collapsed={collapsed}
        />

        <main className="flex-1 min-h-0 p-4 sm:p-6">
          {renderContent()}
        </main>
      </div>

      {connectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md rounded-2xl border border-sdf-border bg-sdf-surface p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg text-sdf-text">Connect new source</h3>
              <button
                onClick={() => setConnectModalOpen(false)}
                className="text-xs font-mono text-sdf-muted hover:text-sdf-text">
                Close
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs text-sdf-muted">Source name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-md bg-sdf-bg border border-sdf-border px-3 py-2 text-sm text-sdf-text outline-none focus:border-sdf-cyan/60"
                  placeholder="e.g., Oracle ERP"
                  value={newSourceName}
                  onChange={(e) => setNewSourceName(e.target.value)}
                />
              </div>
              <div>
                <label className="font-mono text-xs text-sdf-muted">Source type</label>
                <select
                  className="mt-2 w-full rounded-md bg-sdf-bg border border-sdf-border px-3 py-2 text-sm text-sdf-text outline-none focus:border-sdf-cyan/60"
                  value={newSourceType}
                  onChange={(e) => setNewSourceType(e.target.value)}>
                  <option>Enterprise</option>
                  <option>IoT</option>
                  <option>API</option>
                  <option>Cloud</option>
                  <option>Industrial</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setConnectModalOpen(false)}
                  className="text-xs font-mono text-sdf-muted hover:text-sdf-text">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddSource}
                  disabled={!newSourceName.trim()}
                  className="bg-sdf-cyan text-sdf-bg font-ui text-sm font-semibold px-4 py-2 rounded hover:bg-sdf-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed">
                  Add Source
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}