import React from 'react';
import { Navbar } from './landing/Navbar';
import { Hero } from './landing/Hero';
import { Problem } from './landing/Problem';
import { Solution } from './landing/Solution';
import { Architecture } from './landing/Architecture';
import { Features } from './landing/Features';
import { Industries } from './landing/Industries';
import { Stats } from './landing/Stats';
import { Pricing } from './landing/Pricing';
import { Faq } from './landing/Faq';
import { Contact } from './landing/Contact';
import { Footer } from './landing/Footer';
interface LandingPageProps {
  onLaunchDashboard: () => void;
}
export function LandingPage({ onLaunchDashboard }: LandingPageProps) {
  return (
    <div className="relative w-full">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-20"></div>
      <div className="relative z-10">
        <Navbar onLaunchDashboard={onLaunchDashboard} />
        <main>
          <Hero onLaunchDashboard={onLaunchDashboard} />
          <Problem />
          <Solution />
          <Architecture />
          <Features />
          <Industries />
          <Stats />
          <Pricing />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>);

}