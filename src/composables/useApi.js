import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const apiClient = axios.create({
  baseURL: 'https://aspexpressapi-production.up.railway.app/',
});

console.log(import.meta.env)

apiClient.interceptors.request.use((config) => {
  const token = `Bearer ${import.meta.env.VITE_APP_TOKEN}`;
 
  if (!token) {
    console.error('No authentication token found');
    router.push({ name: 'error401' })
    return;
  }
  config.headers.Authorization = token;
  return config;
}, (error) => Promise.reject(error));

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error", error);
    if (error.response && error.response.status === 401) {
      router.push({ name: 'error401' })
    }
    return Promise.reject(error);
  }
);

export const useApi = () => apiClient;

const handleApiError = (error) => {
  console.error('API request failed', error);
  console.error('API request failed a', error.response);
  if (error.response && error.response.status === 401) {
    router.push({ name: 'error401' })
  }
};

export const getActualBalance = async () => {
  try {
    const { data } = await apiClient.get('getActualBalance');
    return data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getGetProviders = async () => {
  try {
    const { data } = await apiClient.get('getProviders');
    return data;
  } catch (error) {
    console.log("getGetProviders - error", error)
    handleApiError(error);
  }
};