

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const calendlyWidgetRef = ref<HTMLDivElement | null>(null);

function initializeWidget() {
  if (window.Calendly && calendlyWidgetRef.value) {
    // Limpiamos el contenedor por si acaso antes de inicializar
    calendlyWidgetRef.value.innerHTML = '';
    
    window.Calendly.initInlineWidget({
      url: props.url,
      parentElement: calendlyWidgetRef.value,
    });
  }
}

onMounted(() => {
  if (window.Calendly) {
    // Si Calendly ya está cargado, inicializamos el widget directamente
    initializeWidget();
  } else {
    // Si no, cargamos el script y lo inicializamos cuando termine (onload)
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('async', 'true');
    script.id = 'calendly-script';

    document.head.appendChild(script);

    script.onload = initializeWidget;
  }
});

onUnmounted(() => {
  // Cuando salimos de la página, limpiamos el contenido del div
  if (calendlyWidgetRef.value) {
    calendlyWidgetRef.value.innerHTML = '';
  }
});

// TypeScript necesita que declaremos Calendly en el objeto window
declare global {
  interface Window {
    Calendly: any;
  }
}
</script>

<template>
<div class="calendly-inline-widget" data-url="https://calendly.com/gt3carsponferrada/new-meeting?hide_gdpr_banner=1&background_color=2c2d2e&text_color=9ca3af&primary_color=e53935" style="min-width:320px;height:700px;"></div>
 
</template>