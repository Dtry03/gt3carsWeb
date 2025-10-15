import apiClient from './api'

interface SolicitudPayload {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export default {
  sendMessage(payload: SolicitudPayload) {
    return apiClient.post('/solicituds', {
      data: payload,
    })
  },
}