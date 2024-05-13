<template>
  <NuxtLayout>   
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: 'Ban hang nuxt',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

