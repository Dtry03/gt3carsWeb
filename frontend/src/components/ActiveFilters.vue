<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Propiedad computada que lee la URL y genera las "píldoras" de filtros
const activeFilters = computed(() => {
  const query = route.query
  const filters = []

  // --- AÑADIMOS LA LÓGICA PARA TODOS LOS FILTROS ---
  if (query.q) filters.push({ key: 'q', value: `Búsqueda: "${query.q}"` })
  if (query.marca) filters.push({ key: 'marca', value: `Marca: ${query.marca}` })
  if (query.precio_min) filters.push({ key: 'precio_min', value: `Desde: ${Number(query.precio_min).toLocaleString('es-ES')} €` })
  if (query.precio_max) filters.push({ key: 'precio_max', value: `Hasta: ${Number(query.precio_max).toLocaleString('es-ES')} €` })
  if (query.ano_min) filters.push({ key: 'ano_min', value: `Año desde: ${query.ano_min}` })
  if (query.ano_max) filters.push({ key: 'ano_max', value: `Año hasta: ${query.ano_max}` })
  if (query.km_max) filters.push({ key: 'km_max', value: `Max km: ${Number(query.km_max).toLocaleString('es-ES')}` })
  if (query.estado) filters.push({ key: 'estado', value: `Estado: ${query.estado}` })
  
  return filters
})

// Función para eliminar un filtro al hacer clic en la 'x'
function removeFilter(keyToRemove: string) {
  const newQuery = { ...route.query }
  delete newQuery[keyToRemove]
  router.push({ query: newQuery })
}

// Función para limpiar todos los filtros
function clearAllFilters() {
  router.push({ query: {} })
}
</script>

<template>
  <div v-if="activeFilters.length > 0" class="mb-8 p-4 bg-medium rounded-lg" data-aos="fade-in">
    <div class="flex items-center flex-wrap gap-3">
      <span class="font-semibold text-light text-sm mr-2">Filtros Activos:</span>
      <div 
        v-for="filter in activeFilters" 
        :key="filter.key"
        class="flex items-center bg-primary/20 text-primary text-sm font-bold pl-3 pr-2 py-1 rounded-full"
      >
        <span class="capitalize">{{ filter.value }}</span>
        <button @click="removeFilter(filter.key)" class="ml-2 text-primary hover:bg-primary/20 rounded-full w-5 h-5 flex items-center justify-center">
          &times;
        </button>
      </div>
      <button @click="clearAllFilters" class="ml-auto text-sm text-subtle hover:text-primary underline">
        Limpiar todo
      </button>
    </div>
  </div>
</template>