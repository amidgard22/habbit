import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@packages/shared/src/http/axiosBasehttp";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/auth",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        data: credentials,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        data: credentials,
      }),
    }),
    // ... другие endpoints
  }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
