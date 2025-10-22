<script setup lang="ts">
import { ref} from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

</script>

<template>
  <header class="bg-black text-white shadow-2xl sticky top-0 z-50">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center">
      <RouterLink to="/" class="text-4xl font-extrabold tracking-wider">
        GT3<span class="text-red-600">CARS</span>
      </RouterLink>

      <div class="hidden md:flex items-center space-x-10">
        <RouterLink to="/coches" class="text-lg font-medium text-gray-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full hover:text-white">Catálogo</RouterLink>
        <a href="/taller" class="text-lg font-medium text-gray-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full hover:text-white">Taller</a>
        <a href="/detailing" class="text-lg font-medium text-gray-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full hover:text-white">Detailing</a>
        <RouterLink to="/blog" class="text-lg font-medium text-gray-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full hover:text-white">Blog</RouterLink>
        <RouterLink to="/contacto" 
          class="bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Solicitar Información
        </RouterLink>
      </div>

      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="text-gray-200 focus:outline-none z-50 relative">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95">
        <div class="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-bold">
          <RouterLink to="/coches" @click="isMenuOpen = false" class="text-gray-300 hover:text-red-500">Catálogo</RouterLink>
        <a href="/taller" class="text-gray-300 hover:text-red-500">Taller</a>
        <a href="/detailing" class="text-gray-300 hover:text-red-500">Detailing</a>
        <RouterLink to="/blog" class="text-gray-300 hover:text-red-500">Blog</RouterLink>
        <RouterLink to="/contacto" 
          class="bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Solicitar Información
        </RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>