<template>
  <!-- Navbar -->
  <header class="sticky top-0 z-50 bg-body-bg/95 backdrop-blur-md transition-all duration-300 border-b border-default-200/50">
    <div class="container">
      <div class="nav-sticky navbar md:py-6.5 py-4 flex items-center w-full justify-between">
        <NuxtLink to="/" class="relative flex h-11 md:h-12.5 items-center" @click="closeMobileMenu">
          <img src="/images/logo-fgc.png" class="h-12 md:h-15 w-auto max-w-none flex" alt="The Feel Good Centre" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div id="navbar" class="mx-auto hidden lg:flex items-center justify-center">
          <template v-for="(item, idx) in menuItemData" :key="idx">
            <!-- Simple link -->
            <NuxtLink
              v-if="!item.children"
              :to="item.to!"
              exact-active-class="active"
              class="group flex items-center p-2.5 font-medium text-default-600 transition-all duration-300 hover:text-pink hover:decoration-current underline decoration-transparent underline-offset-3 [&.active]:text-pink [&.active]:decoration-current"
            >
              {{ item.name }}
              <Icon icon="tabler:arrow-up-right" class="ms-1.25 flex size-4 scale-0 text-pink transition-all duration-300 group-hover:scale-100 group-[.active]:scale-100"></Icon>
            </NuxtLink>

            <!-- Link with dropdown -->
            <div v-else class="hs-dropdown relative inline-flex [--trigger:hover]">
              <button type="button" class="hs-dropdown-toggle group flex items-center p-2.5 font-medium text-default-600 transition-all duration-300 hover:text-pink hover:decoration-current underline decoration-transparent underline-offset-3" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                {{ item.name }}
                <Icon icon="tabler:chevron-down" class="ms-3"></Icon>
              </button>

              <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 top-2.5! hidden w-80 rounded-xl border border-default-100 bg-linear-to-b from-default-100/90 to-default-100 p-1 opacity-0 transition-[opacity,margin] duration-300 before:absolute before:inset-s-0 before:-top-6 before:h-6 before:w-full after:absolute after:inset-s-0 after:-bottom-6 after:h-6 after:w-full" role="menu" aria-orientation="vertical">
                <div class="p-2.5 rounded-lg border border-default-200 bg-white">
                  <div class="space-y-1 max-h-[70vh] overflow-y-auto">
                    <NuxtLink
                      v-for="(subItem, subIdx) in item.children"
                      :key="subIdx"
                      :to="subItem.to!"
                      exact-active-class="active"
                      class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-600 hover:bg-primary/6 hover:text-pink [&.active]:bg-primary/6 [&.active]:text-pink"
                    >
                      {{ subItem.name }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="flex items-center justify-end gap-3 sm:gap-4">
          <!-- Currency Toggle: visible on desktop (lg+), hidden on mobile header (kept inside dropdown menu) -->
          <div class="hidden lg:flex items-center">
            <CurrencyToggle />
          </div>

          <!-- Book a Session CTA (desktop) -->
          <div class="md:flex items-center hidden">
            <NuxtLink to="/contact" class="group py-2.5 px-4.5 inline-flex items-center justify-center gap-5 rounded-lg bg-primary font-medium text-primary-ink transition-all">
              <span class="relative block overflow-hidden">
                <span class="block group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Book a Session
                </span>
                <span class="absolute top-7 inset-s-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Book a Session
                </span>
              </span>
            </NuxtLink>
          </div>

          <!-- Mobile Hamburger Toggle Button -->
          <div class="flex items-center lg:hidden">
            <button
              type="button"
              :aria-expanded="isMobileMenuOpen"
              aria-label="Toggle navigation menu"
              @click="toggleMobileMenu"
              class="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-ink font-medium shadow-2xs transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
            >
              <Icon :icon="isMobileMenuOpen ? 'tabler:x' : 'tabler:menu-2'" class="size-6 transition-transform duration-200"></Icon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown (glued directly underneath sticky header) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="border-t border-default-200/80 bg-body-bg/98 backdrop-blur-md shadow-2xl lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
      >
        <div class="container py-4 space-y-4">
          <nav class="flex flex-col divide-y divide-default-200/60">
            <template v-for="(item, idx) in menuItemData" :key="idx">
              <!-- Simple link -->
              <NuxtLink
                v-if="!item.children"
                :to="item.to!"
                exact-active-class="active"
                @click="closeMobileMenu"
                class="flex items-center justify-between py-3.5 px-2 font-medium text-default-700 transition-colors hover:text-pink [&.active]:text-pink [&.active]:font-semibold"
              >
                <span>{{ item.name }}</span>
                <Icon icon="tabler:arrow-up-right" class="size-4 text-default-400 group-hover:text-pink" />
              </NuxtLink>

              <!-- Services Accordion -->
              <div v-else class="py-1">
                <button
                  type="button"
                  @click="isServicesOpen = !isServicesOpen"
                  class="flex w-full items-center justify-between py-3.5 px-2 font-medium text-default-700 transition-colors hover:text-pink cursor-pointer"
                  :aria-expanded="isServicesOpen"
                >
                  <span :class="[isServicesOpen ? 'text-pink font-semibold' : '']">{{ item.name }}</span>
                  <Icon
                    icon="tabler:chevron-down"
                    :class="['size-4 text-default-400 transition-transform duration-200', isServicesOpen ? 'rotate-180 text-pink' : '']"
                  />
                </button>

                <div
                  v-show="isServicesOpen"
                  class="space-y-1 ps-3 pe-1 py-1.5 mb-2 bg-default-100/70 rounded-xl border border-default-200/50"
                >
                  <NuxtLink
                    v-for="(subItem, subIdx) in item.children"
                    :key="subIdx"
                    :to="subItem.to!"
                    exact-active-class="active"
                    @click="closeMobileMenu"
                    class="block rounded-lg px-3 py-2 text-xs font-medium text-default-600 transition-colors hover:bg-primary/10 hover:text-pink [&.active]:bg-primary/15 [&.active]:text-pink [&.active]:font-semibold"
                  >
                    {{ subItem.name }}
                  </NuxtLink>
                </div>
              </div>
            </template>
          </nav>

          <!-- Currency Selector Card inside Mobile Menu -->
          <div class="p-3.5 rounded-2xl bg-white border border-default-200/80 shadow-xs flex items-center justify-between gap-3">
            <div>
              <div class="text-xs font-semibold text-default-900">Currency</div>
              <div class="text-[0.68rem] text-default-500">Show prices in INR or USD</div>
            </div>
            <CurrencyToggle />
          </div>

          <!-- Book a Session CTA inside Mobile Menu -->
          <div class="pt-1">
            <NuxtLink
              to="/contact"
              @click="closeMobileMenu"
              class="w-full py-3 px-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary font-medium text-primary-ink shadow-sm transition-all hover:opacity-95"
            >
              <span>Book a Session</span>
              <Icon icon="tabler:arrow-right" class="size-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Backdrop -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-default-950/30 backdrop-blur-2xs z-40 lg:hidden"
        @click="closeMobileMenu"
        aria-hidden="true"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { NuxtLink } from '#components'
import { useRoute } from '#app'
import CurrencyToggle from '~/components/CurrencyToggle.vue'

type MenuItemType = {
  name: string
  to?: string
  children?: MenuItemType[]
}

const menuItemData: MenuItemType[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  {
    name: 'Services',
    children: [
      { name: 'Feeling Overwhelmed & Mentally Drained', to: '/service-detail/feeling-overwhelmed' },
      { name: 'Work Stress & Burnout', to: '/service-detail/work-stress-burnout' },
      { name: 'Breakup & Relationship Support', to: '/service-detail/breakup-relationship-support' },
      { name: 'Feeling Lonely / Having No One to Talk To', to: '/service-detail/feeling-lonely' },
      { name: 'Family Pressure & Expectations', to: '/service-detail/family-pressure' },
      { name: 'Career & Life Confusion', to: '/service-detail/career-life-confusion' },
      { name: 'Living Away from Home', to: '/service-detail/living-away-from-home' },
      { name: 'I Just Need Someone to Talk To', to: '/service-detail/someone-to-talk-to' },
      { name: 'The Strong One', to: '/service-detail/the-strong-one' }
    ]
  },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' }
]

const isMobileMenuOpen = ref(false)
const isServicesOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isServicesOpen.value = false
}

// Close on route navigation
const route = useRoute()
watch(() => route.fullPath, () => {
  closeMobileMenu()
})

// Lock background scroll when mobile menu is open
watch(isMobileMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

// Close on ESC key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>
