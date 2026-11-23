import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Amounts are in cents. Stripe's own minimum for USD is $0.50; we use $1.
const MIN_AMOUNT = 100;
const MAX_AMOUNT = 1_000_000; // $10,000 cap to block garbage or abusive input

let stripe: Stripe | null = null;

// Created on first request instead of at import time, so `next build`
// works on machines that don't have the secret key set.
function getStripe(): Stripe {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not defined");
    }
    stripe = new Stripe(key, { apiVersion: "2026-11-18.endive" });
  }
  return stripe;
}

export async function POST(req: NextRequest) {
  let amount: unknown;
  try {
    ({ amount } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (
    typeof amount !== "number" ||
    !Number.isInteger(amount) ||
    amount < MIN_AMOUNT ||
    amount > MAX_AMOUNT
  ) {
    return NextResponse.json(
      { error: "Amount must be a whole number of cents between $1 and $10,000" },
      { status: 400 }
    );
  }

  try {
    const paymentIntent = await getStripe().paymentIntents.create({
      amount,
      currency: "usd",
      allowed_payment_method_types: ["card"],
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    // Log details server-side; don't leak Stripe internals to the browser.
    console.error("create-payment-intent failed:", error);
    return NextResponse.json(
      { error: "Payment could not be started. Please try again." },
      { status: 500 }
    );
  }
}
