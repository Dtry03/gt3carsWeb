<script setup lang="ts">
import { ref, computed } from 'vue'
import contactService from '../services/contactService'
import GoogleMap from '../components/GoogleMap.vue'

// --- 1. Importa Vuelidate ---
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  mensaje: '',
})

// --- 2. Define las reglas de validación con mensajes personalizados ---
const rules = computed(() => ({
  nombre: { 
    required: helpers.withMessage('El nombre es obligatorio.', required), 
    minLength: helpers.withMessage('El nombre debe tener al menos 3 caracteres.', minLength(3)) 
  },
  correo: { 
    required: helpers.withMessage('El email es obligatorio.', required), 
    email: helpers.withMessage('Introduce un formato de email válido.', email) 
  },
  telefono: { 
    required: helpers.withMessage('El teléfono es obligatorio.', required), 
    minLength: helpers.withMessage('El teléfono debe tener al menos 9 dígitos.', minLength(9)) 
  },
  mensaje: { 
    required: helpers.withMessage('El mensaje no puede estar vacío.', required) 
  }
}))

// --- 3. Inicializa Vuelidate ---
const v$ = useVuelidate(rules, form)
const submissionState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

async function handleSubmit() {
  // --- 4. Comprueba la validez antes de enviar ---
  v$.value.$touch()
  if (v$.value.$invalid) return

  submissionState.value = 'submitting'
  try {
    await contactService.sendMessage(form.value)
    submissionState.value = 'success'
    form.value = { nombre: '', correo: '', telefono: '', mensaje: '' }
    v$.value.$reset() // Resetea el estado de validación
  } catch (error) {
    console.error('Error al enviar la solicitud:', error)
    submissionState.value = 'error'
  }
}
</script>

<template>
  <div class="bg-dark py-20 relative overflow-hidden">
    
    <div class="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[200px] z-0"></div>

    <div class="relative z-10 container mx-auto px-6">
      <div class="text-center mb-16">
        <h1 data-aos="fade-up" class="text-5xl font-extrabold text-white">
          Contacta con <span class="text-primary">Nosotros</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" class="mt-4 text-lg text-subtle max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o quieres hablar sobre un coche? Estamos aquí para ayudarte.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div class="lg:col-span-2 text-light" data-aos="fade-right">
          <h2 class="text-3xl font-bold mb-6">Información de Contacto</h2>
          <div class="space-y-6 text-lg">
            <!-- ... Información de contacto ... -->
          </div>
          <h2 class="text-3xl font-bold mb-6 mt-8">Nuestra Ubicación</h2>
          <div class="h-80 rounded-lg overflow-hidden shadow-lg">
            <GoogleMap />
          </div>
        </div>

        <div class="lg:col-span-3 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl shadow-lg" data-aos="fade-left">
          <form v-if="submissionState !== 'success'" @submit.prevent="handleSubmit">
            <!-- Campo Nombre con errores -->
            <div class="mb-6">
              <label for="nombre" class="block text-subtle font-bold mb-2">Nombre Completo</label>
              <input type="text" id="nombre" v-model="form.nombre" @blur="v$.nombre.$touch()" :class="{'border-red-500': v$.nombre.$error}" class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300">
              <div v-if="v$.nombre.$error" class="mt-1 text-red-400 text-sm">
                <p v-for="error in v$.nombre.$errors" :key="error.$uid">{{ error.$message }}</p>
              </div>
            </div>
            
            <!-- Campo Correo con errores -->
            <div class="mb-6">
              <label for="correo" class="block text-subtle font-bold mb-2">Correo Electrónico</label>
              <input type="email" id="correo" v-model="form.correo" @blur="v$.correo.$touch()" :class="{'border-red-500': v$.correo.$error}" class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300">
               <div v-if="v$.correo.$error" class="mt-1 text-red-400 text-sm">
                <p v-for="error in v$.correo.$errors" :key="error.$uid">{{ error.$message }}</p>
              </div>
            </div>
            
            <!-- Campo Teléfono con errores -->
            <div class="mb-6">
              <label for="telefono" class="block text-subtle font-bold mb-2">Teléfono</label>
              <input type="tel" id="telefono" v-model="form.telefono" @blur="v$.telefono.$touch()" :class="{'border-red-500': v$.telefono.$error}" class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300">
               <div v-if="v$.telefono.$error" class="mt-1 text-red-400 text-sm">
                <p v-for="error in v$.telefono.$errors" :key="error.$uid">{{ error.$message }}</p>
              </div>
            </div>
            
            <!-- Campo Mensaje con errores -->
            <div class="mb-6">
              <label for="mensaje" class="block text-subtle font-bold mb-2">Mensaje</label>
              <textarea id="mensaje" v-model="form.mensaje" @blur="v$.mensaje.$touch()" :class="{'border-red-500': v$.mensaje.$error}" rows="5" class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"></textarea>
               <div v-if="v$.mensaje.$error" class="mt-1 text-red-400 text-sm">
                <p v-for="error in v$.mensaje.$errors" :key="error.$uid">{{ error.$message }}</p>
              </div>
            </div>

            <button type="submit" :disabled="submissionState === 'submitting'" class="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-primary/50">
              {{ submissionState === 'submitting' ? 'Enviando...' : 'Enviar Solicitud' }}
            </button>
            <p v-if="submissionState === 'error'" class="text-red-500 mt-4 text-center">
              Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.
            </p>
          </form>

          <div v-if="submissionState === 'success'" class="text-center py-10">
            <h3 class="text-2xl font-bold text-white">¡Gracias por tu solicitud!</h3>
            <p class="text-subtle mt-2">Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>