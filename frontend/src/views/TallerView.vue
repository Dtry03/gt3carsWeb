<script setup lang="ts">
import CalendlyWidget from '../components/CalendlyWidget.vue';
</script>
<template>
  <div class="bg-dark text-light">
    <section class="relative h-[60vh] bg-cover bg-center flex items-end pb-20" style="background-image: url('/img/taller-hero.jpg');">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <div class="relative z-10 container mx-auto px-6" data-aos="fade-up">
        <p class="text-lg font-semibold text-primary uppercase tracking-widest">GT3 Cars Workshop</p>
        <h1 class="text-5xl md:text-8xl font-extrabold text-white uppercase tracking-wider">Mecánica de Precisión</h1>
      </div>
    </section>

    <section class="py-24">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 class="text-4xl font-bold text-white mb-6 leading-tight">Donde la Pasión se une con la <span class="text-primary">Ingeniería</span></h2>
         <div class="text-lg text-subtle space-y-4">
            <p>Nuestro taller no es un garaje convencional. Es un laboratorio dedicado a la performance. Entendemos la complejidad y la fineza de los vehículos de alto rendimiento porque compartimos tu misma pasión.</p>
            <p>Con herramientas de diagnóstico de última generación y un equipo obsesionado con la perfección, garantizamos un servicio que va más allá de las expectativas.</p>
          </div>
        </div>
        <div data-aos="fade-left" class="h-80 rounded-lg overflow-hidden shadow-2xl">
          <img src="/img/taller-intro.jpg" alt="Interior del taller GT3 Cars" class="w-full h-full object-cover">
        </div>
      </div>
    </section>

    <section class="bg-medium py-24">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-4xl font-extrabold text-white mb-16" data-aos="fade-up">Gama de Servicios</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div data-aos="fade-up" data-aos-delay="100" class="service-card relative bg-dark rounded-xl p-8 border border-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <h3 class="text-2xl font-bold text-white mb-3">Mantenimiento Programado</h3>
            <p class="text-subtle">Revisiones exhaustivas siguiendo los estándares más exigentes para garantizar la fiabilidad en carretera y circuito.</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200" class="service-card relative bg-dark rounded-xl p-8 border border-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <h3 class="text-2xl font-bold text-white mb-3">Potenciación y Rendimiento</h3>
            <p class="text-subtle">Desde sistemas de escape a medida hasta reprogramaciones de ECU y mejoras en el chasis.</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300" class="service-card relative bg-dark rounded-xl p-8 border border-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <h3 class="text-2xl font-bold text-white mb-3">Diagnóstico y Electrónica</h3>
            <p class="text-subtle">Solución de problemas complejos con equipos de diagnóstico oficiales y telemetría avanzada.</p>
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
