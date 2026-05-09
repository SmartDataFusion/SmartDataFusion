import React from 'react';
import { Plus, ChevronDown } from 'lucide-react';
export function DataSourceWidget() {
  const sources = [
  {
    status: 'live',
    name: 'SAP ERP Core',
    type: 'Enterprise',
    events: '1,240',
    latency: '1.2ms'
  },
  {
    status: 'live',
    name: 'IoT Floor Sensors (Plant A)',
    type: 'IoT',
    events: '4,820',
    latency: '0.8ms'
  },
  {
    status: 'live',
    name: 'REST API Gateway',
    type: 'API',
    events: '3,400',
    latency: '2.1ms'
  },
  {
    status: 'sync',
    name: 'Cloud Data Warehouse',
    type: 'Cloud',
    events: '890',
    latency: '4.6ms'
  },
  {
    status: 'error',
    name: 'Legacy SCADA System',
    type: 'Industrial',
    events: '0',
    latency: '—'
  }];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-sdf-green';
      case 'sync':
        return 'bg-[#F5A623]';
      case 'error':
        return 'bg-sdf-red';
      default:
        return 'bg-sdf-muted';
    }
  };
  return (
    <div className="bg-sdf-surface border border-sdf-border rounded-xl flex flex-col h-full">
      <div className="p-4 border-b border-sdf-border flex items-center justify-between">
        <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest">
          // CONNECTED DATA SOURCES
        </span>
        <button className="flex items-center gap-1 px-3 py-1.5 border border-sdf-cyan text-sdf-cyan rounded text-xs font-ui hover:bg-sdf-cyan/10 transition-colors">
          <Plus className="w-3 h-3" />
          Connect New Source
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-sdf-border/50">
              <th className="pb-3 font-mono text-[10px] text-sdf-muted uppercase font-normal">
                Status
              </th>
              <th className="pb-3 font-mono text-[10px] text-sdf-muted uppercase font-normal">
                Source Name
              </th>
              <th className="pb-3 font-mono text-[10px] text-sdf-muted uppercase font-normal">
                Type
              </th>
              <th className="pb-3 font-mono text-[10px] text-sdf-muted uppercase font-normal text-right">
                Events/sec
              </th>
              <th className="pb-3 font-mono text-[10px] text-sdf-muted uppercase font-normal text-right">
                Latency
              </th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {sources.map((src, idx) =>
            <tr
              key={idx}
              className="border-b border-sdf-border/30 hover:bg-sdf-bg/50 transition-colors group cursor-pointer">
              
                <td className="py-3">
                  <div
                  className={`w-2 h-2 rounded-full ${getStatusColor(src.status)} ${src.status === 'live' ? 'animate-pulse' : ''}`}>
                </div>
                </td>
                <td className="py-3 font-ui text-sm text-sdf-text font-medium">
                  {src.name}
                </td>
                <td className="py-3 font-mono text-xs text-sdf-muted">
                  {src.type}
                </td>
                <td className="py-3 font-mono text-xs text-sdf-text text-right">
                  {src.events}
                </td>
                <td className="py-3 font-mono text-xs text-sdf-text text-right">
                  {src.latency}
                </td>
                <td className="py-3 text-right">
                  <ChevronDown className="w-4 h-4 text-sdf-muted inline-block opacity-0 group-hover:opacity-100 transition-opacity" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}