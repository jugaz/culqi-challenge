import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://aspexpressapi-production.up.railway.app/',
});

export const setupInterceptors = (router) => {
  apiClient.interceptors.request.use((config) => {
    const token = `Bearer ${import.meta.env.VITE_APP_TOKEN}`;
   
    if (!token) {
      console.error('No authentication token found');
      router.push({ name: 'error-401' })
      return;
    }
    config.headers.Authorization = token;
    return config;
  }, (error) => Promise.reject(error));

  apiClient.interceptors.response.use(
    response => response,
    error => {
      console.error("API Error", error.request.status === 401);
      if (error.request.status === 401) {
        console.log("A")
        router.push({ name: 'error-401' })
      }
      return Promise.reject(error);
    }
  );
}

export const useApi = () => apiClient;

export const getActualBalance = async () => {
  try {
    const { data } = await apiClient.get('getActualBalance');
    return data;
  } catch (error) {
    console.log("getActualBalance - error", error)

  }
};

export const getGetProviders = async () => {
  try {
    const { data } = await apiClient.get('getProviders');
    return data;
  } catch (error) {
    console.log("getGetProviders - error", error)
 
  }
};