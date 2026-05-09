import { lazy, Suspense, useEffect, useState } from 'react';
import { LandingPage } from './components/LandingPage';
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

type AppRoute = '/' | '/about' | '/contact' | '/privacy-policy' | '/dashboard';

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
    navigateTo('/');
    setCurrentView('landing');
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
          <AboutPage onLaunchDashboard={handleLaunchDashboard} />
        </Suspense>
      )}

      {pathname === '/contact' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <ContactPage onLaunchDashboard={handleLaunchDashboard} />
        </Suspense>
      )}

      {pathname === '/privacy-policy' && currentView === 'landing' && (
        <Suspense fallback={routeFallback}>
          <PrivacyPolicyPage onLaunchDashboard={handleLaunchDashboard} />
        </Suspense>
      )}

      {pathname === '/' && currentView === 'landing' && (
        <LandingPage onLaunchDashboard={handleLaunchDashboard} />
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
    </div>);

}