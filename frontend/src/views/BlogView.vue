<script setup lang="ts">
import { onMounted } from 'vue';
import { useBlogStore } from '../stores/blogStore';
import ArticleCard from '../components/ArticleCard.vue';

const blogStore = useBlogStore();

onMounted(() => {
  blogStore.fetchArticles();
});
</script>

<template>
  <div class="bg-dark py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-white">Historias del Asfalto</h1>
        <p class="mt-4 text-lg text-subtle max-w-2xl mx-auto">Novedades, guías y la pasión por el motor que nos une.</p>
      </div>

      <div v-if="blogStore.loading">Cargando artículos...</div>
      <div v-else-if="blogStore.error" class="text-center text-primary">{{ blogStore.error }}</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard v-for="article in blogStore.articles" :key="article.id" :article="article" data-aos="fade-up" />
      </div>
    </div>
  </div>
</template>