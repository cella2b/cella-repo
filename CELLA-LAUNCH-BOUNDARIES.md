# Channel launch implementation

Prepared 13 September 2026. Not deployed. Existing portfolio and partner kits are unchanged.

Routes: /links, /guides/sydney, /travel, /travel/new-zealand, /travel/disclosure.
Seven-entry full guide is deliberately absent from this public repository. Only a free three-entry sample is included.

## Release boundaries

- This branch has Vercel automatic deployments disabled. Do not merge/deploy commercial pages until hosting is permitted for commercial use. Hobby is not.
- New pages are noindex. Remove that only when launch-ready. Do not treat noindex as access control.
- There is no checkout, fake signup, database, automated DM or email delivery. Interest opens the actual Instagram profile and explicitly asks for a manual message.
- Existing affiliate link construction is in lib/cella-links.mjs, not wired into website placements. Obtain approval for the exact traffic source before activation.
- NEXT_PUBLIC_CELLA_EVENTS_ENABLED defaults off. Enable only with verified event entitlement. Four custom click events are implemented, with placement enums and no personal data. No live event receipt or booking attribution has been asserted.
- A payment link alone is not fulfilment. A future paid launch requires completed-payment verification, private file storage, expiring download URLs, refund handling and a real test order. Do not put the paid PDF in public/.

## Verification

Passed: node --test tests/cella-links.test.mjs (3 groups), npx tsc --noEmit, and the production build (25 static routes). The existing Google font fetch required NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 in this environment. No font or TLS-validation bypass was committed.

Browser verification is incomplete: the local browser daemon exited at startup on both attempts, and a separate local HTTP probe returned no connection. Do not call this a mobile-tested release. Inspect every new route at 375, 390 and 1440px; test keyboard navigation and external destinations before release.
