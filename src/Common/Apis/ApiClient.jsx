import axios from 'axios';
import ENDPOINTS from '../endpoints';

const apiClient = axios.create({
  baseURL: ENDPOINTS.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to dynamically get token and set headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const vr = localStorage.getItem('vr');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (vr) {
      config.headers['vr'] = vr; // custom header name
    }

    // Merge any additional custom headers
    if (config.customHeaders) {
      config.headers = { ...config.headers, ...config.customHeaders };
    }

    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
