// Enable only after the real Stripe Payment Link and private file delivery pass testing.
export function getSydneyGuideCheckoutUrl(env = process.env) {
  const link = env.STRIPE_SYDNEY_GUIDE_PAYMENT_LINK?.trim()
  if (env.SYDNEY_GUIDE_CHECKOUT_READY !== "true" || !link ||
      !/^https:\/\/buy\.stripe\.com\/(?:test_)?[A-Za-z0-9]+$/.test(link)) {
    return null
  }
  if (env.VERCEL_ENV === "production" && link.includes("/test_")) return null
  return link
}
