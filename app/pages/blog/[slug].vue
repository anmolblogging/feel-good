<template>
  <div v-if="post" class="overflow-hidden">
    <!-- Article Header & Body -->
    <article class="md:py-20 py-12">
      <div class="container max-w-4xl">
        <!-- Back Navigation -->
        <div class="mb-8">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 text-xs font-semibold text-default-600 hover:text-primary transition-colors duration-200"
          >
            <Icon icon="tabler:arrow-left" class="size-4" />
            <span>Back to all articles</span>
          </NuxtLink>
        </div>

        <!-- Meta & Title -->
        <header class="mb-10 text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-soft text-peach-ink text-xs font-medium mb-5">
            <span>{{ post.date }}</span>
            <span>&middot;</span>
            <span>{{ post.readTime }}</span>
          </div>

          <h1 class="h-display lg:text-5xl md:text-4xl text-3xl leading-[1.12] mb-6 text-default-950 font-medium">
            {{ post.title }}
          </h1>

          <p class="text-base sm:text-lg text-default-600 leading-relaxed font-normal">
            {{ post.excerpt }}
          </p>
        </header>

        <!-- Featured Hero Image -->
        <div class="mb-12 rounded-3xl overflow-hidden aspect-[16/9] bg-default-100 border border-default-200 shadow-sm">
          <img
            :src="post.image"
            :alt="post.title"
            class="size-full object-cover"
          />
        </div>

        <!-- Article Prose Content -->
        <div class="prose-content max-w-3xl mx-auto text-default-800 text-base sm:text-[17px] leading-relaxed">
          <template v-for="(block, bIdx) in post.content" :key="bIdx">
            <!-- Intro Block -->
            <div v-if="block.type === 'intro'" class="mb-8 text-lg font-medium text-default-900 border-l-2 border-primary pl-4 py-1 italic">
              {{ block.text }}
            </div>

            <!-- Quote Block -->
            <blockquote
              v-else-if="block.type === 'quote'"
              class="my-10 p-8 sm:p-10 rounded-2xl bg-peach-soft/80 border border-peach/40 text-peach-ink"
            >
              <p class="font-heading text-lg sm:text-2xl italic leading-snug mb-0">
                &ldquo;{{ block.quote }}&rdquo;
              </p>
            </blockquote>

            <!-- Section Block -->
            <div v-else-if="block.type === 'section'" class="mb-10">
              <h2
                v-if="block.heading"
                class="h-display text-2xl sm:text-3xl font-medium text-default-950 mt-10 mb-4"
              >
                {{ block.heading }}
              </h2>

              <p
                v-for="(paragraph, pIdx) in block.paragraphs"
                :key="pIdx"
                class="mb-4 text-default-700 leading-relaxed"
              >
                {{ paragraph }}
              </p>

              <ul
                v-if="block.list && block.list.length"
                class="list-disc list-inside space-y-2 my-5 pl-2 text-default-700 marker:text-primary"
              >
                <li v-for="(item, lIdx) in block.list" :key="lIdx" class="leading-relaxed">
                  {{ item }}
                </li>
              </ul>

              <p
                v-for="(postP, ppIdx) in block.postList"
                :key="'post-' + ppIdx"
                class="mb-4 text-default-700 leading-relaxed"
              >
                {{ postP }}
              </p>
            </div>
          </template>
        </div>

        <!-- Embedded Call to Action Card -->
        <div class="mt-14 max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-cream border border-peach/40 text-center relative overflow-hidden shadow-2xs">
          <div class="aura animate-breathe size-60 -bottom-20 -end-10 bg-peach/20 pointer-events-none"></div>

          <h3 class="h-display text-2xl sm:text-3xl mb-3 text-default-950 font-medium">
            Need a quiet space to talk it through?
          </h3>
          <p class="text-sm sm:text-base text-default-600 max-w-[50ch] mx-auto mb-6 leading-relaxed">
            No judgment, no unsolicited advice, and no need to have it all figured out. Just a confidential hour with Kinjal Shah to say the whole thing.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              @click="bookingOpen = true"
              class="btn-primary btn-fill py-3 px-6 rounded-xl font-medium text-sm inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book a Listening Session</span>
              <Icon icon="tabler:arrow-right" class="size-4" />
            </button>

            <a
              href="https://wa.me/917400097501"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline py-2.5 px-5 rounded-xl font-medium text-sm inline-flex items-center gap-2"
            >
              <Icon icon="tabler:brand-whatsapp" class="size-4 text-emerald-600" />
              <span>WhatsApp Kinjal</span>
            </a>
          </div>
        </div>

      </div>
    </article>

    <!-- Related Articles Section -->
    <section v-if="relatedPosts.length" class="py-16 border-t border-default-200/80 bg-default-50/60">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-10">
          <h2 class="h-display text-3xl sm:text-4xl text-default-950 font-medium mb-2">
            Related Reflections
          </h2>
          <p class="text-sm text-default-600">
            More perspectives on listening, emotional hygiene, and wellbeing.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <article
            v-for="rel in relatedPosts"
            :key="rel.slug"
            class="relative rounded-2xl overflow-hidden group bg-white border border-default-200/80 p-2.5 flex flex-col hover:border-peach/50 transition-all duration-300 shadow-2xs"
          >
            <NuxtLink :to="`/blog/${rel.slug}`" class="absolute inset-0 z-10" :aria-label="rel.title"></NuxtLink>

            <div class="overflow-hidden rounded-xl aspect-[16/10] bg-default-100">
              <img :src="rel.image" :alt="rel.title" class="size-full object-cover group-hover:scale-105 transition-all duration-500" loading="lazy">
            </div>

            <div class="flex flex-1 flex-col gap-3 p-4">
              <div class="flex items-center gap-2 text-xs text-default-500">
                <span>{{ rel.date }}</span>
                <span>&middot;</span>
                <span>{{ rel.readTime }}</span>
              </div>

              <h4 class="text-base h-display font-medium leading-snug group-hover:text-primary transition-colors duration-200">
                {{ rel.title }}
              </h4>

              <p class="text-xs text-default-600 line-clamp-2 leading-relaxed">
                {{ rel.excerpt }}
              </p>

              <div class="mt-auto pt-3 border-t border-default-100 flex items-center justify-between text-xs font-semibold text-default-900 group-hover:text-primary transition-colors">
                <span>Read Article</span>
                <Icon icon="tabler:arrow-narrow-right" class="size-3.5 -rotate-45 group-hover:rotate-0 transition duration-300" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Booking Modal -->
    <BookingModal :open="bookingOpen" :service="null" @close="bookingOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute } from '#app'
import { findBlogBySlug, getRelatedBlogs } from '~/data/blogs'
import BookingModal from '~/components/BookingModal.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const post = computed(() => {
  const item = findBlogBySlug(slug.value)
  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
  }
  return item
})

const relatedPosts = computed(() => getRelatedBlogs(slug.value, 3))
const bookingOpen = ref(false)

usePageTitle(computed(() => post.value.title))

useHead({
  title: computed(() => `${post.value.title} | The Feel Good Centre`),
  meta: [
    { name: 'description', content: computed(() => post.value.excerpt) },
    { property: 'og:title', content: computed(() => post.value.title) },
    { property: 'og:description', content: computed(() => post.value.excerpt) },
    { property: 'og:image', content: computed(() => post.value.image) },
    { property: 'og:type', content: 'article' }
  ]
})
</script>
