"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "../content/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#1e2c5c] bg-night">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" onClick={close} className="flex items-center gap-3 text-paper" aria-label={`${site.name} home`}>
          <Image src="/brand/owl.png" alt="" width={48} height={48} className="h-11 w-11 object-contain" priority />
          <span className="font-display text-xl font-semibold">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] font-medium transition-colors hover:text-gold ${active ? "text-gold" : "text-haze"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 font-semibold text-night transition-colors hover:bg-gold-bright"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-night px-6 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={pathname === item.href ? "page" : undefined}
              className="font-display text-3xl text-paper hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={close}
            className="mt-4 inline-flex min-h-12 items-center rounded-full bg-gold px-8 text-lg font-semibold text-night"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}
