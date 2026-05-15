import React, { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';
interface NavbarProps {
  onPrimaryAction: () => void;
}
const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
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
    name: 'Pricing',
    href: '#pricing'
  },
  {
    name: 'Contact Us',
    href: '#contact'
  }
];

export function Navbar({ onPrimaryAction }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace('#', '')),
    []
  );
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = 'home';
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionIds[i];
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-sdf-surface/90 backdrop-blur-md border-b border-sdf-border py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0">
          <img
            src={logo}
            alt="SmartDataFusion"
            className="h-16 sm:h-24 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const linkId = link.href.replace('#', '');
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`font-ui text-sm transition-colors ${isActive ? 'text-sdf-text' : 'text-sdf-muted hover:text-sdf-text'}`}>
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={onPrimaryAction}
            className="font-ui text-sm font-semibold px-5 py-2 border border-sdf-cyan text-sdf-cyan rounded hover:bg-sdf-cyan/10 hover:shadow-[0_0_15px_rgba(0,200,255,0.3)] transition-all duration-300">
            
            SmartDataFusion
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
          
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-ui text-lg border-b border-sdf-border/50 pb-2 ${isActive ? 'text-sdf-text' : 'text-sdf-muted hover:text-sdf-text'}`}
                  onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-4">
              <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPrimaryAction();
              }}
              className="w-full font-ui font-semibold px-5 py-3 border border-sdf-cyan text-sdf-cyan rounded hover:bg-sdf-cyan/10 transition-all">
              
                SmartDataFusion
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}