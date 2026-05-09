import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell } from
'recharts';
export function AnalyticsWidget() {
  const areaData = [
  {
    time: '00:00',
    erp: 4000,
    iot: 2400,
    api: 2400
  },
  {
    time: '04:00',
    erp: 3000,
    iot: 1398,
    api: 2210
  },
  {
    time: '08:00',
    erp: 2000,
    iot: 9800,
    api: 2290
  },
  {
    time: '12:00',
    erp: 2780,
    iot: 3908,
    api: 2000
  },
  {
    time: '16:00',
    erp: 1890,
    iot: 4800,
    api: 2181
  },
  {
    time: '20:00',
    erp: 2390,
    iot: 3800,
    api: 2500
  },
  {
    time: '24:00',
    erp: 3490,
    iot: 4300,
    api: 2100
  }];

  const pieData = [
  {
    name: 'IoT Sensors',
    value: 45,
    color: '#00C8FF'
  },
  {
    name: 'ERP Systems',
    value: 30,
    color: '#7B2FFF'
  },
  {
    name: 'REST APIs',
    value: 15,
    color: '#00FF9C'
  },
  {
    name: 'Cloud DBs',
    value: 10,
    color: '#4A6B8A'
  }];

  const anomalies = [
  {
    time: '14:32:01',
    source: 'Sensor Cluster B',
    type: 'Variance Threshold',
    severity: 'CRITICAL'
  },
  {
    time: '14:15:22',
    source: 'SAP ERP Core',
    type: 'Sync Latency Spike',
    severity: 'WARNING'
  },
  {
    time: '13:45:10',
    source: 'API Gateway',
    type: 'Rate Limit Approaching',
    severity: 'INFO'
  },
  {
    time: '12:30:05',
    source: 'Plant A Conveyor',
    type: 'Vibration Anomaly',
    severity: 'CRITICAL'
  },
  {
    time: '11:20:00',
    source: 'Cloud Warehouse',
    type: 'Batch Delay',
    severity: 'WARNING'
  }];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Area Chart */}
      <div className="lg:col-span-2 bg-sdf-surface border border-sdf-border rounded-xl p-4 flex flex-col">
        <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-4 block">
          // REAL-TIME EVENTS (24H)
        </span>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={areaData}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 0
              }}>
              
              <defs>
                <linearGradient id="colorErp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7B2FFF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#7B2FFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorIot" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C8FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00C8FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#0F2035"
                vertical={false} />
              
              <XAxis
                dataKey="time"
                stroke="#4A6B8A"
                fontSize={10}
                tickLine={false}
                axisLine={false} />
              
              <YAxis
                stroke="#4A6B8A"
                fontSize={10}
                tickLine={false}
                axisLine={false} />
              
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0A1628',
                  borderColor: '#0F2035',
                  borderRadius: '8px'
                }}
                itemStyle={{
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono'
                }}
                labelStyle={{
                  color: '#4A6B8A',
                  marginBottom: '4px',
                  fontSize: '12px'
                }} />
              
              <Area
                type="monotone"
                dataKey="iot"
                stroke="#00C8FF"
                fillOpacity={1}
                fill="url(#colorIot)" />
              
              <Area
                type="monotone"
                dataKey="erp"
                stroke="#7B2FFF"
                fillOpacity={1}
                fill="url(#colorErp)" />
              
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right Column: Donut + Anomalies */}
      <div className="flex flex-col gap-6">
        {/* Donut Chart */}
        <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 flex flex-col h-48">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-2 block">
            // SOURCE CONTRIBUTION
          </span>
          <div className="flex-1 flex items-center">
            <div className="w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none">
                    
                    {pieData.map((entry, index) =>
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    )}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 flex flex-col gap-2 justify-center">
              {pieData.map((item, idx) =>
              <div key={idx} className="flex items-center gap-2">
                  <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: item.color
                  }}>
                </span>
                  <span className="font-mono text-[10px] text-sdf-text">
                    {item.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Anomalies Table */}
        <div className="bg-sdf-surface border border-sdf-border rounded-xl p-4 flex-1 flex flex-col overflow-hidden">
          <span className="font-mono text-xs text-sdf-muted uppercase tracking-widest mb-3 block">
            // RECENT ANOMALIES
          </span>
          <div className="flex-1 overflow-auto pr-2">
            <div className="space-y-2">
              {anomalies.map((anom, idx) =>
              <div
                key={idx}
                className="bg-sdf-bg border border-sdf-border p-2.5 rounded flex items-center justify-between gap-2">
                
                  <div className="flex flex-col min-w-0">
                    <span className="font-ui text-xs text-sdf-text truncate">
                      {anom.source}
                    </span>
                    <span className="font-mono text-[9px] text-sdf-muted truncate">
                      {anom.time} • {anom.type}
                    </span>
                  </div>
                  <span
                  className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${anom.severity === 'CRITICAL' ? 'bg-sdf-red/10 text-sdf-red border-sdf-red/30' : anom.severity === 'WARNING' ? 'bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/30' : 'bg-sdf-cyan/10 text-sdf-cyan border-sdf-cyan/30'}`}>
                  
                    {anom.severity}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}