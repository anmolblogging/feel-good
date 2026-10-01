/**
 * The single source of truth for what can be paid for and what it costs.
 *
 * Lives in `shared/` so both the browser (to show the price) and the server
 * (to create the Razorpay order) read the same numbers. The server never
 * trusts an amount sent from the browser: it looks the session up here by id.
 *
 * Amounts are in rupees. Razorpay wants paise, and the order route does that
 * conversion in one place.
 */
export type Currency = 'INR' | 'USD'

export type SessionId =
  | 'first-conversation'
  | 'listening-50'
  | 'deep-75'
  | 'followup-30'
  | 'checkin-monthly'
  | 'gift-50'

export type CatalogueEntry = {
  id: SessionId
  title: string
  amountInr: number
  amountUsd: number
  durationMinutes: number
}

export const SESSION_CATALOGUE: Record<SessionId, CatalogueEntry> = {
  'first-conversation': { id: 'first-conversation', title: 'First Feel-Good Conversation', amountInr: 799, amountUsd: 19, durationMinutes: 30 },
  'listening-50': { id: 'listening-50', title: 'Feel-Good Listening Session', amountInr: 1799, amountUsd: 39, durationMinutes: 50 },
  'deep-75': { id: 'deep-75', title: 'Deep Listening Session', amountInr: 2499, amountUsd: 55, durationMinutes: 75 },
  'followup-30': { id: 'followup-30', title: 'Follow-Up Session', amountInr: 1000, amountUsd: 25, durationMinutes: 30 },
  'checkin-monthly': { id: 'checkin-monthly', title: 'Emotional Check-In Plans', amountInr: 6000, amountUsd: 140, durationMinutes: 50 },
  'gift-50': { id: 'gift-50', title: 'Gift a Session', amountInr: 1799, amountUsd: 39, durationMinutes: 50 }
}

export function isSessionId(value: unknown): value is SessionId {
  return typeof value === 'string' && value in SESSION_CATALOGUE
}

export function isCurrency(value: unknown): value is Currency {
  return value === 'INR' || value === 'USD'
}

export function formatInr(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN')
}

export function formatUsd(amount: number): string {
  return '$' + amount.toLocaleString('en-US')
}

export function formatPrice(amount: number, currency: Currency = 'INR'): string {
  return currency === 'USD' ? formatUsd(amount) : formatInr(amount)
}

export function getSessionAmount(id: SessionId, currency: Currency = 'INR'): number {
  const item = SESSION_CATALOGUE[id]
  if (!item) return 0
  return currency === 'USD' ? item.amountUsd : item.amountInr
}

export function getSessionFormattedPrice(id: SessionId, currency: Currency = 'INR'): string {
  const item = SESSION_CATALOGUE[id]
  if (!item) return ''
  return formatPrice(currency === 'USD' ? item.amountUsd : item.amountInr, currency)
}

