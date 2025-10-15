<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from 'vue'
import contactService from '../services/contactService'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const props = defineProps({
  vehicle: {
    type: Object,
    required: true,
  }
})
const emit = defineEmits(['close'])

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  // Mensaje pre-rellenado
  mensaje: `Hola, estoy interesado en el ${props.vehicle?.marca?.nombre} ${props.vehicle?.modelo} . Me gustaría recibir más información.`,
})

// Reglas de validación con mensajes personalizados
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

const v$ = useVuelidate(rules, form)
const submissionState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

async function handleSubmit() {
  v$.value.$touch()
  if (v$.value.$invalid) return

  submissionState.value = 'submitting'
  try {
    await contactService.sendMessage(form.value)
    submissionState.value = 'success'
  } catch (error) {
    console.error('Error al enviar la solicitud:', error)
    submissionState.value = 'error'
  }
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm" @click.self="emit('close')">
    <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl p-8 w-full max-w-lg m-4" data-aos="zoom-in">
      
      <div v-if="submissionState === 'success'" class="text-center text-white py-10">
        <h2 class="text-3xl font-bold text-primary mb-4">¡Mensaje Enviado!</h2>
        <p class="text-subtle text-lg">Gracias por tu interés. Nos pondremos en contacto contigo a la brevedad.</p>
        <button @click="emit('close')" class="mt-8 bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors">
          Cerrar
        </button>
      </div>

      <div v-else>
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-2xl font-bold text-white">Solicitar Información</h2>
            <p class="text-subtle mt-1">Sobre: {{ vehicle?.marca?.nombre }} {{ vehicle?.modelo }}</p>
          </div>
          <button @click="emit('close')" class="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="mb-5">
            <label for="modal-nombre" class="block text-subtle font-semibold mb-2">Nombre Completo</label>
            <input 
              type="text" 
              id="modal-nombre" 
              v-model="form.nombre" 
              @blur="v$.nombre.$touch()"
              :class="{ 'border-red-500': v$.nombre.$error }"
              class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            >
            <div v-if="v$.nombre.$error" class="mt-1 text-red-400 text-sm">
              <p v-for="error in v$.nombre.$errors" :key="error.$uid">{{ error.$message }}</p>
            </div>
          </div>

          <div class="mb-5">
            <label for="modal-correo" class="block text-subtle font-semibold mb-2">Correo Electrónico</label>
            <input 
              type="email" 
              id="modal-correo" 
              v-model="form.correo" 
              @blur="v$.correo.$touch()"
              :class="{ 'border-red-500': v$.correo.$error }"
              class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            >
            <div v-if="v$.correo.$error" class="mt-1 text-red-400 text-sm">
              <p v-for="error in v$.correo.$errors" :key="error.$uid">{{ error.$message }}</p>
            </div>
          </div>

          <div class="mb-5">
            <label for="modal-telefono" class="block text-subtle font-semibold mb-2">Teléfono</label>
            <input 
              type="tel" 
              id="modal-telefono" 
              v-model="form.telefono" 
              @blur="v$.telefono.$touch()"
              :class="{ 'border-red-500': v$.telefono.$error }"
              class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            >
            <div v-if="v$.telefono.$error" class="mt-1 text-red-400 text-sm">
              <p v-for="error in v$.telefono.$errors" :key="error.$uid">{{ error.$message }}</p>
            </div>
          </div>

          <div class="mb-5">
            <label for="modal-mensaje" class="block text-subtle font-semibold mb-2">Mensaje</label>
            <textarea 
              id="modal-mensaje" 
              v-model="form.mensaje" 
              @blur="v$.mensaje.$touch()"
              :class="{ 'border-red-500': v$.mensaje.$error }"
              rows="4" 
              class="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            ></textarea>
            <div v-if="v$.mensaje.$error" class="mt-1 text-red-400 text-sm">
              <p v-for="error in v$.mensaje.$errors" :key="error.$uid">{{ error.$message }}</p>
            </div>
          </div>

          <button 
            type="submit" 
            :disabled="submissionState === 'submitting'"
            class="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 shadow-lg hover:shadow-primary/50"
          >
            {{ submissionState === 'submitting' ? 'Enviando...' : 'Enviar Solicitud' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>