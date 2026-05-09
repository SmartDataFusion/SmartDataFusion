import React from 'react';
import { Search, Bell, ArrowLeft } from 'lucide-react';
import logoFooter from '../../assets/logoFooter.png';
interface TopNavProps {
  onBackToSite: () => void;
  onSignOut: () => void;
}
export function TopNav({ onBackToSite, onSignOut }: TopNavProps) {
  return (
    <header className="h-16 bg-sdf-surface border-b border-sdf-border flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            src={logoFooter}
            alt="SmartDataFusion"
            className="h-6 w-auto"
          />
          <span className="font-heading font-bold text-lg tracking-wide hidden sm:block">
            SmartData<span className="text-sdf-cyan">Fusion</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-sdf-bg border border-sdf-border rounded-md px-3 py-1.5 w-64 focus-within:border-sdf-cyan/50 transition-colors">
          <Search className="w-4 h-4 text-sdf-muted" />
          <input
            type="text"
            placeholder="Search data sources, events..."
            className="bg-transparent border-none outline-none text-sm font-ui text-sdf-text w-full placeholder:text-sdf-muted/50" />
          
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-sdf-green/10 border border-sdf-green/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-sdf-green animate-pulse"></span>
          <span className="font-mono text-[10px] text-sdf-green uppercase tracking-wider">
            System Live
          </span>
        </div>

        <button className="relative text-sdf-muted hover:text-sdf-text transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-sdf-red rounded-full border border-sdf-surface"></span>
        </button>

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