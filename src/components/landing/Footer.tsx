import React from 'react';
import { Facebook, Linkedin, Pin, Twitter, Youtube } from 'lucide-react';
import logoFooter from '../../assets/logoFooter.png';
export function Footer() {
  return (
    <footer className="bg-[#02050A] border-t border-sdf-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Col 1 */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoFooter}
                alt="Smart Data Fusion"
                className="h-10 w-auto"
              />
              <span className="font-heading font-bold text-sm">
                SmartData<span className="text-sdf-cyan">Fusion</span>
              </span>
            </div>
            <p className="font-mono text-xs text-sdf-muted mb-4 max-w-xs">
              Advanced AI Data Fusion Platform for Enterprise & IoT Intelligence
              Systems.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-semibold text-sdf-text mb-4">
              Platform
            </h4>
            <ul className="space-y-2 font-ui text-sm text-sdf-muted">
              <li>
                <a
                  href="#platform"
                  className="hover:text-sdf-cyan transition-colors">
                  
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="hover:text-sdf-cyan transition-colors">
                  
                  Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sdf-cyan transition-colors">
                  Dashboard Preview
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-sdf-cyan transition-colors">
                  
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-semibold text-sdf-text mb-4">
              Developers
            </h4>
            <ul className="space-y-3 font-ui text-sm text-sdf-muted">
              <li className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="hover:text-sdf-cyan transition-colors">
                  Developer API
                </a>
                <span className="text-[9px] font-mono bg-sdf-surface border border-sdf-border px-1.5 py-0.5 rounded">
                  Coming Soon
                </span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="hover:text-sdf-cyan transition-colors">
                  Documentation
                </a>
                <span className="text-[9px] font-mono bg-sdf-surface border border-sdf-border px-1.5 py-0.5 rounded">
                  Coming Soon
                </span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="hover:text-sdf-cyan transition-colors">
                  Integration Docs
                </a>
                <span className="text-[9px] font-mono bg-sdf-surface border border-sdf-border px-1.5 py-0.5 rounded">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-semibold text-sdf-text mb-4">
              Company
            </h4>
            <ul className="space-y-2 font-ui text-sm text-sdf-muted">
              <li>
                <a href="/about" className="hover:text-sdf-text transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sdf-text transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-sdf-text transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sdf-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-sdf-muted">
            © 2025 SmartDataFusion.com — Advanced AI Data Fusion Platform
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-sdf-muted">
              <a
                href="https://x.com/smartdatafusion"
                target="_blank"
                rel="noreferrer"
                aria-label="SmartDataFusion on X"
                className="hover:text-sdf-text transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/Smartdatafusion/"
                target="_blank"
                rel="noreferrer"
                aria-label="SmartDataFusion on Facebook"
                className="hover:text-sdf-text transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@SmartDataFusionAnalyticsInc"
                target="_blank"
                rel="noreferrer"
                aria-label="SmartDataFusion on YouTube"
                className="hover:text-sdf-text transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://www.pinterest.com/SmartDataFusion/"
                target="_blank"
                rel="noreferrer"
                aria-label="SmartDataFusion on Pinterest"
                className="hover:text-sdf-text transition-colors">
                <Pin className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/smartdatafusion-analytics-inc/"
                target="_blank"
                rel="noreferrer"
                aria-label="SmartDataFusion on LinkedIn"
                className="hover:text-sdf-text transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <div className="flex gap-4 font-mono text-xs text-sdf-muted">
              <a href="/privacy-policy" className="hover:text-sdf-text">
                Privacy
              </a>
              <a href="#" className="hover:text-sdf-text">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}