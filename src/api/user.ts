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

export const login = (data: ILoginForm) =>
  apiGet<Response<ILoginResponse>>('/login', data);

export const register = (data: IRegisterForm) =>
  apiPost<Response<IRegisterResponse>>('/register', data);
