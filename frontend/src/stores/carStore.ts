import { defineStore } from 'pinia'
import carService from '../services/carService' 

export const useCarStore = defineStore('car', {
  state: () => ({
    vehicles: [] as any[],
    vehicle: null as any,  
    loading: false,
    error: null as string | null,
    marcas: [] as any[],
  }),
  actions: {
    async fetchVehicles(filters = {}) {
      this.loading = true
      this.error = null
      try {
        const response = await carService.getVehicles(filters)
        this.vehicles = response.data.data 
      } catch (err) {
        console.error("Error al obtener los vehículos:", err)
        this.error = "No se pudieron cargar los vehículos. Inténtalo de nuevo más tarde."
      } finally {
        this.loading = false
      }
    },

    async fetchVehicleById(id: number | string) {
      this.loading = true
      this.vehicle = null
      this.error = null
      try {
        const response = await carService.getVehicleById(id)
        
        // La respuesta es un array, tomamos el primer (y único) elemento
        if (response.data.data.length > 0) {
          this.vehicle = response.data.data[0];
        } else {
          throw new Error('Vehículo no encontrado en la respuesta de la API');
        }

      } catch (err) {
        console.error("Error al obtener el vehículo:", err);
        this.error = "No se pudo encontrar el vehículo.";
      } finally {
        this.loading = false
      }
    },

    async fetchMarcas() {
      try {
        const response = await carService.getMarcas();
        this.marcas = response.data.data;
      } catch (err) {
        console.error("Error al obtener las marcas:", err);
      }
    },
  },
})