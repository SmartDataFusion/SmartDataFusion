import React from 'react';
import logoFooter from '../../assets/logoFooter.png';
import twitterIcon from '../../assets/30.png';
import facebookIcon from '../../assets/31.png';
import youtubeIcon from '../../assets/32.png';
import linkedinIcon from '../../assets/33.png';
import pinterestIcon from '../../assets/34.png';
export function Footer() {
  return (
    <footer className="bg-[#02050A] border-t border-sdf-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {/* Col 1 */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoFooter}
                alt="Smart Data Fusion"
                className="h-28 w-auto"
              />
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
                <a
                  href="#pricing"
                  className="hover:text-sdf-cyan transition-colors">
                  
                  Pricing
                </a>
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
              <li>
                <a href="/terms" className="hover:text-sdf-text transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sdf-border/50 pt-8 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 text-sdf-muted">
            <a
              href="https://x.com/smartdatafusion"
              target="_blank"
              rel="noreferrer"
              aria-label="SmartDataFusion on X"
              className="hover:opacity-80 transition-opacity">
              <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/Smartdatafusion/"
              target="_blank"
              rel="noreferrer"
              aria-label="SmartDataFusion on Facebook"
              className="hover:opacity-80 transition-opacity">
              <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@SmartDataFusionAnalyticsInc"
              target="_blank"
              rel="noreferrer"
              aria-label="SmartDataFusion on YouTube"
              className="hover:opacity-80 transition-opacity">
              <img src={youtubeIcon} alt="YouTube" className="h-6 w-6" />
            </a>
            <a
              href="https://www.pinterest.com/SmartDataFusion/"
              target="_blank"
              rel="noreferrer"
              aria-label="SmartDataFusion on Pinterest"
              className="hover:opacity-80 transition-opacity">
              <img src={pinterestIcon} alt="Pinterest" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/smartdatafusion-analytics-inc/"
              target="_blank"
              rel="noreferrer"
              aria-label="SmartDataFusion on LinkedIn"
              className="hover:opacity-80 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
          <p className="font-mono text-xs text-sdf-muted">
            © {new Date().getFullYear()} SmartDataFusion.com — Advanced AI Data Fusion Platform
          </p>
        </div>
      </div>
    </footer>);

}