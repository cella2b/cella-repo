import test from 'node:test'
import assert from 'node:assert/strict'
import { klookLink } from '../lib/cella-links.mjs'
test('builds documented AID link and removes conflicting attribution', () => {
  assert.equal(klookLink('https://www.klook.com/en-AU/?utm_source=ig&gclid=old&gbraid=a&wbraid=b&aid=1&currency=AUD'), 'https://www.klook.com/en-AU/?aid=71358&currency=AUD')
})
test('retains relevant product selection and fragment', () => {
  assert.equal(klookLink('https://www.klook.com/activity/123/?date=2026-10-01#options'), 'https://www.klook.com/activity/123/?date=2026-10-01&aid=71358#options')
})
test('rejects untrackable, deceptive and unsafe destinations', () => {
  for (const url of ['https://s.klook.com/a', 'http://www.klook.com/', 'https://www.klook.com.evil.test/', 'javascript:alert(1)', 'https://user@www.klook.com/', 'https://www.klook.com:8443/']) assert.throws(() => klookLink(url))
})
