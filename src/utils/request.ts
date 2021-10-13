import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITA_BASE_URL,
});

request.interceptors.request.use(() => {});
request.interceptors.response.use(() => {});

export default request;

export const apiGet = <T>(url: string, data: any, extOpt = []) => request.get<T>(url, {
  data,
  ...extOpt,
});

export const apiPost = <T>(url: string, data: any, cfg = {}) => request.post<T>(url, data, cfg);
