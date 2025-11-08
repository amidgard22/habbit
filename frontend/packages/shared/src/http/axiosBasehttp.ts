// packages/shared/src/http/axiosBasehttp.ts
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosRequestConfig, AxiosError } from "axios";
import { axiosInstance } from "./axiosBase";

type AxiosBaseQueryArgs = {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
};

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: "" }
): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> => {
  return async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      // Правильная обработка ошибок
      return {
        error: {
          status: err.response?.status || 500,
          data: err.response?.data || err.message || "Unknown error",
        },
      };
    }
  };
};
