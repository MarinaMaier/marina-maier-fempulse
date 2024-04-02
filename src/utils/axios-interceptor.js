import axios from 'axios';

const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Add custom headers or modify request config
    config.headers.Authorization = `Bearer ${sessionStorage.token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Process response data
    return response;
  },
  error => {
    console.log(error);
    // Handle error responses
    if (error.response.status === 401) {
        window.location.href = `${window.location.origin}`
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
