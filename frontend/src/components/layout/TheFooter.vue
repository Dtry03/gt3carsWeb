<script setup lang="ts">
import { RouterLink } from 'vue-router'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-black text-white border-t-4 border-primary">
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
        
        <div class="flex flex-col items-center sm:items-start">
          <RouterLink to="/" class="text-4xl font-extrabold tracking-wider">
            GT3<span class="text-primary">CARS</span>
          </RouterLink>
          <p class="mt-4 text-subtle max-w-xs">
            El punto de encuentro para entusiastas del motor. Compra, vende y mantén tu deportivo con total confianza.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold uppercase tracking-wider text-white mb-4">Horarios</h3>
          <ul class="space-y-3 text-subtle">
            <li class="flex justify-between items-center"><span>Lunes - Viernes</span></li>
            <li class="flex justify-between items-center -mt-2 ml-4"><strong>9:30-13:30 / 15:30-19:30</strong></li>
            <li class="flex justify-between items-center"><span>Sábado</span> <strong>9:30-13:30</strong></li>
            <li class="flex justify-between items-center"><span>Domingo</span> <strong>Cerrado</strong></li>
            <li class="mt-2 text-sm text-amber-500/80">El horario podría cambiar en festivos.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold uppercase tracking-wider text-white mb-4">Enlaces</h3>
          <ul class="space-y-2">
            <li><RouterLink to="/coches" class="text-subtle hover:text-primary transition-colors">Catálogo</RouterLink></li>
            <li><RouterLink to="/taller" class="text-subtle hover:text-primary transition-colors">Taller</RouterLink></li>
            <li><RouterLink to="/detailing" class="text-subtle hover:text-primary transition-colors">Detailing</RouterLink></li>
            <li><RouterLink to="/contacto" class="text-subtle hover:text-primary transition-colors">Contacto</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold uppercase tracking-wider text-white mb-4">Síguenos</h3>
          <div class="flex justify-center sm:justify-start space-x-5">
            <a href="#" target="_blank" class="text-subtle hover:text-primary transition-colors" aria-label="Facebook">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="#" target="_blank" class="text-subtle hover:text-primary transition-colors" aria-label="Instagram">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" /></svg>
            </a>
          </div>
        </div>

      </div>
    </div>

    <div class="bg-black py-4">
      <div class="container mx-auto px-6 text-center text-sm text-subtle">
        <p>&copy; {{ currentYear }} GT3 Cars. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>