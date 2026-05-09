import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';
interface NavbarProps {
  onLaunchDashboard: () => void;
}
export function Navbar({ onLaunchDashboard }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Platform',
    href: '#platform'
  },
  {
    name: 'Architecture',
    href: '#architecture'
  },
  {
    name: 'IoT Intelligence',
    href: '#iot'
  },
  {
    name: 'Enterprise',
    href: '#enterprise'
  },
  {
    name: 'Pricing',
    href: '#pricing'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-sdf-surface/90 backdrop-blur-md border-b border-sdf-border py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="SmartDataFusion"
            className="h-14 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="font-ui text-sm text-sdf-muted hover:text-sdf-text transition-colors">
            
              {link.name}
            </a>
          )}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-ui text-sm text-sdf-text">Developer API</span>
            <span className="text-[10px] font-mono bg-sdf-border text-sdf-muted px-2 py-0.5 rounded border border-sdf-border">
              Coming Soon
            </span>
          </div>
          <button
            onClick={onLaunchDashboard}
            className="font-ui text-sm font-semibold px-5 py-2 border border-sdf-cyan text-sdf-cyan rounded hover:bg-sdf-cyan/10 hover:shadow-[0_0_15px_rgba(0,200,255,0.3)] transition-all duration-300">
            
            Launch Dashboard
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-sdf-text p-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ?
          <X className="w-10 h-10" /> :

          <Menu className="w-10 h-10" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="absolute top-full left-0 w-full bg-sdf-surface border-b border-sdf-border p-6 flex flex-col gap-4 lg:hidden shadow-2xl">
          
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="font-ui text-lg text-sdf-text border-b border-sdf-border/50 pb-2"
            onClick={() => setMobileMenuOpen(false)}>
            
                {link.name}
              </a>
          )}
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-ui text-sdf-text">Developer API</span>
                <span className="text-xs font-mono bg-sdf-border text-sdf-muted px-2 py-1 rounded">
                  Coming Soon
                </span>
              </div>
              <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLaunchDashboard();
              }}
              className="w-full font-ui font-semibold px-5 py-3 border border-sdf-cyan text-sdf-cyan rounded hover:bg-sdf-cyan/10 transition-all">
              
                Launch Dashboard
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}