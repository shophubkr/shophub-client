/* eslint-disable @typescript-eslint/no-non-null-assertion */

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import type { isRequireAuthType } from "./axios.types";

const env = process.env.NEXT_PUBLIC_BACKEND_URL;
const accessToken = sessionStorage.getItem("getAccessTokenKey");

export const AxiosInstance = ({ isRequireAuth }: isRequireAuthType) => {
  const instanceConfig = {
    baseURL: env,
    headers: {
      "Content-Type": "application/json",
      ...((isRequireAuth && { "Authorization": `Bearer ${accessToken}` }) ?? {}),
    },
    withCredentials: false,
    timeout: 5000,
  };

  const createAxiosInstance = axios.create(instanceConfig);

  if (isRequireAuth) {
    createAxiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    createAxiosInstance.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
        return response;
      },
      async (error: AxiosError) => {
        const _err = error;
        const originalReqConfig = error?.config;
        const refreshToken = sessionStorage.getItem("getRefreshTokenKey");

        if (_err.status === 401 && refreshToken) {
          try {
            const res = await createAxiosInstance.post(`${env}/api/v1/auth/reissue`, { refreshToken });
            const reIssuedAccessToken: string = await res?.data?.result?.accessToken;

            if (reIssuedAccessToken) {
              originalReqConfig!.headers.Authorization = `Bearer ${reIssuedAccessToken}`;

              return originalReqConfig;
            }
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );
  }

  return createAxiosInstance;
};
