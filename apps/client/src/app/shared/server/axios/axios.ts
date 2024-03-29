/* eslint-disable @typescript-eslint/no-non-null-assertion */

import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants";
import type { BaseResponse } from "../types";

const accessToken = Cookies.get(ACCESS_TOKEN_KEY);

const instanceConfig = {
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    ...((accessToken && { "Authorization": `Bearer ${accessToken}` }) ?? {}),
  },
  withCredentials: true,
  timeout: 5000,
};

const axiosInstance: AxiosInstance = axios.create(instanceConfig);

if (accessToken) {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const _err = error;
      const originalReqConfig = error?.config;

      if (_err.status === 401 && REFRESH_TOKEN_KEY) {
        try {
          const res = await axiosInstance.post(`/auth/reissue`, { REFRESH_TOKEN_KEY });
          const reIssuedAccessToken: string = await res?.data?.result?.accessToken;

          if (reIssuedAccessToken) {
            originalReqConfig!.headers.Authorization = `Bearer ${reIssuedAccessToken}`;

            return axiosInstance(originalReqConfig as InternalAxiosRequestConfig);
          }
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export const api = {
  get: <T>(...args: Parameters<typeof axiosInstance.get>) => {
    return axiosInstance.get<BaseResponse<T>>(...args);
  },
  post: <T>(...args: Parameters<typeof axiosInstance.post>) => {
    return axiosInstance.post<BaseResponse<T>>(...args);
  },
  put: <T>(...args: Parameters<typeof axiosInstance.put>) => {
    return axiosInstance.put<BaseResponse<T>>(...args);
  },
  patch: <T>(...args: Parameters<typeof axiosInstance.patch>) => {
    return axiosInstance.patch<BaseResponse<T>>(...args);
  },
  delete: <T>(...args: Parameters<typeof axiosInstance.delete>) => {
    return axiosInstance.delete<BaseResponse<T>>(...args);
  },
};
