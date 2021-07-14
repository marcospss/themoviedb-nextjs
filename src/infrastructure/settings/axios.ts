import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { api } from './api';

export default axios.create({
  baseURL: api.baseURL,
});

export type { AxiosRequestConfig, AxiosResponse, AxiosError };
