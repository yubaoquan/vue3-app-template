import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITA_BASE_URL,
});

request.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);
request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default request;

export const apiGet = <T>(
  url: string,
  params?: any,
  cfg = {},
) => request.get<T>(url, { params, ...cfg });

export const apiPost = <T, R>(
  url: string,
  data?: T,
  cfg?: AxiosRequestConfig<T>,
) => request.post<T, R>(url, data, cfg);
