"use client";

import { useState } from "react";

const PRESETS = [10, 20, 30, 50]; // dollars

export default function DonateForm({ canceled }: { canceled: boolean }) {
  const [amount, setAmount] = useState<number>(20);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(canceled ? "Your donation was canceled — nothing was charged." : "");

  const dollars = custom !== "" ? Number(custom) : amount;
  const valid = Number.isFinite(dollars) && dollars >= 1 && dollars <= 10000;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(dollars * 100) }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Something went wrong.");
      window.location.assign(data.url); // off to Stripe's secure checkout page
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white p-8 text-night md:p-10">
      <fieldset>
        <legend className="text-lg font-semibold">Choose an amount</legend>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PRESETS.map((p) => {
            const selected = custom === "" && amount === p;
            return (
              <button
                key={p}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setAmount(p);
                  setCustom("");
                }}
                className={`min-h-12 rounded-full border-[1.5px] text-lg font-semibold transition-colors ${
                  selected ? "border-night bg-night text-paper" : "border-dawn-line bg-mist hover:border-night"
                }`}
              >
                ${p}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label htmlFor="custom-amount" className="mt-6 block font-semibold">
        Or enter your own amount
      </label>
      <div className="mt-2 flex items-center rounded-2xl border-[1.5px] border-dawn-line px-4 focus-within:border-night">
        <span aria-hidden="true" className="text-lg text-ink-soft">
          $
        </span>
        <input
          id="custom-amount"
          type="number"
          inputMode="decimal"
          min={1}
          max={10000}
          step="0.01"
          placeholder="Other amount"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="min-h-12 w-full bg-transparent px-2 text-lg outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={!valid || loading}
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-gold text-lg font-semibold text-night transition-colors hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Opening secure checkout…" : valid ? `Donate $${dollars.toFixed(2)}` : "Enter an amount from $1"}
      </button>

      <p className="mt-4 text-center text-sm text-ink-soft">
        You&apos;ll finish on Stripe&apos;s secure checkout page. We never see your card details.
      </p>

      {error && (
        <p role="alert" className="mt-4 rounded-2xl bg-dawn p-4 text-center font-medium">
          {error}
        </p>
      )}
    </form>
  );
}
