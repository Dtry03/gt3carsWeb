<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const imageUrl = computed(() => {
  return props.article.imagen_portada ? `${STRAPI_URL}${props.article.imagen_portada.url}` : 'https://via.placeholder.com/400x300';
});

// Formatear fecha
const formattedDate = computed(() => {
  if (!props.article.fecha_publicacion) return '';
  return new Date(props.article.fecha_publicacion).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
});
</script>

<template>
  <RouterLink :to="`/blog/${article.id}`" class="group block bg-medium rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
    <div class="h-56 overflow-hidden">
      <img :src="imageUrl" :alt="article.titulo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div class="p-6">
      <p v-if="article.categoria" class="text-primary font-bold text-sm uppercase mb-2">{{ article.categoria.nombre }}</p>
      <h3 class="text-2xl font-bold text-white leading-tight mb-4">{{ article.titulo }}</h3>
      <div class="flex items-center text-subtle text-sm">
        <span>Por {{ article.autor || 'GT3 Cars' }}</span>
        <span class="mx-2">•</span>
        <span>{{ formattedDate }}</span>
      </div>
    </div>
  </RouterLink>
</template>