'use client'
import { track } from '@vercel/analytics'
import type { ComponentProps } from 'react'
type Props = ComponentProps<'a'> & { event: 'guide_sample_open' | 'guide_interest_open' | 'travel_story_open' | 'official_booking_open' | 'home_product_open' | 'home_story_open'; placement: string }
export function MeasuredLink({ event, placement, onClick, ...props }: Props) {
  return <a {...props} onClick={(e) => {
    onClick?.(e)
    // Off by default. Enable only on hosting with a verified custom-events entitlement.
    if (!e.defaultPrevented && process.env.NEXT_PUBLIC_CELLA_EVENTS_ENABLED === 'true') {
      try { track(event, { placement }) } catch { /* navigation must still work */ }
    }
  }} />
}
