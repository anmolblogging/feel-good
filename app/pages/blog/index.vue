<template>
     <section class="relative size-full overflow-hidden md:py-20 py-12">
        <div class="container">
            <div class="mb-12.5 text-center">
                <h1 class="h-display lg:text-[64px] md:text-5xl text-[38px] leading-[1.08] mb-5">Discover Your Path to Wellbeing</h1>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-7.5">
                <!-- Card Loop -->
                <article v-for="post in blogPosts" :key="post.slug" class="relative rounded-2xl overflow-hidden group bg-default-100/70 border border-default-200/80 p-2.5 flex flex-col hover:border-peach/50 transition-all duration-300">
                    <NuxtLink :to="`/blog/${post.slug}`" class="absolute inset-0 z-10" :aria-label="post.title"></NuxtLink>

                    <div class="overflow-hidden rounded-xl aspect-[16/10] bg-default-200">
                        <img :src="post.image" :alt="post.title" class="size-full object-cover group-hover:scale-105 transition-all duration-500" loading="lazy">
                    </div>

                    <div class="flex flex-1 flex-col gap-4 p-4">
                        <div>
                            <div class="flex items-center gap-2 text-xs text-default-500 mb-2.5">
                                <span>{{ post.date }}</span>
                                <span>&middot;</span>
                                <span>{{ post.readTime }}</span>
                            </div>

                            <h2 class="mb-2 text-lg h-display font-medium leading-snug group-hover:text-primary transition-colors duration-200">{{ post.title }}</h2>

                            <p class="text-sm text-default-600 line-clamp-3 leading-relaxed">{{ post.excerpt }}</p>
                        </div>

                        <div class="mt-auto pt-3 border-t border-default-200/60 flex items-center justify-between text-xs font-semibold text-default-900 group-hover:text-primary transition-colors">
                            <span>Read Article</span>
                            <Icon icon="tabler:arrow-narrow-right" class="size-4 -rotate-45 group-hover:rotate-0 transition duration-300" />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components'
import { Icon } from '@iconify/vue'
import { blogPosts } from '~/data/blogs'

usePageTitle('Blog | The Feel Good Centre')
useHead({
  title: 'Blog | The Feel Good Centre',
  meta: [
    {
      name: 'description',
      content: 'Reflections, insights, and heartfelt thoughts on listening, emotional hygiene, workplace wellness, and healing.'
    }
  ]
})
</script>
