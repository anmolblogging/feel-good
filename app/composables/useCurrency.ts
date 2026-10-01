import { computed, onMounted } from 'vue'
import {
  type Currency,
  type SessionId,
  formatPrice,
  getSessionAmount,
  getSessionFormattedPrice
} from '~~/shared/utils/sessionCatalogue'

export const useCurrency = () => {
  const cookie = useCookie<Currency>('fgc_currency', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    default: () => 'INR'
  })

  const currency = useState<Currency>('fgc_active_currency', () => {
    return cookie.value || 'INR'
  })

  // Server-side Geo-detection on initial cold hit & URL query override for testing
  try {
    const route = useRoute()
    const queryCurrency = route?.query?.currency?.toString().toUpperCase()
    const queryCountry = route?.query?.country?.toString().toUpperCase()

    if (queryCurrency === 'USD' || (queryCountry && queryCountry !== 'IN')) {
      currency.value = 'USD'
      cookie.value = 'USD'
    } else if (queryCurrency === 'INR' || queryCountry === 'IN') {
      currency.value = 'INR'
      cookie.value = 'INR'
    } else if (import.meta.server) {
      const event = useRequestEvent()
      if (event && !useCookie('fgc_currency_chosen').value) {
        const country = (
          event.node.req.headers['x-vercel-ip-country'] ||
          event.node.req.headers['cf-ipcountry'] ||
          ''
        ).toString().toUpperCase().trim()

        if (country && country !== 'IN') {
          currency.value = 'USD'
          cookie.value = 'USD'
        }
      }
    }
  } catch {
    // Fallback INR
  }

  // Client-side fallback detection if user hasn't explicitly chosen
  if (import.meta.client) {
    onMounted(async () => {
      const chosen = useCookie('fgc_currency_chosen')
      if (!chosen.value) {
        try {
          const res = await $fetch<{ currency: Currency; country: string }>('/api/geo')
          if (res?.currency && res.currency !== currency.value) {
            currency.value = res.currency
            cookie.value = res.currency
          }
        } catch {
          // ignore
        }
      }
    })
  }

  const setCurrency = (c: Currency) => {
    currency.value = c
    cookie.value = c
    const chosen = useCookie('fgc_currency_chosen', { maxAge: 60 * 60 * 24 * 365 })
    chosen.value = 'true'
  }

  const toggleCurrency = () => {
    setCurrency(currency.value === 'INR' ? 'USD' : 'INR')
  }

  const isUsd = computed(() => currency.value === 'USD')
  const currencySymbol = computed(() => (currency.value === 'USD' ? '$' : '₹'))

  const getPrice = (sessionId: SessionId) => {
    return getSessionFormattedPrice(sessionId, currency.value)
  }

  const getAmount = (sessionId: SessionId) => {
    return getSessionAmount(sessionId, currency.value)
  }

  return {
    currency,
    isUsd,
    currencySymbol,
    setCurrency,
    toggleCurrency,
    getPrice,
    getAmount,
    formatPrice: (amount: number) => formatPrice(amount, currency.value)
  }
}
