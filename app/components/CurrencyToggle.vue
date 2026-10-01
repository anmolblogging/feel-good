<template>
  <div
    class="inline-flex items-center p-1 rounded-full bg-default-200/60 border border-default-200/80 shadow-2xs backdrop-blur-xs select-none"
    role="group"
    aria-label="Select currency"
  >
    <button
      type="button"
      @click="setCurrency('INR')"
      :class="[
        'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
        currency === 'INR'
          ? 'bg-white text-default-950 shadow-xs'
          : 'text-default-500 hover:text-default-800'
      ]"
      aria-label="Switch to Indian Rupee (INR)"
      :aria-pressed="currency === 'INR'"
    >
      <span class="text-xs">🇮🇳</span>
      <span>₹ INR</span>
    </button>

    <button
      type="button"
      @click="setCurrency('USD')"
      :class="[
        'flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
        currency === 'USD'
          ? 'bg-white text-default-950 shadow-xs'
          : 'text-default-500 hover:text-default-800'
      ]"
      aria-label="Switch to US Dollar (USD)"
      :aria-pressed="currency === 'USD'"
    >
      <span class="text-xs">🌐</span>
      <span>$ USD</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCurrency } from '~/composables/useCurrency'

const { currency, setCurrency } = useCurrency()
</script>
