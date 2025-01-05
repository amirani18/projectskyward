"use client";

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setMessage("Stripe is not loaded yet.");
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment("your-client-secret", {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent.status === "succeeded") {
      setMessage("Payment successful! Thank you for your donation.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="card-element" className="block text-sm font-medium">
          Card Details
        </label>
        <CardElement
          id="card-element"
          className="p-3 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-dark-blue disabled:opacity-50"
      >
        {loading ? "Processing..." : "Donate"}
      </button>
      {message && <p className="text-center text-red-600">{message}</p>}
    </form>
  );
}
