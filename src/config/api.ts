import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const api = axios.create();

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer `;

  return config;
});

api.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  async (error) => {}
);
