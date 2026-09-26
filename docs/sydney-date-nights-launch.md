# Sydney Date Nights, Sorted

Review route: `/guides/sydney-date-nights`. Price: A$29 once.

## Checkout selected

Payhip Free Forever with Stripe Australia. Payhip delivers the purchased files and emails the buyer a download link. Its free plan charges 5% per sale plus Stripe processing. The sales page stays on heycella.com and links to Payhip's hosted checkout. No monthly subscription is needed at launch.

Purchase buttons are prepared but disabled. Without both the actual product key and readiness flag, visitors see the free sample and Coming soon. The review page remains noindex and outside the public navigation and sitemap.

Never add the full paid PDF, companion or private authoring master to this public repository. Only the cover, promotional assets and free sample belong here.

## Finish setup

1. Marcella creates the free Payhip account and connects Stripe through Account > Settings > Payment Details. She completes identity, business, tax and payout-bank details in the providers' secure forms.
2. Set selling currency to AUD. Add a digital product titled Sydney Date Nights, Sorted, fixed price 29. Use Invisible visibility while preparing it. Upload the paid PDF and customer ZIP. Use the free sample as the preview and cover as product media. The private master is not a customer file.
3. Use the prepared checkout copy. Check the displayed total, applicable tax settings and customer support/refund terms against her actual business settings. Do not assume GST registration or tax exemption.
4. Verify a successful checkout delivers the correct files and receipt email. Verify cancelled/failed payments cannot retrieve paid files. Check mobile downloading and the companion controls. Current companion code/data checks do not replace browser acceptance testing.
5. Copy the real Payhip product key and set PAYHIP_SYDNEY_GUIDE_PRODUCT_KEY. Only after delivery passes, set SYDNEY_GUIDE_CHECKOUT_READY=true and redeploy. This page is built with deployment environment values. No payment secret keys belong in the repository.
6. Use Unlisted visibility for sales from the website. Confirm A$29 AUD at checkout. At launch remove this route's noindex override, add it to navigation and sitemap, and verify the production flow.

Pocket Pizza and Dry Dock photographs have been added to the guide and companion using stills from Marcella’s own visit videos. The original source record is retained in the private master.

The branch remains a review draft. Another website redesign branch exists, so reconcile it before merging.

## Provider sources checked 26 September 2026

- https://payhip.com/pricing
- https://help.payhip.com/article/65-connecting-your-stripe-account
- https://help.payhip.com/article/59-adding-a-digital-product
- https://help.payhip.com/article/126-direct-checkout-link
- https://help.payhip.com/article/132-how-payhip-works
