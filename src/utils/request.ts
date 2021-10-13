import axios from 'axios';

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

export const apiGet = <T>(url: string, params = {}, extOpt = {}) => request.get<T>(url, {
  params,
  ...extOpt,
});

// eslint-disable-next-line arrow-body-style
export const apiPost = <T extends Object>(url: string, data: any, cfg = {}) => {
  return request.post<T>(url, data || {}, cfg);
};
