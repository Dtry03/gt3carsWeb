<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCarStore } from '../stores/carStore'
import CarCard from '../components/CarCard.vue'
import FilterSidebar from '../components/FilterSidebar.vue'
import ActiveFilters from '../components/ActiveFilters.vue'

const carStore = useCarStore()
const route = useRoute()
const router = useRouter()

// --- ESTA ES LA FUNCIÓN QUE FALTABA ---
function buildStrapiFilters(query: any) {
  const strapiFilters: any = {
    $and: [],
  }

  if (query.q) {
    const searchQuery = query.q;
    strapiFilters.$and.push({
      $or: [
        { modelo: { $containsi: searchQuery } },
        { marca: { nombre: { $containsi: searchQuery } } },
      ],
    });
  }

  // Ahora que es un dropdown, buscamos coincidencia exacta ($eq)
  if (query.marca) {
    strapiFilters.$and.push({ marca: { nombre: { $eq: query.marca } } })
  }
  
  if (query.precio_min || query.precio_max) {
    const precioFilter: any = {}
    if (query.precio_min) precioFilter.$gte = query.precio_min
    if (query.precio_max) precioFilter.$lte = query.precio_max
    strapiFilters.$and.push({ precio: precioFilter })
  }

  if (query.ano_min || query.ano_max) {
    const anoFilter: any = {}
    if (query.ano_min) anoFilter.$gte = query.ano_min
    if (query.ano_max) anoFilter.$lte = query.ano_max
    strapiFilters.$and.push({ ano: anoFilter })
  }

  if (query.km_max) {
    strapiFilters.$and.push({ kilometraje: { $lte: query.km_max } })
  }
  
  if (query.estado) {
    strapiFilters.$and.push({ estado: { $eq: query.estado } })
  }
  
  if (strapiFilters.$and.length === 0) {
    return {}
  }
  
  return strapiFilters
}
// ------------------------------------

function handleFiltersChanged(newFilters: any) {
  const cleanQuery: any = {}
  for (const key in newFilters) {
    if (newFilters[key] !== '' && newFilters[key] !== null && newFilters[key] !== undefined) {
      cleanQuery[key] = newFilters[key]
    }
  }
  router.push({ query: cleanQuery })
}

watch(() => route.query, (newQuery) => {
  const filtersForStrapi = buildStrapiFilters(newQuery)
  carStore.fetchVehicles(filtersForStrapi)
}, { immediate: true })

</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-5xl font-extrabold text-white mb-8">
      Nuestro <span class="text-primary">Catálogo</span>
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
      <div class="lg:col-span-1">
        <FilterSidebar @filters-changed="handleFiltersChanged" />
      </div>

      <div class="lg:col-span-3">
        <ActiveFilters />

        <div v-if="carStore.loading">Cargando...</div>
        <div v-else-if="carStore.error">{{ carStore.error }}</div>
        <div v-else-if="carStore.vehicles.length > 0" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <CarCard 
            v-for="vehicle in carStore.vehicles" 
            :key="vehicle.id" 
            :vehicle="vehicle" 
          />
        </div>
        <div v-else>No se encontraron vehículos.</div>
      </div>
    </div>
  </div>
</template>