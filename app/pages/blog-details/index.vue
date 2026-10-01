<template>
  <div class="py-20 text-center">
    <p>Redirecting to blog...</p>
  </div>
</template>

<script lang="ts" setup>
await navigateTo('/blog', { redirectCode: 301 })
</script>

