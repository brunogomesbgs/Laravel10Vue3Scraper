import { defineStore } from 'pinia'

import { fetchWrapper } from '@/helpers';
import { router } from '@/router/index.js'

const baseUrl = `${import.meta.env.VITE_API_URL}/urls`;

export const useUrlsStore = defineStore({
  id: 'urls',
  state: () => ({
    urls: {},
    url: JSON.parse(localStorage.getItem('url'))
  }),
  actions: {
    async addUrl(userId, name, url) {
      await fetchWrapper.post(
        `${baseUrl}/`,
        { userId: userId, name: name, url: url }
      );
    },
    async deleteUrl(value) {
      this.urls = { loading: true };
      try {
        await fetchWrapper.delete(`${baseUrl}/${value}`,{});
        this.urls = null;
        localStorage.removeItem('url');
        await router.push('/');
      } catch (error) {
        this.urls = { error }
      }
    },
    async listAllUrl(userId){
      this.urls = { loading: true };
      try {
        this.urls = await fetchWrapper.post(`${baseUrl}/listAll`,{ userId: userId });
        localStorage.setItem('url', JSON.stringify(this.urls));
      } catch (error) {
        this.urls = { error }
      }
    },
    async listUrl(id){
      this.urls = { loading: true };
      try {
        const response = await fetch(`${baseUrl}/${id}`);
        this.urls = await response.json();
      } catch (error) {
        this.urls = { error }
      }
    },
    async listUrlWithLinks(id){
      this.urls = { loading: true };
      try {
        const response = await fetch(`${baseUrl}/${id}/showUrlWithLinks`);
        this.urls = await response.json();
      } catch (error) {
        this.urls = { error }
      }
    },
    async updateUrl(id, userId, name, url){
      this.urls = { loading: true };
      try {
        await fetchWrapper.put(
          `${baseUrl}/${id}`,
          { userId: userId, name: name, url: url }
        );
        this.urls = null;
        localStorage.removeItem('url');
        await router.push('/');
      } catch (error) {
        this.urls = { error }
      }
    },
  }
})