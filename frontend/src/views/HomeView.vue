<script setup lang="ts">
// ... (tu script no necesita cambios)
import { onMounted, computed } from 'vue'
import { useCarStore } from '../stores/carStore'
import { useBlogStore } from '../stores/blogStore'
import CarCard from '../components/CarCard.vue'
import { RouterLink } from 'vue-router'
import ArticleCard from '../components/ArticleCard.vue' 
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Autoplay, Navigation, Pagination,EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
const router = useRouter()
const searchQuery = ref('')
const blogStore = useBlogStore() 
function performSearch() {
  if (searchQuery.value.trim()) {
    router.push(`/coches?q=${searchQuery.value.trim()}`)
  } else {
    router.push('/coches')
  }
}
const carStore = useCarStore()

onMounted(() => {
  carStore.fetchVehicles()
   blogStore.fetchArticles()
})

const featuredVehicles = computed(() => carStore.vehicles.slice(0, 3))
const recentArticles = computed(() => blogStore.articles.slice(0, 3)) 

const gridLayoutClasses = [
  'md:col-span-2 md:row-span-2', // La 1ª tarjeta será la más grande (2x2)
  'md:col-span-1',              // La 2ª tarjeta (1x1)
  'md:col-span-1',              // La 3ª tarjeta (1x1)
]

const staticTestimonials = [
  { id: 1, nombre_cliente: 'Alejandro V.', ubicacion: 'Valencia', cita: 'Una experiencia de compra inmejorable. El nivel de detalle y profesionalidad es algo que no se encuentra fácilmente.', inicial: 'A', rating: 5 },
  { id: 2, nombre_cliente: 'Beatriz L.', ubicacion: 'Bilbao', cita: 'El coche estaba en un estado impecable, tal y como lo describieron. La transparencia durante todo el proceso fue total.', inicial: 'B', rating: 5 },
  { id: 3, nombre_cliente: 'Carlos S.', ubicacion: 'Madrid', cita: 'Profesionalidad y pasión en cada detalle. Encontraron el GT3 exacto que buscaba y la entrega fue perfecta.', inicial: 'C', rating: 5 },
  { id: 4, nombre_cliente: 'David R.', ubicacion: 'Sevilla', cita: 'Más que un concesionario, son verdaderos entusiastas. Entienden perfectamente lo que buscas en un coche de altas prestaciones.', inicial: 'D', rating: 5 },
  { id: 5, nombre_cliente: 'Elena F.', ubicacion: 'Zaragoza', cita: 'La selección de vehículos es simplemente de otro nivel. Si buscas algo exclusivo, este es el sitio.', inicial: 'E', rating: 4 },
  { id: 6, nombre_cliente: 'Fernando M.', ubicacion: 'Málaga', cita: 'El trato personalizado marca la diferencia. Se nota que aman lo que hacen y eso se transmite en el servicio.', inicial: 'F', rating: 5 },
  { id: 7, nombre_cliente: 'Gloria P.', ubicacion: 'Murcia', cita: 'Resolvieron todas mis dudas con paciencia y conocimiento. La confianza que transmiten es total.', inicial: 'G', rating: 5 },
  { id: 8, nombre_cliente: 'Hugo N.', ubicacion: 'Palma de Mallorca', cita: 'El proceso de tasación y venta de mi antiguo coche fue rápido y muy justo. Totalmente recomendables.', inicial: 'H', rating: 4 },
  { id: 9, nombre_cliente: 'Irene G.', ubicacion: 'Las Palmas', cita: 'Una atención al cliente espectacular de principio a fin. Sin duda, mi referencia para futuros deportivos.', inicial: 'I', rating: 5 },
]


const swiperModules = [Autoplay, Navigation, Pagination, EffectFade]
</script>

<template>
  <div>
    <section class="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
  
  <div class="absolute top-0 left-0 w-full h-full z-0">
    <video 
      autoplay 
      loop 
      muted 
      playsinline 
      class="w-full h-full object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4">
      Tu navegador no soporta el vídeo.
    </video>
  </div>
  
  <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  
  <div class="relative z-10 p-4">
    <h1 data-aos="fade-up" class="text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
      La Pura Esencia del motor
    </h1>
    <p data-aos="fade-up" data-aos-delay="200" class="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
      Encuentra, compra y vende los coches más exclusivos del mercado.
    </p>
<form @submit.prevent="performSearch" class="mt-8 flex justify-center max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
      <input 
        type="text" 
        v-model="searchQuery"
        placeholder="Ej: Porsche 911 GT3"
        class="w-full px-6 py-4 rounded-l-lg border-none text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
      >
      <button 
        type="submit"
        class="bg-primary text-white px-8 py-4 rounded-r-lg font-bold text-lg uppercase hover:bg-primary-dark transition-colors"
      >
        Buscar
      </button>
    </form>
  </div>
</section>

<section class="bg-medium py-20">
      <div class="container mx-auto px-6">

        <div class="text-center mb-16">
          <h2 data-aos="fade-up" class="text-4xl font-extrabold text-white">
            Más Allá de la Conducción
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" class="mt-4 text-lg text-subtle max-w-2xl mx-auto">
            En GT3 Cars, cada vehículo representa nuestro compromiso con la excelencia, la pasión y la confianza.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div data-aos="fade-up" data-aos-delay="200" class="flex flex-col items-center">
            <div class="p-5 rounded-full bg-dark mb-4">
              <svg class="w-10 h-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9m9 9a9 9 0 0 1-9 9m-9-9h18" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9m-9 9a9 9 0 0 0 9 9m9-9h-18" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9m9 9a9 9 0 0 1-9 9m-9-9h18" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9m-9 9a9 9 0 0 1 9-9m9 9a9 9 0 0 1-9 9m-9-9h18" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Inventario Exclusivo</h3>
            <p class="text-subtle">Solo vehículos seleccionados por su historial y condición impecable.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" class="flex flex-col items-center">
            <div class="p-5 rounded-full bg-dark mb-4">
              <svg class="w-10 h-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Garantía Total GT3</h3>
            <p class="text-subtle">Cada coche incluye 12 meses de garantía completa sin coste adicional.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" class="flex flex-col items-center">
            <div class="p-5 rounded-full bg-dark mb-4">
              <svg class="w-10 h-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Asesoramiento Experto</h3>
            <p class="text-subtle">Trato directo con entusiastas que entienden tu pasión por el motor.</p>
          </div>

        </div>
      </div>
    </section>
    <section class="bg-dark py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 data-aos="fade-up" class="text-4xl font-extrabold text-white">
            Servicios <span class="text-primary">Exclusivos</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" class="mt-4 text-lg text-subtle max-w-2xl mx-auto">
            Cuidamos cada detalle de tu pasión. Descubre nuestros servicios de taller y detailing de alta gama.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div data-aos="fade-up" data-aos-delay="200">
            <RouterLink to="/taller" class="group relative block h-96 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/taller-bg.jpg" alt="Taller Mecánico GT3 Cars" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 class="text-3xl font-extrabold">Taller de Alto Rendimiento</h3>
                <p class="mt-2 text-gray-300">Mantenimiento, reparación y potenciación por manos expertas.</p>
                <div class="mt-4 font-semibold text-primary flex items-center group-hover:underline">
                  Saber más
                  <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </RouterLink>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <RouterLink to="/detailing" class="group relative block h-96 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/detailing-bg.jpg" alt="Detailing Profesional GT3 Cars" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 class="text-3xl font-extrabold">Detailing Profesional</h3>
                <p class="mt-2 text-gray-300">Devolvemos el brillo y la perfección a cada centímetro de tu coche.</p>
                <div class="mt-4 font-semibold text-primary flex items-center group-hover:underline">
                  Saber más
                  <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

 <section class="bg-medium py-20">
      <div class="container mx-auto px-6">
        <h2 data-aos="fade-up" class="text-4xl font-extrabold text-center text-light mb-12">
          Nuestra <span class="text-red-600">Selección</span>
        </h2>
        
        <div v-if="carStore.loading" class="text-center">Cargando...</div>

        <div v-else-if="featuredVehicles.length > 0" 
             class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 group/gallery">
          
          <div 
            v-for="(vehicle, index) in featuredVehicles"
            :key="vehicle.id"
            :class="gridLayoutClasses[index]"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
            class="gallery-item transition-all duration-500 ease-in-out"
          >
            <CarCard :vehicle="vehicle" class="h-full" />
          </div>
        </div>

        <div v-else class="text-center">No hay vehículos destacados.</div>
      </div>
    </section>

  <section class="bg-dark py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 data-aos="fade-up" class="text-4xl font-extrabold text-white">
            Una Experiencia <span class="text-primary">Insuperable</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" class="mt-4 text-lg text-subtle max-w-2xl mx-auto">
            Desde la selección hasta la entrega, cada paso está diseñado para tu total tranquilidad y satisfacción.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div data-aos="fade-up" data-aos-delay="100" 
               class="group bg-dark rounded-xl p-8 border border-transparent hover:border-primary 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div class="mb-5">
              <svg class="w-12 h-12 text-primary group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Selección Exclusiva</h3>
            <p class="text-subtle">Explora un catálogo único, curado por y para verdaderos entusiastas del motor.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" 
               class="group bg-dark rounded-xl p-8 border border-transparent hover:border-primary 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div class="mb-5">
              <svg class="w-12 h-12 text-primary group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Inspección y Garantía</h3>
            <p class="text-subtle">Cada vehículo supera una rigurosa inspección de 150 puntos para asegurar su perfecto estado.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="500" 
               class="group bg-dark rounded-xl p-8 border border-transparent hover:border-primary 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div class="mb-5">
              <svg class="w-12 h-12 text-primary group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875M15.75 8.25v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 4.5v1.875m9.375 3.75-3-3m0 0-3 3m3-3v11.25m-6-2.25h.008v.008H9.75v-.008Z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Entrega Personalizada</h3>
            <p class="text-subtle">Recibe tu coche en tu domicilio o donde prefieras, con un servicio adaptado a tus necesidades.</p>
          </div>
        </div>
      </div>
    </section>
 <section class="bg-medium py-24" data-aos="fade-up" 
      data-aos-duration="1000">
      <div class="container mx-auto px-6 text-center mb-16">
        <h2 data-aos="fade-up" class="text-4xl font-extrabold text-white">
          La Confianza de <span class="text-primary">Nuestra Comunidad</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" class="mt-4 text-lg text-subtle max-w-2xl mx-auto">
          La pasión por la excelencia nos une. Esto es lo que dicen quienes ya forman parte de la familia GT3 Cars.
        </p>
      </div>
      
      <div class=" container mx-auto ">
        <Swiper
          :modules="swiperModules"
          :slides-per-view="3"
          :space-between="40"
          :centered-slides="true"
          :loop="true"
          :navigation="true"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }"
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="testimonial in staticTestimonials" :key="testimonial.id">
            <div class="bg-dark p-8 rounded-xl shadow-lg flex flex-col h-full text-left transition-transform duration-300 transform hover:scale-105">
              <div class="flex items-center mb-4">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= testimonial.rating ? 'text-amber-400' : 'text-gray-600'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <blockquote class="text-light text-base italic flex-grow mb-6">
                "{{ testimonial.cita }}"
              </blockquote>

              <div class="mt-auto pt-6 border-t border-medium flex items-center">
                <div class="w-12 h-12 rounded-full bg-dark flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-xl font-bold text-primary">{{ testimonial.inicial }}</span>
                </div>
                <div>
                  <p class="font-bold text-white text-base">{{ testimonial.nombre_cliente }}</p>
                  <p class="text-subtle text-sm">{{ testimonial.ubicacion }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="bg-dark py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 data-aos="fade-up" class="text-4xl font-extrabold text-white">
            Historias del <span class="text-primary">Asfalto</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" class="mt-4 text-lg text-subtle max-w-2xl mx-auto">
            Las últimas novedades, guías y relatos del mundo del motor, directamente desde nuestro equipo de expertos.
          </p>
        </div>

        <div v-if="blogStore.loading" class="text-center text-light">Cargando artículos...</div>
        <div v-else-if="recentArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard 
            v-for="(article, index) in recentArticles" 
            :key="article.id" 
            :article="article" 
            data-aos="fade-up" 
            :data-aos-delay="index * 150"
          />
        </div>

        <div class="text-center mt-16" data-aos="fade-up">
          <RouterLink 
            to="/blog"
            class="inline-block bg-primary text-white px-10 py-3 rounded-lg font-bold text-lg uppercase 
                   hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Todo el Blog
          </RouterLink>
        </div>
      </div>
    </section>
<section class="bg-medium py-24 relative overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center -z-0" aria-hidden="true">
        <span class="text-[20rem] font-extrabold text-white/5">
          GT3
        </span>
      </div>

      <div class="relative z-10 container mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Un Equipo de Apasionados a tu Servicio
          </h2>
          <p class="mt-4 text-lg text-subtle max-w-2xl mx-auto">
            No somos solo vendedores, somos entusiastas. Contacta con nuestros expertos para un asesoramiento personalizado y sin compromiso.
          </p>
        </div>
        
        <div class="mt-12 flex flex-col md:flex-row justify-center items-center gap-6" data-aos="fade-up" data-aos-delay="200">
          <div class="bg-medium border border-white/10 rounded-lg p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <svg class="w-8 h-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <div class="text-left">
              <h4 class="text-subtle text-sm">Llámanos</h4>
              <p class="text-light text-xl font-bold">+34 123 456 789</p>
            </div>
          </div>
          <div class="bg-medium border border-white/10 rounded-lg p-6 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <svg class="w-8 h-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <div class="text-left">
              <h4 class="text-subtle text-sm">Escríbenos</h4>
              <p class="text-light text-xl font-bold">contacto@gt3cars.com</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" class="mt-10">
          <RouterLink 
            to="/contacto" 
            class="inline-block bg-primary text-white px-10 py-3 rounded-lg font-bold text-lg uppercase 
                   hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            O usa nuestro formulario
          </RouterLink>
        </div>
      </div>
    </section>

<section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <swiper
          :modules="[Autoplay, EffectFade]" :slides-per-view="1"
          :loop="true"
          :speed="1500" :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :effect="'fade'" :fadeEffect="{ crossFade: true }" class="w-full h-full"
        >
          <swiper-slide>
            <img src="/img/cta-bg-1.jpg" alt="Coche deportivo de fondo 1" class="w-full h-full object-cover" />
          </swiper-slide>
          <swiper-slide>
            <img src="/img/cta-bg-2.jpg" alt="Coche deportivo de fondo 2" class="w-full h-full object-cover" />
          </swiper-slide>
          <swiper-slide>
            <img src="/img/cta-bg-3.jpg" alt="Coche deportivo de fondo 3" class="w-full h-full object-cover" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      <div class="relative z-20 container mx-auto px-6 text-center text-white">
        <h2 data-aos="fade-up" class="text-4xl md:text-5xl font-extrabold">
          Tu Próximo Coche Te Espera
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Explora nuestro catálogo completo y encuentra la pieza que falta en tu garaje.
        </p>
        <RouterLink
          to="/coches"
          data-aos="fade-up" data-aos-delay="400"
          class="mt-8 inline-block bg-primary text-white px-12 py-4 rounded-lg font-bold text-lg uppercase
                 hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Ver Catálogo Completo
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<style>

.testimonial-swiper {
  /* Añadimos padding a los lados para que las tarjetas no se corten */
  padding-left: 10px !important;
  padding-right: 10px !important;
  padding-top: 20px !important;
  padding-bottom: 50px !important;
}

/* Nueva posición para las flechas (más separadas) */
.testimonial-swiper .swiper-button-next,
.testimonial-swiper .swiper-button-prev {
  color: var(--tw-colors-primary); /* Usa tu color rojo de marca */
  top: 45%; /* Ajustamos la altura vertical */
  transform: scale(1.2); /* Las hacemos un poco más grandes para que sean más visibles */
}

/* Estilo para los puntos de paginación (sin cambios) */
.testimonial-swiper .swiper-pagination-bullet {
  background-color: var(--tw-colors-subtle);
  width: 10px;
  height: 10px;
  opacity: 0.8;
}

.testimonial-swiper .swiper-pagination-bullet-active {
  background-color: var(--tw-colors-primary);
}

/* OCULTAR FLECHAS EN PANTALLAS PEQUEÑAS (OPCIONAL, PERO RECOMENDADO) */
@media (max-width: 768px) { /* Por ejemplo, en pantallas de menos de 768px */
  .testimonial-swiper .swiper-button-next,
  .testimonial-swiper .swiper-button-prev {
    display: none; /* Ocultamos las flechas */
  }
}

</style>