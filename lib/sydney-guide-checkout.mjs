// Enable only after the real Payhip product and paid file delivery have been checked.
export function getSydneyGuideCheckoutUrl(env = process.env) {
  const key = env.PAYHIP_SYDNEY_GUIDE_PRODUCT_KEY?.trim()
  if (env.SYDNEY_GUIDE_CHECKOUT_READY !== "true" || !key || !/^[A-Za-z0-9]+$/.test(key)) {
    return null
  }
  return `https://payhip.com/buy?link=${encodeURIComponent(key)}`
}
