import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Amounts are in cents.
const MIN_AMOUNT = 100; // $1
const MAX_AMOUNT = 1_000_000; // $10,000 — blocks garbage or abusive input

let stripe: Stripe | null = null;

// Created on first request instead of at import time, so `next build`
// works on machines that don't have the secret key set.
function getStripe(): Stripe {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY is not defined");
    stripe = new Stripe(key, { apiVersion: "2026-11-18.endive" });
  }
  return stripe;
}

// Creates a Stripe-hosted Checkout page for a one-time donation and returns
// its URL. Stripe collects the card, email and name, and can send receipts.
export async function POST(req: NextRequest) {
  let amount: unknown;
  try {
    ({ amount } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof amount !== "number" || !Number.isInteger(amount) || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
    return NextResponse.json(
      { error: "Please choose a donation between $1 and $10,000." },
      { status: 400 }
    );
  }

  // Prefer the configured public URL; fall back to the request's own origin
  // (covers local dev and Vercel preview deployments).
  const origin = process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: "Donation to Project Skyward",
              description: "Funding tutoring, test prep and events for refugee youth.",
            },
          },
        },
      ],
      billing_address_collection: "auto",
      success_url: `${origin}/donate/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?canceled=1`,
    });

    if (!session.url) throw new Error("Checkout session has no URL");
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("checkout session failed:", error);
    return NextResponse.json({ error: "Donations are unavailable right now. Please try again shortly." }, { status: 500 });
  }
}
