export interface LoginCredential {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface User {
  name: string;
  email: string;
  id: string;
}
