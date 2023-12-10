import axios from "axios";

export const createAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
  timeout: 5000,
});
