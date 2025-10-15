<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import carService from '../services/carService'

const props = defineProps({
  vehicle: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

function goToDetail(id: number) {
  if (id) {
    router.push(`/coche/${id}`)
  }
}

// Propiedades computadas para limpiar el template
const brandName = computed(() => props.vehicle?.marca?.nombre || 'Marca Desconocida')
const imageUrl = computed(() => carService.getImageUrl(props.vehicle?.imagenes))
const formattedPrice = computed(() => (props.vehicle?.precio || 0).toLocaleString('es-ES'))

</script>

<template>
  <div 
    v-if="vehicle" 
    @click="goToDetail(vehicle.id)" 
    class="group relative h-full w-full cursor-pointer overflow-hidden rounded-xl shadow-lg"
  >
    <img 
      :src="imageUrl" 
      :alt="`${brandName} ${vehicle.modelo}`" 
      class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    
    <div 
      class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 
             opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
    >
      <div>
        <h3 class="text-2xl font-extrabold text-white leading-tight">
          {{ brandName }} {{ vehicle.modelo }}
        </h3>
        <p class="text-3xl font-black text-primary mt-2">
          {{ formattedPrice }} €
        </p>
      </div>
      
      <button 
        class="mt-4 w-full bg-white text-dark px-5 py-3 rounded-lg text-base font-bold 
               hover:bg-primary hover:text-white transition-all duration-300 transform translate-y-4 
               group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-100"
      >
        Ver Detalles
      </button>
    </div>
  </div>
</template>