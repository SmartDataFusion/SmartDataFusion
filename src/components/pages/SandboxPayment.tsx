import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";



const stripePromise = loadStripe(
  "pk_test_51TWaRKHmSFV3JWUTmMMjubrv8Nrrd2ED6kgHmQwqXDPafN2Ui8PzWhehNMikzClE7ndse9Vig4h9tg3ZqnvJLUQn00zo80GIIy"
);



function CheckoutForm({
  planName,
  planPrice,
}: {
  planName: string;
  planPrice: string;
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const card = elements.getElement(CardElement);

    if (!card) {
      setError("Card field unavailable.");
      setLoading(false);
      return;
    }

    const { error: stripeError, token } =
      await stripe.createToken(card);

    if (stripeError) {
      setError(
        stripeError.message || "Payment validation failed."
      );

      setLoading(false);
      return;
    }

    console.log("Stripe Token:", token);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };



  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-sdf-border bg-sdf-surface/80 p-8 text-center shadow-[0_30px_80px_rgba(0,200,255,0.18)] backdrop-blur-2xl"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sdf-cyan to-sdf-violet text-white">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h2 className="mt-6 text-4xl font-heading text-sdf-text">
          Payment Successful
        </h2>

        <p className="mt-3 font-mono text-sdf-muted">
          Sandbox payment completed successfully.
        </p>

        <div className="mt-6 rounded-2xl border border-sdf-border bg-sdf-surface/60 p-5">
          <p className="text-sm font-mono text-sdf-muted">
            Selected Plan
          </p>

          <div className="mt-2 flex items-center justify-between">
            <span className="font-ui font-semibold text-sdf-text">
              {planName}
            </span>

            <span className="text-2xl font-heading text-sdf-cyan">
              {planPrice}
            </span>
          </div>
        </div>

        <a
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-sdf-cyan to-sdf-violet px-8 font-ui font-semibold text-sdf-bg"
        >
          Back to Home
        </a>
      </motion.div>
    );
  }




  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-2xl border border-sdf-border bg-sdf-surface/60 p-5 shadow-sm">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#D6E8F7",

                "::placeholder": {
                  color: "#6B7E91",
                },
              },

              invalid: {
                color: "#F43F5E",
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-500">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="h-14 w-full rounded-full bg-gradient-to-r from-sdf-cyan to-sdf-violet font-ui font-semibold text-sdf-bg"
      >
        {loading ? "Processing..." : `Pay ${planPrice}`}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs font-mono text-sdf-muted">
        <ShieldCheck className="h-4 w-4 text-sdf-cyan" />

        Stripe Sandbox Mode — No real payment
      </div>
    </form>
  );
}



export function SandboxPaymentPage() {
  const { planName, planPrice } = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return {
      planName: searchParams.get("plan") || "Enterprise AI",
      planPrice: searchParams.get("price") || "$29/mo",
    };
  }, []);

  const valueProps = [
    {
      title: "Instant setup",
      desc: "Spin up data fusion pipelines in minutes with guided onboarding.",
    },
    {
      title: "AI-powered insights",
      desc: "Deliver forecasts and anomaly detection in real time.",
    },
  ];

  const inclusions = [
    "Unified analytics workspace",
    "24/7 model monitoring",
    "Enterprise-grade security",
    "Dedicated success support",
  ];

  const sidebarContent = (
    <>
      <div className="rounded-2xl border border-sdf-border bg-sdf-surface/70 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-sdf-muted">
          What you get
        </p>
        <ul className="mt-4 space-y-4 text-sm text-sdf-text">
          {inclusions.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-sdf-cyan" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-sdf-border bg-sdf-surface/70 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-sdf-muted">
          Security promise
        </p>
        <p className="mt-3 text-sm text-sdf-text">
          Tokenized payments with Stripe. No real charges are made in sandbox mode.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-sdf-surface px-3 py-1 text-xs text-sdf-cyan">
          <ShieldCheck className="h-4 w-4" />
          Sandbox mode enabled
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-sdf-border bg-sdf-surface/70 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-sdf-muted">
          Need a custom rollout?
        </p>
        <p className="mt-3 text-sm text-sdf-text">
          Talk to our solution architects about compliance, private cloud, or on-premise deployments.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center text-sm font-semibold text-sdf-cyan"
        >
          Contact sales
        </a>
      </div>
    </>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-sdf-bg px-4 py-16 text-sdf-text">
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-sdf-cyan/20 blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-sdf-violet/25 blur-[160px]" />
        <div className="absolute left-1/2 top-24 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-sdf-cyan/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="flex items-center justify-between text-sm text-sdf-muted">
          <a href="/" className="inline-flex items-center gap-2 font-mono">
            <ArrowLeft className="h-4 w-4" />
            Back to SmartDataFusion
          </a>
          <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-sdf-border bg-sdf-surface/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em]">
            Stripe Sandbox
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[40px] border border-sdf-border bg-sdf-surface/70 p-8 shadow-[0_30px_120px_rgba(0,200,255,0.18)] backdrop-blur-2xl md:p-12">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sdf-cyan to-sdf-violet text-white shadow-lg">
                <CreditCard />
              </div>
              <div>
                <h1 className="text-3xl font-heading text-sdf-text">
                  Secure AI Checkout
                </h1>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-sdf-muted">
                  Stripe Sandbox
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-sdf-border bg-sdf-surface/60 p-5">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-sdf-muted">
                    Selected Plan
                  </p>
                  <p className="mt-2 text-lg font-ui font-semibold text-sdf-text">
                    {planName}
                  </p>
                </div>
                <span className="text-2xl font-heading text-sdf-cyan">
                  {planPrice}
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {valueProps.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-sdf-border bg-sdf-surface/60 p-4"
                >
                  <p className="text-sm font-semibold text-sdf-text">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs font-mono text-sdf-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-sdf-border bg-sdf-bg p-5">
              <p className="text-xs font-mono text-sdf-muted">Test Card Number</p>
              <p className="mt-2 font-mono text-xl tracking-widest">
                4242 4242 4242 4242
              </p>
            </div>

            <div className="mt-8">
              <Elements stripe={stripePromise}>
                <CheckoutForm planName={planName} planPrice={planPrice} />
              </Elements>
            </div>
          </div>

          <div className="lg:hidden">
            <details className="rounded-[28px] border border-sdf-border bg-sdf-surface/70 p-5 backdrop-blur-2xl">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-mono text-sdf-muted">
                Plan details
                <span className="text-xs uppercase tracking-[0.2em] text-sdf-cyan">Tap to expand</span>
              </summary>
              <div className="mt-6">{sidebarContent}</div>
            </details>
          </div>

          <aside className="hidden rounded-[36px] border border-sdf-border bg-sdf-surface/70 p-8 shadow-[0_20px_80px_rgba(0,200,255,0.12)] backdrop-blur-2xl lg:block">
            {sidebarContent}
          </aside>
        </div>
      </div>

      {/* Security Features Section */}
      <section className="relative mt-20 border-t border-sdf-border pt-20 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4 text-center">Secure Payment Processing</h2>
          <p className="text-center font-mono text-sm text-sdf-muted mb-12">Your payment data is encrypted and secured with industry standards</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <div className="text-sdf-cyan font-mono text-lg font-bold mb-2">256-bit SSL</div>
              <p className="font-mono text-sm text-sdf-muted">Industry-standard encryption for all data in transit</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <div className="text-sdf-violet font-mono text-lg font-bold mb-2">PCI Compliant</div>
              <p className="font-mono text-sm text-sdf-muted">Full compliance with Payment Card Industry standards</p>
            </div>
            <div className="bg-sdf-surface border border-sdf-border rounded-lg p-6">
              <div className="text-sdf-cyan font-mono text-lg font-bold mb-2">No Card Storage</div>
              <p className="font-mono text-sm text-sdf-muted">Your card details are never stored on our servers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="relative border-t border-sdf-border pt-20 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-3xl font-bold text-sdf-text mb-4 text-center">Flexible Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-sdf-surface/50 border border-sdf-border rounded-lg p-8">
              <h3 className="font-ui font-semibold text-sdf-text mb-3">Monthly Billing</h3>
              <p className="font-mono text-sm text-sdf-muted mb-4">Pay as you go with flexible monthly plans. Cancel anytime with no penalties.</p>
              <ul className="space-y-2">
                <li className="font-mono text-xs text-sdf-muted">✓ Full feature access</li>
                <li className="font-mono text-xs text-sdf-muted">✓ 30-day cancellation</li>
              </ul>
            </div>
            <div className="bg-sdf-surface/50 border border-sdf-border rounded-lg p-8">
              <h3 className="font-ui font-semibold text-sdf-text mb-3">Annual Plans</h3>
              <p className="font-mono text-sm text-sdf-muted mb-4">Save 20% with annual billing. Get priority support and custom solutions.</p>
              <ul className="space-y-2">
                <li className="font-mono text-xs text-sdf-muted">✓ 20% discount</li>
                <li className="font-mono text-xs text-sdf-muted">✓ Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative border-t border-sdf-border pt-20 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-sdf-text mb-12 text-center">Payment FAQs</h2>
          <div className="space-y-6">
            <div className="bg-sdf-surface/50 border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">What if my payment fails?</h3>
              <p className="font-mono text-sm text-sdf-muted">We'll notify you immediately and provide options to update your payment method.</p>
            </div>
            <div className="bg-sdf-surface/50 border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Can I get an invoice?</h3>
              <p className="font-mono text-sm text-sdf-muted">Yes, invoices are automatically generated and available in your account dashboard.</p>
            </div>
            <div className="bg-sdf-surface/50 border border-sdf-border rounded-lg p-6">
              <h3 className="font-ui font-semibold text-sdf-text mb-2">Do you offer refunds?</h3>
              <p className="font-mono text-sm text-sdf-muted">We offer a 30-day money-back guarantee for annual plans. Monthly plans can be cancelled anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}