/* eslint-disable @typescript-eslint/no-non-null-assertion */

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants";

export const axiosInstance = () => {
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

  const createAxiosInstance = axios.create(instanceConfig);

  if (accessToken) {
    createAxiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    createAxiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response?.data.result;
      },
      async (error: AxiosError) => {
        const _err = error;
        const originalReqConfig = error?.config;

        if (_err.status === 401 && REFRESH_TOKEN_KEY) {
          try {
            const res = await createAxiosInstance.post(`/auth/reissue`, { REFRESH_TOKEN_KEY });
            const reIssuedAccessToken: string = await res?.data?.result?.accessToken;

            if (reIssuedAccessToken) {
              originalReqConfig!.headers.Authorization = `Bearer ${reIssuedAccessToken}`;

              return createAxiosInstance(originalReqConfig as InternalAxiosRequestConfig);
            }
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );
  }

  createAxiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response?.data.result;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return createAxiosInstance;
};
