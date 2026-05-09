import { useMemo, useRef, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { auth } from '../../firebase';

interface AuthPanelProps {
  onBackToSite?: () => void;
  onAuthSuccess: () => void;
  forceVerification?: boolean;
}

type AuthMode = 'login' | 'signup';

export function AuthPanel({
  onBackToSite,
  onAuthSuccess,
  forceVerification = false
}: AuthPanelProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [needsVerification, setNeedsVerification] = useState(forceVerification);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [ReCAPTCHAComponent, setReCAPTCHAComponent] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    if (recaptchaSiteKey) {
      import('react-google-recaptcha').then((mod) => {
        if (mounted) setReCAPTCHAComponent(() => mod.default);
      }).catch(() => {});
    }
    return () => { mounted = false; };
  }, [recaptchaSiteKey]);

  const displayEmail = useMemo(
    () => auth.currentUser?.email ?? email,
    [email]
  );

  const getAuthErrorMessage = (err: unknown) => {
    if (typeof err === 'object' && err && 'code' in err) {
      const code = String((err as { code?: string }).code);
      switch (code) {
        case 'auth/email-already-in-use':
          return 'This email is already in use.';
        case 'auth/invalid-email':
          return 'Enter a valid email address.';
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          return 'Incorrect email or password.';
        case 'auth/weak-password':
          return 'Password must be at least 6 characters.';
        case 'auth/too-many-requests':
          return 'Too many attempts. Try again later.';
        case 'auth/popup-closed-by-user':
          return 'Sign-in popup was closed before completing.';
        case 'auth/popup-blocked':
          return 'Popup blocked. Allow popups and try again.';
        default:
          break;
      }
    }

    return err instanceof Error ? err.message : 'Authentication failed.';
  };

  const ensureRecaptchaVerified = async () => {
    setRecaptchaError('');

    if (!recaptchaToken) {
      setRecaptchaError('Please complete the reCAPTCHA check.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setInfo('');

    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const isRecaptchaValid = await ensureRecaptchaVerified();
    if (!isRecaptchaValid) {
      return;
    }

    try {
      setLoading(true);
      if (mode === 'signup') {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await sendEmailVerification(credential.user);
        setNeedsVerification(true);
        setInfo('Check your inbox to verify your email.');
      } else {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        if (!credential.user.emailVerified) {
          setNeedsVerification(true);
          setInfo('Please verify your email to continue.');
          return;
        }
        onAuthSuccess();
      }
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  };

  const handlePasswordReset = async () => {
    setError('');
    setInfo('');

    if (!email) {
      setError('Enter your email to receive a reset link.');
      return;
    }

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setInfo('Password reset link sent. Check your inbox.');
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setInfo('');

    const isRecaptchaValid = await ensureRecaptchaVerified();
    if (!isRecaptchaValid) {
      return;
    }

    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const credential = await signInWithPopup(auth, provider);
      if (credential.user && !credential.user.emailVerified) {
        setNeedsVerification(true);
        setInfo('Please verify your email to continue.');
        return;
      }
      onAuthSuccess();
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  };

  const handleResendVerification = async () => {
    setError('');
    setInfo('');

    if (!auth.currentUser) {
      setError('Sign in again to resend verification.');
      return;
    }

    try {
      setLoading(true);
      await sendEmailVerification(auth.currentUser);
      setInfo('Verification email sent.');
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleVerificationCheck = async () => {
    setError('');
    setInfo('');

    if (!auth.currentUser) {
      setError('Sign in again to continue.');
      return;
    }

    try {
      setLoading(true);
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        setNeedsVerification(false);
        onAuthSuccess();
      } else {
        setInfo('Still not verified. Please check your inbox.');
      }
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setNeedsVerification(false);
    setMode('login');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-sdf-bg text-sdf-text relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute -right-40 -top-40 w-[420px] h-[420px] rounded-full bg-sdf-cyan/10 blur-3xl"></div>
      <div className="absolute -left-32 -bottom-40 w-[420px] h-[420px] rounded-full bg-sdf-violet/10 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md mx-6 bg-sdf-surface/80 border border-sdf-border rounded-2xl p-8 backdrop-blur">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-mono text-sdf-muted uppercase tracking-widest">
              // Secure Access
            </p>
            <h1 className="font-heading text-2xl font-bold text-sdf-text">
              {needsVerification
                ? 'Verify Your Email'
                : mode === 'login'
                  ? 'Sign in to Dashboard'
                  : 'Create an Account'}
            </h1>
          </div>
          {onBackToSite && !needsVerification && (
            <button
              onClick={onBackToSite}
              className="text-xs font-mono text-sdf-muted hover:text-sdf-text transition-colors">
              Back to Site
            </button>
          )}
        </div>

        {needsVerification ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-sdf-muted">
                We sent a verification link to <span className="text-sdf-text">{displayEmail || 'your email'}</span>.
                Verify your email, then return here to continue.
              </p>
            </div>
            {error && (
              <div className="text-sm text-sdf-red bg-sdf-red/10 border border-sdf-red/30 rounded-md px-3 py-2">
                {error}
              </div>
            )}
            {info && (
              <div className="text-sm text-sdf-cyan/90 bg-sdf-cyan/10 border border-sdf-cyan/30 rounded-md px-3 py-2">
                {info}
              </div>
            )}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleVerificationCheck}
                disabled={loading}
                className="w-full bg-sdf-cyan text-sdf-bg font-ui font-semibold py-2.5 rounded-md hover:bg-sdf-cyan/90 transition-colors disabled:opacity-70">
                {loading ? 'Checking...' : 'I have verified my email'}
              </button>
              <button
                type="button"
                onClick={handleResendVerification}
                disabled={loading}
                className="w-full border border-sdf-border text-sdf-text font-ui font-semibold py-2.5 rounded-md hover:border-sdf-cyan/70 transition-colors disabled:opacity-70">
                Resend verification email
              </button>
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full text-xs font-mono text-sdf-muted hover:text-sdf-text transition-colors">
                Use a different account
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-sdf-muted" htmlFor="auth-email">
                Email
              </label>
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-sdf-bg border border-sdf-border rounded-md px-3 py-2 text-sm font-ui text-sdf-text outline-none focus:border-sdf-cyan/60"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-sdf-muted" htmlFor="auth-password">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full bg-sdf-bg border border-sdf-border rounded-md px-3 py-2 text-sm font-ui text-sdf-text outline-none focus:border-sdf-cyan/60"
                placeholder="Minimum 6 characters"
              />
            </div>

            {mode === 'signup' && (
              <div className="space-y-2">
                <label
                  className="text-xs font-mono text-sdf-muted"
                  htmlFor="auth-confirm-password">
                  Confirm Password
                </label>
                <input
                  id="auth-confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="w-full bg-sdf-bg border border-sdf-border rounded-md px-3 py-2 text-sm font-ui text-sdf-text outline-none focus:border-sdf-cyan/60"
                  placeholder="Repeat your password"
                />
              </div>
            )}

            {error && (
              <div className="text-sm text-sdf-red bg-sdf-red/10 border border-sdf-red/30 rounded-md px-3 py-2">
                {error}
              </div>
            )}

            {info && (
              <div className="text-sm text-sdf-cyan/90 bg-sdf-cyan/10 border border-sdf-cyan/30 rounded-md px-3 py-2">
                {info}
              </div>
            )}

            {recaptchaSiteKey ? (
              <div className="pt-2">
                {ReCAPTCHAComponent ? (
                  <ReCAPTCHAComponent
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    onChange={(token: string) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                ) : null}
              </div>
            ) : (
              <p className="text-xs font-mono text-sdf-red">
                Missing reCAPTCHA site key. Set VITE_RECAPTCHA_SITE_KEY.
              </p>
            )}

            {recaptchaError && (
              <div className="text-sm text-sdf-red bg-sdf-red/10 border border-sdf-red/30 rounded-md px-3 py-2">
                {recaptchaError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sdf-cyan text-sdf-bg font-ui font-semibold py-2.5 rounded-md hover:bg-sdf-cyan/90 transition-colors disabled:opacity-70">
              {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="gsi-material-button">
              <div className="gsi-material-button-state"></div>
              <div className="gsi-material-button-content-wrapper">
                <div className="gsi-material-button-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                    style={{ display: 'block' }}>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span className="gsi-material-button-contents">Sign in with Google</span>
                <span className="gsi-material-button-contents" style={{ display: 'none' }}>
                  Sign in with Google
                </span>
              </div>
            </button>

            {mode === 'login' && (
              <button
                type="button"
                onClick={handlePasswordReset}
                className="w-full text-xs font-mono text-sdf-muted hover:text-sdf-text transition-colors">
                Forgot password?
              </button>
            )}
          </form>
        )}

        {!needsVerification && (
          <div className="mt-6 text-xs font-mono text-sdf-muted">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-sdf-cyan hover:text-sdf-cyan/80 transition-colors">
              {mode === 'login' ? 'Create one' : 'Sign in'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
