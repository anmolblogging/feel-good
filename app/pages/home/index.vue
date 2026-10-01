<template>
  <div class="py-20 text-center">
    <p>Redirecting to home...</p>
  </div>
</template>

<script setup lang="ts">
await navigateTo('/', { redirectCode: 301, replace: true })
</script>
