// Account-approved source: TikTok only. Website/email/PDF use needs approval.
export function klookLink(input) {
  const url = new URL(input)
  if (url.protocol !== 'https:' || url.hostname !== 'www.klook.com' || url.username || url.password || url.port) {
    throw new Error('Use an HTTPS www.klook.com link from the official link tool.')
  }
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_|gclid$|gbraid$|wbraid$)/i.test(key)) url.searchParams.delete(key)
  }
  url.searchParams.set('aid', '71358')
  return url.toString()
}
export const holaflyExistingLink = 'https://holafly.sjv.io/c/6122052/2006335/24764'
