<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogStore } from '../stores/blogStore';
import { marked } from 'marked';

const blogStore = useBlogStore();
const route = useRoute();
const articleId = route.params.id as string;

onMounted(() => {
  blogStore.fetchArticleById(articleId);
});

const article = computed(() => blogStore.article);
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const processedContent = computed(() => {
  // Asegúrate de que el campo se llama 'contenido' con C mayúscula
  if (!article.value?.contenido) return '';

  const content = article.value.contenido;

  // Convierte el Markdown a HTML
  const rawHtml = marked(content) as string;

  // Reemplaza las rutas relativas de las imágenes en el HTML resultante
  // Esto es necesario si el editor de Markdown no guarda la URL completa
  return rawHtml.replace(/src="\/uploads\//g, `src="${STRAPI_URL}/uploads/`);
});

const formattedDate = computed(() => {
  if (!article.value?.fecha_publicacion) return '';
  return new Date(article.value.fecha_publicacion).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
});
</script>

<template>
  <div class="bg-dark py-20">
    <div v-if="blogStore.loading" class="text-center text-light">Cargando...</div>
    <div v-else-if="blogStore.error" class="text-center text-primary">{{ blogStore.error }}</div>
    <article v-else-if="article" class="container mx-auto px-6 max-w-4xl">
      <img v-if="article.imagen_portada" :src="`${STRAPI_URL}${article.imagen_portada.url}`" class="w-full h-96 object-cover rounded-xl mb-8" />
      
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-4">{{ article.titulo }}</h1>
      <div class="flex items-center text-subtle text-base mb-8">
        <span>Por {{ article.autor || 'GT3 Cars' }}</span>
        <span class="mx-2">•</span>
        <span>{{ formattedDate }}</span>
        <span v-if="article.categoria" class="mx-2">•</span>
        <span v-if="article.categoria" class="text-primary font-bold">{{ article.categoria.nombre }}</span>
      </div>

      <div class="prose prose-invert prose-lg max-w-none" v-html="processedContent"></div>
    </article>
  </div>
</template>