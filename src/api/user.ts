import { apiGet, apiPost } from '@/utils/request';
import type {
  ILoginForm,
  ILoginResponse,
  IRegisterForm,
  IRegisterResponse,
} from './types/user';

interface Response<T = any> {
  code: number;
  msg: string;
  data: T;
}

export const login = (data: ILoginForm) => apiGet<Response<ILoginResponse>>('/login', data);

// eslint-disable-next-line arrow-body-style
export const register = (data: IRegisterForm) => {
  return apiPost<Response<IRegisterResponse>>('/register', data);
};

export const foo = () => apiGet('https://jsonplaceholder.typicode.com/todos/1');
