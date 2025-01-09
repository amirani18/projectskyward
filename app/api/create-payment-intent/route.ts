import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
});

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error("EMAIL_USER and EMAIL_PASS are required for sending emails");
}

const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email provider if not Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { amount, email } = await req.json(); // Expect amount and email from frontend

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency: "usd",
      payment_method_types: ["card"],
    });

    // Send email confirmation
    const emailMessage = {
      from: `"Project Skyward" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Donation Confirmation - Project Skyward",
      text: `Thank you for your generous donation of $${(amount / 100).toFixed(
        2
      )} to Project Skyward! Your contribution helps us empower refugee youth.`,
      html: `<p>Dear Donor,</p>
        <p>Thank you for your generous donation of <strong>$${(amount / 100).toFixed(
          2
        )}</strong> to Project Skyward!</p>
        <p>Your contribution helps us empower refugee youth through education and support.</p>
        <p>Warm regards,<br>Project Skyward Team</p>`,
    };

    await transporter.sendMail(emailMessage);

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
