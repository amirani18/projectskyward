import Image from "next/image";
import Link from "next/link";
import { nav, site } from "../content/site";

export default function SiteFooter() {
  return (
    <footer className="bg-night text-haze">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 text-paper">
            <Image src="/brand/owl.png" alt="" width={44} height={44} className="h-10 w-10 object-contain" />
            <span className="font-display text-xl">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-sm leading-relaxed">{site.tagline} A nonprofit helping refugee youth rise through education.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="hover:text-gold">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.tel}`} className="hover:text-gold">
                {site.phone.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1e2c5c]">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-haze-dim">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
