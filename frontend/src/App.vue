<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-dark text-light">
    <TheNavbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>