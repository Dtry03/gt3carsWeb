import apiClient from './api'
import qs from 'qs'

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'

export default {

   getMarcas() {
    return apiClient.get('/marcas', { params: { sort: 'nombre:asc' } });
  },
  getVehicles(filters = {}) {
    const query = qs.stringify({
      populate: ['marca', 'imagenes'],
      filters: filters,
    }, {
      encodeValuesOnly: true,
    })
    return apiClient.get(`/vehiculos?${query}`)
  },

  // --- ESTA ES LA FUNCIÓN CRÍTICA ---
  getVehicleById(id: number | string) {
    const query = qs.stringify(
      {
        filters: {
          id: {
            $eq: id,
          },
        },
        populate: '*', // Pedimos toda la información relacionada
      },
      {
        encodeValuesOnly: true,
      }
    );
    
    // Para depurar, vemos la URL exacta que se pide
    console.log(`Pidiendo la URL de detalle: /vehiculos?${query}`);

    return apiClient.get(`/vehiculos?${query}`);
  },
  // ------------------------------------

  getImageUrl(images: any[]) {
    if (!images || images.length === 0 || !images[0].url) {
      return 'https://via.placeholder.com/400x300.png?text=Sin+Imagen'
    }
    return `${STRAPI_URL}${images[0].url}`
  }
}