import { User } from "./user";

export interface RegisterResponse {
    message: string;
}

export interface LoginResponse {
    token: {
      accessToken: string;
      refreshToken: string;
    };
    user: User;
  }

  