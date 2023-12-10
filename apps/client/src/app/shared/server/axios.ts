/* eslint-disable no-param-reassign */

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import type Error from "next/error";

export const createAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
  timeout: 5000,
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = "";

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

const onErrorRequest = (error: AxiosError | Error): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (response.status === 404) {
    // "return 404 페이지로 라우팅"
  }

  return response;
};

const onErrorResponse = async (error: AxiosError | Error): Promise<AxiosError> => {
  const _error = error as AxiosError;
  const originalRequest = _error.config as InternalAxiosRequestConfig;

  const accessToken = "";
  const refreshToken = "";

  if (_error.response?.status === 401) {
    // "인증되지 않은 사용자의 요청"
    // "return 토큰이 만료되었습니다. 재로그인을 해주세요."
  }

  if (_error.response && _error.response?.status === 403) {
    // "accessToken이 만료된 경우, refreshToken으로 대체"
    // "return 요청 재시도"
  }

  return Promise.reject(error);
};

createAxiosInstance.interceptors.request.use(onRequest, onErrorRequest);
createAxiosInstance.interceptors.response.use(onResponse, onErrorResponse);
