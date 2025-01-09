"use client";

import React, { useState } from "react";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(500); // Default amount in cents ($5)
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setMessage("Stripe is not loaded yet.");
      setLoading(false);
      return;
    }

    try {
      // Request client_secret from API
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }), // Send amount
      });

      const { clientSecret, error } = await res.json();
      if (error) {
        throw new Error(error);
      }

      // Confirm the payment
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            address: {
              postal_code: postalCode,
            },
          },
        },
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      if (paymentIntent.status === "succeeded") {
        setMessage("Payment successful!");
      }
    } catch (error) {
      setMessage(error.message);
    }

    setLoading(false);
  };

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Donation Amount Selection */}
      <div>
        <label className="block text-lg font-medium mb-2">Choose Donation Amount</label>
        <div className="flex gap-3 justify-center mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg ${
              amount === 500 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleAmountChange(500)}
          >
            $5
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg ${
              amount === 1000 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleAmountChange(1000)}
          >
            $10
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg ${
              amount === 2000 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleAmountChange(2000)}
          >
            $20
          </button>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="custom-amount" className="text-sm font-medium">
            Custom Amount ($):
          </label>
          <input
            id="custom-amount"
            type="number"
            min="1"
            step="1"
            className="p-2 border rounded-md w-28"
            value={amount / 100}
            onChange={(e) => handleAmountChange(Math.round(Number(e.target.value) * 100))}
          />
        </div>
      </div>

      {/* Card Details */}
      <div>
        <label htmlFor="card-number" className="block text-lg font-medium mb-2">
          Card Number
        </label>
        <CardNumberElement
          id="card-number"
          className="p-3 border border-gray-300 rounded-md w-full"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="card-expiry" className="block text-lg font-medium mb-2">
            Expiration
          </label>
          <CardExpiryElement
            id="card-expiry"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="card-cvc" className="block text-lg font-medium mb-2">
            CVC
          </label>
          <CardCvcElement
            id="card-cvc"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="postal-code" className="block text-lg font-medium mb-2">
          ZIP Code
        </label>
        <input
          id="postal-code"
          type="text"
          className="p-3 border border-gray-300 rounded-md w-full"
          placeholder="Enter your ZIP code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || loading || amount < 100}
        className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : `Donate $${(amount / 100).toFixed(2)}`}
      </button>

      {/* Message */}
      {message && <p className="text-center text-green-600 mt-4">{message}</p>}
    </form>
  );
}
