<script setup lang="ts">
import CalendlyWidget from '../components/CalendlyWidget.vue';
</script>
<template>
  <div class="bg-black text-light overflow-hidden">
    <section class="relative h-[70vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('/img/detailing-hero.jpg');">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 text-center p-6" data-aos="fade-in" data-aos-duration="1500">
        <h1 class="text-5xl md:text-8xl font-thin text-white uppercase" style="letter-spacing: 0.5em;">Detailing</h1>
        <p class="mt-4 text-xl text-gray-300 font-medium tracking-widest">El Arte de la Perfección Absoluta</p>
      </div>
    </section>

    <section class="py-24 bg-dark">
      <div class="container mx-auto px-6 text-center max-w-4xl">
        <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up">
          Más Allá de Limpiar. <span class="text-primary">Restauramos el Alma de tu Coche.</span>
        </h2>
        <div class="text-lg text-subtle space-y-4" data-aos="fade-up" data-aos-delay="200">
          <p>
            Nuestro estudio de detailing es un santuario dedicado a la restauración y protección de vehículos de excepción. No lavamos coches; los rejuvenecemos. Cada curva, cada panel, cada costura es tratada con técnicas de vanguardia y los productos más finos del mundo para alcanzar un nivel de brillo y protección que supera el estado de fábrica.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-medium">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-4xl font-extrabold text-white mb-16" data-aos="fade-up">Tratamientos de Firma</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div data-aos="fade-up" data-aos-delay="100" class="group relative h-96 rounded-xl overflow-hidden shadow-lg">
            <img src="/img/detailing-paint.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div class="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 class="text-3xl font-bold">Corrección de Pintura</h3>
              <p class="mt-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Eliminación de swirls y arañazos para un acabado espejo.</p>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300" class="group relative h-96 rounded-xl overflow-hidden shadow-lg">
            <img src="/img/detailing-ceramic.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div class="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 class="text-3xl font-bold">Tratamientos Cerámicos</h3>
              <p class="mt-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Protección extrema, brillo cristalino y efecto hidrofóbico.</p>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="500" class="group relative h-96 rounded-xl overflow-hidden shadow-lg">
            <img src="/img/detailing-interior.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div class="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 class="text-3xl font-bold">Detailing Interior Completo</h3>
              <p class="mt-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cuidado y nutrición de cuero y plásticos para un acabado de fábrica.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 bg-dark">
  <div class="container mx-auto px-6">
    <h2 class="text-center text-4xl font-extrabold text-white mb-12" data-aos="fade-up">Pide tu Cita Online</h2>
    <p class="text-subtle text-center">Selecciona el día y la hora que mejor te convenga. Nuestro equipo de especialistas se pondrá en contacto contigo para confirmar todos los detalles y preparar la recepción de tu vehículo. En GT3 Cars, tu tiempo es tan valioso como tu coche.</p>
     <CalendlyWidget url="https://calendly.com/gt3carsponferrada/new-meeting" />
    </div>
</section>
  </div>
</template>