import React, { useMemo, useState } from 'react';
import { Search, Bell, ArrowLeft, Menu, X as XIcon } from 'lucide-react';
import logoFooter from '../../assets/logoFooter.png';
interface TopNavProps {
  onBackToSite: () => void;
  onSignOut: () => void;
  onToggleSidebar: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onNavigate: (sectionId: string) => void;
  collapsed: boolean;
}
export function TopNav({
  onBackToSite,
  onSignOut,
  onToggleSidebar,
  searchQuery,
  onSearchChange,
  onNavigate,
  collapsed
}: TopNavProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  
  const navItems = useMemo(() => [
    { id: 'overview', label: 'Overview' },
    { id: 'data-sources', label: 'Data Sources' },
    { id: 'fusion-engine', label: 'Fusion Engine' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'anomaly-detection', label: 'Anomaly Detection' },
    { id: 'iot-monitor', label: 'IoT Monitor' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' }
  ], []);
  
  const contentItems = useMemo(() => [
    { id: 'overview', label: 'Dashboard Overview', type: 'section' },
    { id: 'data-sources', label: 'Connect Data Sources', type: 'section' },
    { id: 'data-sources', label: 'Data Source Health Monitoring', type: 'content' },
    { id: 'fusion-engine', label: 'Real-time Data Fusion', type: 'content' },
    { id: 'fusion-engine', label: 'Fusion Rules & Configuration', type: 'content' },
    { id: 'analytics', label: 'Analytics Dashboard', type: 'section' },
    { id: 'analytics', label: 'Custom Metrics & KPIs', type: 'content' },
    { id: 'analytics', label: 'Historical Data Analysis', type: 'content' },
    { id: 'anomaly-detection', label: 'Anomaly Detection System', type: 'section' },
    { id: 'anomaly-detection', label: 'Alert Configuration', type: 'content' },
    { id: 'iot-monitor', label: 'IoT Device Monitoring', type: 'section' },
    { id: 'iot-monitor', label: 'Real-time Device Status', type: 'content' },
    { id: 'iot-monitor', label: 'Sensor Data Collection', type: 'content' },
    { id: 'reports', label: 'Generate & Export Reports', type: 'section' },
    { id: 'reports', label: 'Scheduled Report Templates', type: 'content' },
    { id: 'settings', label: 'System Settings', type: 'section' },
    { id: 'settings', label: 'User Management & Permissions', type: 'content' },
    { id: 'settings', label: 'Integration Settings', type: 'content' }
  ], []);
  
  const allSearchItems = useMemo(() => [...navItems, ...contentItems], [navItems, contentItems]);
  
  const filteredNavItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return allSearchItems.filter(item => 
      item.label.toLowerCase().includes(normalizedQuery) ||
      item.id.toLowerCase().includes(normalizedQuery)
    );
  }, [searchQuery, allSearchItems]);
  
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'New anomaly detected',
      detail: 'Sensor Cluster B variance threshold exceeded.',
      time: '2m ago',
      unread: true
    },
    {
      id: 'notif-2',
      title: 'Data source synced',
      detail: 'Cloud Data Warehouse sync completed.',
      time: '18m ago',
      unread: true
    },
    {
      id: 'notif-3',
      title: 'Fusion job finished',
      detail: 'ERP + IoT fusion completed successfully.',
      time: '1h ago',
      unread: false
    }
  ]);
  const unreadCount = useMemo(
    () => notifications.filter((item) => item.unread).length,
    [notifications]
  );
  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };
  const handleNotificationClick = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, unread: false } : item))
    );
  };
  const toggleNotifications = () => {
    setNotificationsOpen((prev) => !prev);
  };
  const closeNotifications = () => {
    setNotificationsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-sdf-surface border-b border-sdf-border flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-6 py-3 lg:py-0 lg:h-16 gap-3 shrink-0 ${collapsed ? 'lg:left-16' : 'lg:left-64'}`}>
      <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden text-sdf-muted hover:text-sdf-text transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src={logoFooter}
            alt="SmartDataFusion"
            className="h-16 w-auto"
          />
        </div>

        <div className="flex-1 min-w-[200px] w-full lg:w-auto relative">
          <div className="flex items-center gap-2 bg-sdf-bg border border-sdf-border rounded-md px-3 py-1.5 w-full lg:w-72 focus-within:border-sdf-cyan/50 focus-within:shadow-[0_0_8px_rgba(0,200,255,0.1)] transition-all">
            <Search className="w-4 h-4 text-sdf-muted flex-shrink-0" />
            <input
              type="text"
              placeholder="Search data sources, events..."
              className="bg-transparent border-none outline-none text-sm font-ui text-sdf-text w-full placeholder:text-sdf-muted/50"
              value={searchQuery}
              onChange={(event) => {
                onSearchChange(event.target.value);
                setSearchDropdownOpen(true);
              }}
              onFocus={() => searchQuery && setSearchDropdownOpen(true)}
              onBlur={() => setTimeout(() => setSearchDropdownOpen(false), 100)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  onSearchChange('');
                  setSearchDropdownOpen(false);
                }
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="text-sdf-muted hover:text-sdf-text transition-colors flex-shrink-0"
                aria-label="Clear search">
                <XIcon className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {searchDropdownOpen && filteredNavItems.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-sdf-surface border border-sdf-border rounded-md shadow-xl z-30 overflow-hidden max-h-96 overflow-y-auto">
              {filteredNavItems.map((item, idx) => (
                <button
                  key={`${item.id}-${item.label}-${idx}`}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    onSearchChange('');
                    setSearchDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 font-ui text-sm text-sdf-text hover:bg-sdf-bg/60 transition-colors border-b border-sdf-border/30 last:border-b-0 flex items-center justify-between gap-2">
                  <span>{item.label}</span>
                  {item.type === 'content' && (
                    <span className="text-[10px] font-mono text-sdf-muted/60 bg-sdf-bg/50 px-1.5 py-0.5 rounded">
                      Content
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6 justify-between lg:justify-end flex-wrap">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-sdf-green/10 border border-sdf-green/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-sdf-green animate-pulse"></span>
          <span className="font-mono text-[10px] text-sdf-green uppercase tracking-wider">
            System Live
          </span>
        </div>

        <div className="relative">
          <button
            className="relative text-sdf-muted hover:text-sdf-text transition-colors"
            onClick={toggleNotifications}
            aria-expanded={notificationsOpen}
            aria-haspopup="true">
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-sdf-red rounded-full border border-sdf-surface"></span>
            )}
          </button>

          {notificationsOpen && (
            <div className="fixed inset-x-3 bottom-3 top-auto w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] bg-sdf-surface border border-sdf-border rounded-xl shadow-2xl z-[90] max-h-[70vh] flex flex-col sm:inset-x-auto sm:bottom-auto sm:top-20 sm:right-4 sm:left-auto sm:w-[20rem] sm:max-w-[calc(100vw-2rem)] sm:max-h-[65vh] md:w-[22rem] md:max-h-[70vh] lg:absolute lg:top-full lg:right-0 lg:mt-3 lg:w-96 lg:max-w-sm lg:max-h-96">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-sdf-border flex-shrink-0 gap-2">
                <span className="font-ui text-xs sm:text-sm text-sdf-text whitespace-nowrap">Notifications</span>
                <button
                  type="button"
                  onClick={handleMarkAllRead}
                  className="text-[10px] sm:text-xs font-mono text-sdf-muted hover:text-sdf-text transition-colors whitespace-nowrap">
                  Mark all read
                </button>
              </div>
              <div className="overflow-y-auto flex-1 min-h-0">
                {notifications.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNotificationClick(item.id)}
                    className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 border-b border-sdf-border/60 hover:bg-sdf-bg/60 transition-colors">
                    <div className="flex items-start gap-2">
                      <span
                        className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${item.unread ? 'bg-sdf-cyan' : 'bg-sdf-border'}`}
                      ></span>
                      <div className="min-w-0 flex-1">
                        <div className="font-ui text-xs sm:text-sm text-sdf-text truncate">{item.title}</div>
                        <div className="font-mono text-[10px] sm:text-[11px] text-sdf-muted mt-1 line-clamp-2">
                          {item.detail}
                        </div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-sdf-muted mt-1">
                          {item.time}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={closeNotifications}
                className="w-full text-[10px] sm:text-xs font-mono text-sdf-muted py-2 hover:text-sdf-text transition-colors border-t border-sdf-border/60 flex-shrink-0">
                Close
              </button>
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-sdf-border"></div>

        <button
          onClick={onBackToSite}
          className="flex items-center gap-2 text-sm font-ui text-sdf-muted hover:text-sdf-text transition-colors">
          
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Site</span>
        </button>

        <button
          onClick={onSignOut}
          className="text-sm font-ui text-sdf-muted hover:text-sdf-text transition-colors">
          Sign out
        </button>
      </div>
    </header>);

}