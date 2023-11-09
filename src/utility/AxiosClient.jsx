// axiosClient.jsx
import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem } from "./LocalStorageManager";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL_PRODUCTION,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getItem(KEY_ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("config", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
