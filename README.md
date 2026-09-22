# CELLA website

Next.js App Router website for heycella.com. Public pages are statically rendered; private partner-kit data is decrypted only by the server after a password is supplied.

## Development

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

Run HTTP checks against a running build with `node scripts/verify-site.mjs http://localhost:3000`. An optional third argument accepts a credentials JSON file stored **outside** the repository. Never commit credentials, rate-card source files or authenticated response snapshots.

## Content and SEO

- `lib/services.ts` is the shared public service catalogue.
- `lib/featured-work.ts` holds featured work and dated campaign evidence.
- Public route metadata uses `lib/seo.ts`; image metadata is explicit so private pages do not inherit campaign imagery.
- The sitemap is a public-route allowlist. Do not add partner kits or redirects.
- Private pages have noindex metadata and response headers. Leave them crawlable so crawlers can see noindex; robots.txt is not access control.
- The retired service URL redirects permanently to Services.

## Private kit maintenance

Existing links and encrypted records are retained. New rates use independent AES-256-GCM records with random salts and IVs and PBKDF2-SHA256 (310,000 iterations). The server-only vault must never be imported into client code. The browser holds unlocked content only in memory; API responses are private/no-store.

`scripts/encrypt-kit.mjs` accepts `{content,password}` JSON on stdin and emits only an encrypted record. Feed it from a securely stored file outside the repository; do not put secrets on the command line or in tests. Confirm every amount against the original rate card before replacing a record. Preserve old records unless a deliberate password rotation is requested.

The per-instance attempt limiter is a modest abuse brake, not a distributed security control. Consider a durable rate limiter if traffic or abuse warrants it. Password sharing grants access; noindex does not make a URL secret. Never publish a client-side bypass or plaintext preview.

## Integrations and performance

- The enquiry form prepares a mailto draft. It does **not** send mail or persist leads. Copy-to-clipboard is the fallback.
- Vercel Web Analytics remains the only analytics integration. It excludes partner-kit routes and strips query strings. Fixed-name CTA events contain no form data; an enquiry draft is not a completed submission.
- Instagram embeds load only after a visitor chooses to load them.
- The cover video is a local, muted H.264 MP4. Mobile, reduced-motion and data-saving visitors get a photo until they choose playback. Playback pauses when hidden/offscreen.
- Text-encoded source chunks in `assets/cover-video/` are decoded and checksum-verified by the build command. Only the MP4 is publicly served; the chunks are not imported into browser code.
- Montserrat body type references the Canva brand guidelines; Oswald retains the established editorial display style.

## Release checks

Build and test on a feature branch, inspect a Vercel preview, check every route and the enquiry journey, then merge to main. Recheck the custom domain, private headers and existing kit access. Do not claim improved search rankings or Core Web Vitals without measured evidence.
