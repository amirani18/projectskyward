# Project Skyward

![Project Skyward owl](public/brand/owl.png)

**Wisdom gives them wings.** Project Skyward is a nonprofit that helps refugee youth find their footing in American schools — and then rise — through bilingual tutoring, mentorship, free SAT/ACT prep and community events. We serve Indianapolis, Chicago and Bloomington, and are expanding to Madison, Wisconsin.

Live site: [projectskyward.org](https://projectskyward.org)

## The site's story: "Night to Dawn"

The owl in our logo stands for wisdom; the site tells the story of a flight. Each page reads top to bottom like a sky brightening — navy night, dusk, predawn blue, first light, a cream dawn and a gold sunrise at the donate call-to-action. Programs are a four-stage "flight path": **The Nest → First Flight → Gaining Altitude → Skyward**.

## Pages

| Route | What it is |
|---|---|
| `/` | Home: hero, next event, flight path, locations, past events, donate |
| `/about` | Our Story |
| `/programs` | The four program stages in detail |
| `/events` | The current featured event, speaker, registration, flyer download |
| `/past-events` | Archive of every past event, grouped by season, with original flyers |
| `/locations` | Cities we serve |
| `/get-involved` | Volunteer, donate, partner |
| `/donate` | Donation amount picker → Stripe Checkout |
| `/donate/thank-you` | Post-donation page |

Old URLs (`/services`, `/location`, `/competitions`, `/take-action`, old flyer PDFs) redirect to their new homes — see `next.config.ts`.

## Updating content (no design work needed)

All site copy that changes lives in `app/content/`:

- **`events.ts`** — `currentEvent` is the featured event. When an event ends, move it into `pastSeasons` (the archive page picks it up automatically) and set a new `currentEvent`. Put flyers in `public/events/` (current) or `public/archive/<year>/` (past).
- **`site.ts`** — contact details, navigation, programs and locations.

## Tech

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · Stripe Checkout. Hosted on Vercel.

## Running locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Other scripts: `npm run build`, `npm run lint`.

### Environment variables

Create `.env.local` (never commit it):

```env
# Required for donations. Use a test key (sk_test_…) locally.
STRIPE_SECRET_KEY=sk_test_...
# Optional: the public URL Stripe returns donors to. Defaults to the request's origin.
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The site builds and runs without `STRIPE_SECRET_KEY`; only the Donate button needs it.

## Donations

`/donate` posts the chosen amount to `/api/checkout`, which validates it ($1–$10,000) and creates a Stripe Checkout session. Donors pay on Stripe's hosted page, so card details never touch this site. To email receipts, turn on **Settings → Customer emails → Successful payments** in the Stripe Dashboard.

## License

GPL-3.0 — see `LICENSE`.
