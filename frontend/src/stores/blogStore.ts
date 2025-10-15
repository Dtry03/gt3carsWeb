import { defineStore } from 'pinia'
import blogService from '../services/blogService'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    articles: [] as any[],
    article: null as any,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchArticles() {
      this.loading = true;
      this.error = null;
      try {
        const response = await blogService.getArticles();
        this.articles = response.data.data;
      } catch (err) {
        this.error = 'No se pudieron cargar los artículos.';
      } finally {
        this.loading = false;
      }
    },
    async fetchArticleById(id: number | string) {
      this.loading = true;
      this.article = null;
      this.error = null;
      try {
        const response = await blogService.getArticleById(id);
        if (response.data.data.length > 0) {
          this.article = response.data.data[0];
        } else {
          throw new Error('Artículo no encontrado');
        }
      } catch (err) {
        this.error = 'No se pudo encontrar el artículo.';
      } finally {
        this.loading = false;
      }
    },
  },
});