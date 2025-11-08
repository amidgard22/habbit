export type UserType = {
  email: string;
  firstName: string;
  lastName: string;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: UserType | null;
}

export interface RegisterRequest extends LoginRequest {}

export interface RegisterResponse {
  status: number;
}
