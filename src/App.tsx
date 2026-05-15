import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { CookieBanner } from './components/CookieBanner';
import { AuthPanel } from './components/auth/AuthPanel';
import { useAuth } from './auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
const Dashboard = lazy(() =>
  import('./components/Dashboard').then((module) => ({
    default: module.Dashboard
  }))
);
const AboutPage = lazy(() =>
  import('./components/pages/AboutPage').then((module) => ({
    default: module.AboutPage
  }))
);
const ContactPage = lazy(() =>
  import('./components/pages/ContactPage').then((module) => ({
    default: module.ContactPage
  }))
);
const PrivacyPolicyPage = lazy(() =>
  import('./components/pages/PrivacyPolicyPage').then((module) => ({
    default: module.PrivacyPolicyPage
  }))
);
const TermsPage = lazy(() =>
  import('./components/pages/TermsPage').then((module) => ({
    default: module.TermsPage
  }))
);
const ProductPage = lazy(() =>
  import('./components/pages/ProductPage').then((module) => ({
    default: module.ProductPage
  }))
);
const PricingPage = lazy(() =>
  import('./components/pages/Pricing').then((module) => ({
    default: module.PricingPage
  }))
);
const SandboxPaymentPage = lazy(() =>
  import('./components/pages/SandboxPayment').then((module) => ({
    default: module.SandboxPaymentPage
  }))
);

type AppRoute =
  | '/'
  | '/about'
  | '/contact'
  | '/privacy-policy'
  | '/terms'
  | '/dashboard'
  | '/product'
  | '/pricing'
  | '/sandbox-payment';

function getRouteFromPathname(pathname: string): AppRoute {
  if (pathname === '/about') {
    return '/about';
  }

  if (pathname === '/contact') {
    return '/contact';
  }

  if (pathname === '/privacy-policy') {
    return '/privacy-policy';
  }

  if (pathname === '/terms') {
    return '/terms';
  }

  if (pathname === '/product') {
    return '/product';
  }

  if (pathname === '/pricing') {
    return '/pricing';
  }

  if (pathname === '/sandbox-payment') {
    return '/sandbox-payment';
  }

  if (pathname === '/dashboard') {
    return '/dashboard';
  }

  return '/';
}

export function App() {
  const { user, loading } = useAuth();
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [currentView, setCurrentView] = useState<
    'landing' | 'auth' | 'dashboard'
  >(window.location.pathname === '/dashboard' ? 'dashboard' : 'landing');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const navigateTo = (nextPath: AppRoute) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setPathname(nextPath);
  };

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (getRouteFromPathname(pathname) !== '/dashboard') {
      return;
    }

    if (!user || !user.emailVerified) {
      setCurrentView('auth');
      return;
    }

    setCurrentView('dashboard');
  }, [user, pathname]);

  useLayoutEffect(() => {
    if (currentView === 'dashboard') {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname, currentView]);

  const handleLaunchDashboard = () => {
    navigateTo('/dashboard');
    if (!user) {
      setCurrentView('auth');
      return;
    }
    if (!user.emailVerified) {
      setCurrentView('auth');
      return;
    }
    setCurrentView('dashboard');
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigateTo('/dashboard');
    setCurrentView('auth');
  };

  const handleGoToProduct = () => {
    navigateTo('/product');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-sdf-bg text-sdf-text flex items-center justify-center">
        <span className="font-mono text-sm text-sdf-muted">
          Initializing secure session...
        </span>
      </div>
    );
  }

  const routeFallback = (
    <div className="min-h-screen bg-sdf-bg text-sdf-text flex items-center justify-center">
      <span className="font-mono text-sm text-sdf-muted">Loading page...</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-sdf-bg text-sdf-text relative selection:bg-sdf-cyan/30 selection:text-white">
      <div className="scanlines"></div>

      {pathname === '/about' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <AboutPage onLaunchDashboard={handleGoToProduct} />
        </Suspense>
      )}

      {pathname === '/contact' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <ContactPage onLaunchDashboard={handleGoToProduct} />
        </Suspense>
      )}

      {pathname === '/privacy-policy' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <PrivacyPolicyPage onLaunchDashboard={handleGoToProduct} />
        </Suspense>
      )}

      {pathname === '/terms' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <TermsPage onLaunchDashboard={handleGoToProduct} />
        </Suspense>
      )}

      {pathname === '/product' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <ProductPage onLaunchDashboard={handleLaunchDashboard} />
        </Suspense>
      )}

      {pathname === '/pricing' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <PricingPage onLaunchDashboard={handleLaunchDashboard} />
        </Suspense>
      )}

      {pathname === '/sandbox-payment' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <SandboxPaymentPage />
        </Suspense>
      )}

      {pathname === '/' && currentView === 'landing' && (
        <LandingPage onPrimaryAction={handleGoToProduct} />
      )}

      {currentView === 'auth' && (
        <AuthPanel
            onBackToSite={() => {
              navigateTo('/');
              setCurrentView('landing');
            }}
          forceVerification={Boolean(user && !user.emailVerified)}
          onAuthSuccess={() => setCurrentView('dashboard')}
        />
      )}

      {currentView === 'dashboard' && (
        <Suspense fallback={routeFallback}>
          <Dashboard
            onBackToSite={() => {
              navigateTo('/');
              setCurrentView('landing');
            }}
            onSignOut={handleSignOut}
          />
        </Suspense>
      )}
      <CookieBanner />
    </div>);

}