import apiClient from './api'
import qs from 'qs'

export default {
  // Obtiene todos los artículos, ordenados por fecha de publicación
  getArticles() {
    const query = qs.stringify({
      populate: ['imagen_portada', 'categoria'],
      sort: ['fecha_publicacion:desc'], // Muestra los más nuevos primero
    }, { encodeValuesOnly: true });
    return apiClient.get(`/articulos?${query}`);
  },

  // Obtiene un artículo por su ID
  getArticleById(id: number | string) {
    const query = qs.stringify({
      populate: '*', // Trae toda la información relacionada
      filters: { id: { $eq: id } },
    }, { encodeValuesOnly: true });
    return apiClient.get(`/articulos?${query}`);
  },
}