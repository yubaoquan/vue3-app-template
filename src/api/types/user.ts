export interface ILoginForm {
  username: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
  username: string;
}

export interface IRegisterForm {
  username: string;
  password: string;
  email: string;
}

export interface IRegisterResponse {
  id: string;
  username: string;
}
