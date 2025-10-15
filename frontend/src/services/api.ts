import axios from 'axios';

// Usamos variables de entorno para la URL de la API, es una buena práctica.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
  INTERCEPTOR (PARA EL FUTURO)
  Este bloque es muy útil para cuando implementes el login.
  Automáticamente añadirá el token de autenticación a todas las peticiones.
  Por ahora, puede quedar comentado o así como está.
*/
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('jwt'); // Suponemos que guardarás el token aquí
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;