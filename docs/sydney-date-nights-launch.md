# Sydney Date Nights, Sorted

Review route: `/guides/sydney-date-nights`. Price: A$29 once.

## Checkout selected

Stripe directly, as requested by Marcella. The sales page stays on heycella.com and the Buy button will open a Stripe Payment Link for one digital product at A$29 AUD.

The website's link configuration and checkout wording now use Stripe. No Stripe account, product, Payment Link, webhook or paid download service has been provisioned. This is a review draft, not a working payment integration.

Purchase buttons remain disabled. Both a valid Stripe-hosted link and `SYDNEY_GUIDE_CHECKOUT_READY=true` are required. Stripe test links are rejected in Vercel production. The route remains noindex and outside navigation and the sitemap.

Never add the full paid PDF, companion or private authoring master to this public repository. Only the cover, promotional assets and free sample belong here.

## Finish setup

1. Marcella creates or signs in to her Stripe Australia account at https://dashboard.stripe.com/register and completes the business, identity and payout details in Stripe. Connect the account securely; never put secret keys in chat or Git.
2. In a Stripe sandbox, create `Sydney Date Nights, Sorted`, one-time price A$29.00 AUD, quantity one. Use the prepared description and cover. No subscription or physical shipping is needed. Confirm the tax configuration and total against the business's actual registration before launch.
3. Create the Payment Link with an after-payment return to the website. Record its actual Price and Payment Link IDs. Do not point it at a public paid PDF or treat the return URL as proof of payment.
4. Implement private file delivery against the connected account. Verify signed Stripe webhook events, payment status, the expected Price/Payment Link, quantity, currency and test/live mode. Make fulfilment safe to retry. Serve files only after server-side payment verification. Cover abandoned redirects with a durable fulfilment record and a way for the purchaser to recover access. Stripe payment receipts alone do not deliver the guide.
5. Test successful, cancelled, failed and delayed payments, invalid webhook signatures, repeated events and unrelated products. Confirm unpaid checkouts cannot download the files. Check the actual customer ZIP and the companion's browser controls. A source-code check does not replace a real sandbox checkout and download test.
6. Create the live A$29 AUD product/link after activation. Set `STRIPE_SYDNEY_GUIDE_PAYMENT_LINK` to the real `https://buy.stripe.com/...` URL. Only after fulfilment passes, set `SYDNEY_GUIDE_CHECKOUT_READY=true` and redeploy; the page reads this configuration during the build. Remove the obsolete provider variable from Vercel if it was ever set.
7. Reconcile the separate website redesign before merging. At launch, remove this route's noindex override, add it to navigation and sitemap, and verify the production configuration. No live charge has been attempted.

Pocket Pizza and Dry Dock photographs are already included in the guide and companion, using stills from Marcella's own visit videos.

## Sources checked 26 September 2026

- https://docs.stripe.com/no-code/payment-links
- https://docs.stripe.com/payment-links/post-payment
- https://docs.stripe.com/checkout/fulfillment
- https://stripe.com/au/pricing
