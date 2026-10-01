import { defineEventHandler, getRequestHeader } from 'h3'
import type { Currency } from '~~/shared/utils/sessionCatalogue'

/**
 * Detects visitor country using Vercel / edge headers.
 *
 * If outside India, default currency is USD.
 * If in India or undetected, default currency is INR.
 */
export default defineEventHandler((event) => {
  const countryHeader =
    getRequestHeader(event, 'x-vercel-ip-country') ||
    getRequestHeader(event, 'cf-ipcountry') ||
    getRequestHeader(event, 'x-country-code') ||
    ''

  const country = countryHeader.trim().toUpperCase()
  const isIndia = country === 'IN'

  const currency: Currency = isIndia || !country ? 'INR' : 'USD'

  return {
    country: country || 'UNKNOWN',
    currency,
    isIndia
  }
})
