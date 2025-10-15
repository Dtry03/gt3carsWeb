<script setup lang="ts">
import { ref, watch } from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

const apiKey = ref(import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string)
const businessName = "GT3 Cars"
const address = "Av. de la Cemba, 111, 24403 Ponferrada, León"
const center = ref({ lat: 42.5500724, lng: -6.6216072 })

// 1. Creamos referencias para cada componente del mapa
const mapRef = ref<typeof GoogleMap | null>(null)
const markerRef = ref<typeof Marker | null>(null)
const infoWindowRef = ref<typeof InfoWindow | null>(null)

// 2. Usamos 'watch' para espiar cuando el mapa y el marcador estén listos
watch([mapRef, markerRef], ([map, marker]) => {
  // Cuando ambos (mapa y marcador) tengan un valor...
  if (map && marker) {
    // ...abrimos la ventana manualmente.
    // .value.infoWindow es el objeto nativo de Google Maps
    infoWindowRef.value?.infoWindow.open(map.map, marker.marker)
  }
}, { immediate: true }) // 'immediate' intenta ejecutarlo una vez al inicio

// --- NUEVO ESTILO DE MAPA MÁS DETALLADO ---
// Estilo "Midnight Commander" de Snazzy Maps, adaptado para ser legible
const mapStyles = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#ffffff" }]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#000000" }, { "lightness": 13 }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#000000" }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{ "color": "#08304b" }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#000000" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#000000" }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{ "color": "#000000" }]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{ "color": "#146474" }]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{ "color": "#021019" }]
  }
]
</script>

<template>
  <GoogleMap
    ref="mapRef"
    :api-key="apiKey"
    class="w-full h-full"
    :center="center"
    :zoom="15"
    :disable-default-ui="true"
    :styles="mapStyles"
  >
    <Marker ref="markerRef" :options="{ position: center }">
      <InfoWindow ref="infoWindowRef" :options="{ maxWidth: 250 }">
        <div class="p-2 text-gray-900">
          <h3 class="font-bold text-lg text-primary">{{ businessName }}</h3>
          <p class="mt-1">{{ address }}</p>
          <a 
            :href="`https://www.google.com/maps/search/?api=1&query=${encodeURI(address)}`" 
            target="_blank" 
            class="text-blue-600 font-semibold hover:underline mt-2 inline-block"
          >
            Cómo llegar
          </a>
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
</template>