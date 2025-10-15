import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// --- 1. Importa AOS y sus estilos ---
import AOS from 'aos'
import 'aos/dist/aos.css'
// ------------------------------------

import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// --- 2. Inicializa AOS ---
// Puedes pasarle opciones para personalizar la animación
AOS.init({
  duration: 800, // Duración de la animación en milisegundos
  easing: 'ease-in-out', // Tipo de "aceleración" de la animación
  once: true, // Si la animación debe ocurrir solo una vez
});
// -------------------------