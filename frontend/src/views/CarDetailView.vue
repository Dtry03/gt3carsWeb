<script setup lang="ts">
import { onMounted, computed,ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCarStore } from '../stores/carStore'
import ContactModal from '../components/ContactModal.vue'

const carStore = useCarStore()
const route = useRoute()

const isModalOpen = ref(false) // El estado que controla el modal



// Obtenemos el ID del coche desde los parámetros de la URL
const vehicleId = route.params.id as string

// Cuando el componente se carga, llamamos a la acción para buscar este coche específico
onMounted(() => {
  carStore.fetchVehicleById(vehicleId)
})

// Creamos una propiedad computada para acceder fácilmente al coche
const vehicle = computed(() => carStore.vehicle)
console.log('Datos del vehículo en la vista de detalle:', vehicle.value);
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div v-if="carStore.loading" class="text-center py-20">
      <p class="text-2xl font-semibold">Cargando detalles del vehículo...</p>
    </div>

    <div v-else-if="carStore.error" class="text-center py-20">
      <p class="text-2xl font-bold text-red-600">{{ carStore.error }}</p>
    </div>

    <div v-if="vehicle" class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <div class="mb-4 rounded-lg overflow-hidden shadow-lg">
          <img v-if="vehicle.imagenes?.[0]?.url" :src="`${STRAPI_URL}${vehicle.imagenes[0].url}`" class="w-full h-auto object-cover">
        </div>
        <div class="grid grid-cols-4 gap-2">
          <div v-for="img in vehicle.imagenes" :key="img.id" class="rounded overflow-hidden border-2 border-transparent hover:border-red-600 cursor-pointer">
            <img :src="`${STRAPI_URL}${img.formats.thumbnail.url}`" class="w-full h-full object-cover">
          </div>
        </div>
      </div>

      <div class="p-4">
        <h1 class="text-4xl md:text-5xl font-extrabold text-light">
          {{ vehicle.marca?.nombre }} {{ vehicle.modelo }}
        </h1>
        <p class="text-4xl font-black text-red-600 mt-4 mb-6">
          {{ (vehicle.precio || 0).toLocaleString('es-ES') }} €
        </p>

        <div class="grid grid-cols-2 gap-4 border-y border-gray-200 py-4">
          <div><span class="font-bold text-light">Año:</span> {{ vehicle.ano }}</div>
          <div><span class="font-bold text-light">Kilometraje:</span> {{ (vehicle.kilometraje || 0).toLocaleString('es-ES') }} km</div>
          <div><span class="font-bold text-light">Estado:</span> <span class="capitalize">{{ vehicle.estado }}</span></div>
        </div>

        <div class="prose max-w-none mt-6 text-light">
          <h3 class="text-xl font-bold mb-2">Descripción</h3>
          <div v-html="vehicle.descripcion"></div>
        </div>
          <button 
            @click="isModalOpen = true"
            class="mt-8 w-full bg-red-600 text-white text-lg font-bold py-4 rounded-lg hover:bg-red-800 transition-colors duration-300"
          >
            Solicitar Información
          </button>
      </div>
    </div>

       <ContactModal 
      v-if="isModalOpen" 
      :vehicle="vehicle"
      @close="isModalOpen = false"
    />
  </div>
</template>