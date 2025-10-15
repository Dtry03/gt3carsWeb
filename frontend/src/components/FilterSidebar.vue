<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router' // <-- 1. Importa useRoute
import { useCarStore } from '../stores/carStore'
import { debounce } from 'lodash-es'

const emit = defineEmits(['filters-changed'])
const carStore = useCarStore()
const route = useRoute() // <-- 2. Obtén el objeto de la ruta

interface FilterState {
  marca: string;
  precio_min: number | null;
  precio_max: number | null;
  ano_min: number | null;
  ano_max: number | null;
  km_max: number | null;
  estado: string;
}

const initialFilters: FilterState = {
  marca: '',
  precio_min: null,
  precio_max: null,
  ano_min: null,
  ano_max: null,
  km_max: null,
  estado: '',
}


const filters = ref({ ...initialFilters })

onMounted(() => {
  carStore.fetchMarcas()
})

// ESTE 'WATCH' EMITE LOS CAMBIOS HACIA AFUERA
const applyFilters = debounce((newFilters) => {
  emit('filters-changed', newFilters)
}, 500)

watch(filters, applyFilters, { deep: true })

// --- 3. NUEVO 'WATCH': ACTUALIZA EL ESTADO INTERNO DESDE LA URL ---
watch(() => route.query, (newQuery) => {
  filters.value.marca = (newQuery.marca as string) || ''
  filters.value.precio_min = newQuery.precio_min ? Number(newQuery.precio_min) : null
  filters.value.precio_max = newQuery.precio_max ? Number(newQuery.precio_max) : null
  filters.value.ano_min = newQuery.ano_min ? Number(newQuery.ano_min) : null
  filters.value.ano_max = newQuery.ano_max ? Number(newQuery.ano_max) : null
  filters.value.km_max = newQuery.km_max ? Number(newQuery.km_max) : null
  filters.value.estado = (newQuery.estado as string) || ''
}, { immediate: true }) // 'immediate: true' asegura que se sincronice al cargar la página

function reset() {
  // Ahora el reset simplemente limpia la URL, y el watch de arriba se encargará de limpiar los campos
  emit('filters-changed', {})
}
</script>

<template>
  <aside class="bg-medium p-6 rounded-xl shadow-lg sticky top-28">
    <h3 class="text-2xl font-bold text-white mb-6">Filtros</h3>
    
    <div class="space-y-6">
      <div>
        <label for="marca" class="block text-subtle font-semibold mb-2">Marca</label>
        <select id="marca" v-model="filters.marca" class="w-full bg-dark border border-gray-700 rounded-lg py-2 px-4 text-light focus:outline-none focus:border-primary">
          <option value="">Todas</option>
          <option v-for="marca in carStore.marcas" :key="marca.id" :value="marca.nombre">
            {{ marca.nombre }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-subtle font-semibold mb-2">Precio (€)</label>
        <div class="flex items-center gap-4">
          <input type="number" v-model.number="filters.precio_min" placeholder="Mín" class="w-full bg-dark border border-gray-700 rounded-lg py-2 px-4 text-light focus:outline-none focus:border-primary">
          <span class="text-subtle">-</span>
          <input type="number" v-model.number="filters.precio_max" placeholder="Máx" class="w-full bg-dark border border-gray-700 rounded-lg py-2 px-4 text-light focus:outline-none focus:border-primary">
        </div>
      </div>
      
      <div>
        <label class="block text-subtle font-semibold mb-2">Año</label>
        <div class="flex items-center gap-4">
          <input type="number" v-model.number="filters.ano_min" placeholder="Desde" class="w-full bg-dark border border-gray-700 rounded-lg py-2 px-4 text-light focus:outline-none focus:border-primary">
          <span class="text-subtle">-</span>
          <input type="number" v-model.number="filters.ano_max" placeholder="Hasta" class="w-full bg-dark border border-gray-700 rounded-lg py-2 px-4 text-light focus:outline-none focus:border-primary">
        </div>
      </div>

      <div>
        <label for="km_max" class="block text-subtle font-semibold mb-2">Kilometraje máximo</label>
        <input type="number" id="km_max" v-model.number="filters.km_max" placeholder="Ej: 50000" class="w-full bg-dark border border-gray-700 rounded-lg py-2 px-4 text-light focus:outline-none focus:border-primary">
      </div>

      <div>
        <label for="estado" class="block text-subtle font-semibold mb-2">Estado</label>
        <select id="estado" v-model="filters.estado" class="w-full bg-dark border border-gray-700 rounded-lg py-2 px-4 text-light focus:outline-none focus:border-primary">
          <option value="">Todos</option>
          <option value="disponible">Disponible</option>
          <option value="vendido">Vendido</option>
        </select>
      </div>
      
      <div class="pt-4 border-t border-gray-700">
        <button @click="reset" class="w-full bg-gray-700 text-light font-bold py-3 rounded-lg hover:bg-gray-600 transition-colors">Limpiar Filtros</button>
      </div>
    </div>
  </aside>
</template>