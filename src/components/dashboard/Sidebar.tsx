import React, { useState } from 'react';
import dataSourcesIcon from '../../assets/dashboard/dashboard (2).svg';
import fusionEngineIcon from '../../assets/dashboard/dashboard (3).svg';
import analyticsIcon from '../../assets/dashboard/dashboard (4).svg';
import anomalyDetectionIcon from '../../assets/dashboard/dashboard (5).svg';
import iotMonitorIcon from '../../assets/dashboard/dashboard (6).svg';
import reportsIcon from '../../assets/dashboard/dashboard (7).svg';
import settingsIcon from '../../assets/dashboard/dashboard (8).svg';
import {
  Home,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navItems = [
  {
    icon: <Home className="w-5 h-5" />,
    label: 'Overview',
    active: true
  },
  {
    icon: <img src={dataSourcesIcon} alt="" className="w-5 h-5" aria-hidden="true" />,
    label: 'Data Sources'
  },
  {
    icon: <img src={fusionEngineIcon} alt="" className="w-5 h-5" aria-hidden="true" />,
    label: 'Fusion Engine'
  },
  {
    icon: <img src={analyticsIcon} alt="" className="w-5 h-5" aria-hidden="true" />,
    label: 'Analytics'
  },
  {
    icon: <img src={anomalyDetectionIcon} alt="" className="w-5 h-5" aria-hidden="true" />,
    label: 'Anomaly Detection'
  },
  {
    icon: <img src={iotMonitorIcon} alt="" className="w-5 h-5" aria-hidden="true" />,
    label: 'IoT Monitor'
  },
  {
    icon: <img src={reportsIcon} alt="" className="w-5 h-5" aria-hidden="true" />,
    label: 'Reports'
  },
  {
    icon: <img src={settingsIcon} alt="" className="w-5 h-5" aria-hidden="true" />,
    label: 'Settings'
  }];

  return (
    <aside
      className={`bg-sdf-surface border-r border-sdf-border flex flex-col transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      
      <div className="h-16 flex items-center justify-between px-4 border-b border-sdf-border">
        {!collapsed &&
        <span className="font-heading font-bold text-sm text-sdf-text truncate">
            COMMAND CENTER
          </span>
        }
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 text-sdf-muted hover:text-sdf-text rounded hover:bg-sdf-bg transition-colors mx-auto">
          
          {collapsed ?
          <ChevronRight className="w-4 h-4" /> :

          <ChevronLeft className="w-4 h-4" />
          }
        </button>
      </div>

      <nav className="flex-1 py-4 flex flex-col gap-1 px-2 overflow-y-auto">
        {navItems.map((item, idx) =>
        <button
          key={idx}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${item.active ? 'bg-sdf-cyan/10 text-sdf-cyan border border-sdf-cyan/20' : 'text-sdf-muted hover:bg-sdf-bg hover:text-sdf-text border border-transparent'}`}
          title={collapsed ? item.label : undefined}>
          
            <div className="shrink-0">{item.icon}</div>
            {!collapsed &&
          <span className="font-ui text-sm whitespace-nowrap">
                {item.label}
              </span>
          }
          </button>
        )}
      </nav>

      <div className="p-4 border-t border-sdf-border">
        <div
          className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          
          <div className="w-8 h-8 rounded bg-sdf-bg border border-sdf-border flex items-center justify-center shrink-0">
            <span className="font-mono text-xs text-sdf-text">AD</span>
          </div>
          {!collapsed &&
          <div className="flex flex-col overflow-hidden">
              <span className="font-ui text-sm text-sdf-text truncate">
                Admin User
              </span>
              <span className="font-mono text-[10px] text-sdf-muted truncate">
                System Architect
              </span>
            </div>
          }
        </div>
      </div>
    </aside>);

}