import axios from 'axios';
// export const baseUrl = "http://localhost:5000"
export const baseUrl = "https://mpgin-backend-v2.vercel.app"


const api = axios.create({
  baseURL: "https://mpgin-backend-v2.vercel.app",
});

// Add a request interceptor to dynamically attach the Authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;