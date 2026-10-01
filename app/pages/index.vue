<template>
  <!-- Order follows the client's recommended structure:
       Home → How TFGC Helps → Services → For Organisations → Resources.
       The 'Meet Kinjal' block (./components/About.vue) is hidden for now: the file
       is intact, so restoring it is one import plus one <About /> back in place.
       The supporting blocks (Why It Matters, Why Choose Us, Testimonials, Review
       Form) sit between those beats rather than interrupting the spine. -->
  <Hero />
  <MarqueeBand />
  <HowWeHelp />
  <WhyItMatters />
  <Services />
  <WhyChooseUs />
  <ForOrganisations />
  <Testimonials />
  <Resources />
  <ReviewForm />
  <CtaSection />
</template>

<script setup lang="ts">
import { usePageTitle } from '~/composables/usePageTitle'
import Hero from '~/pages/home/components/Hero.vue'
import HowWeHelp from '~/pages/home/components/HowWeHelp.vue'
import WhyItMatters from '~/pages/home/components/WhyItMatters.vue'
import Services from '~/pages/home/components/Services.vue'
import WhyChooseUs from '~/pages/home/components/WhyChooseUs.vue'
import ForOrganisations from '~/pages/home/components/ForOrganisations.vue'
import Testimonials from '~/pages/home/components/Testimonials.vue'
import Resources from '~/pages/home/components/Resources.vue'
import ReviewForm from '~/pages/home/components/ReviewForm.vue'
import MarqueeBand from '~/components/MarqueeBand.vue'
import CtaSection from '~/components/CtaSection.vue'

usePageTitle('Home')
</script>
