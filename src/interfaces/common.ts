import { Method } from 'axios';
import { JsonObject } from 'interfaces';

export interface DataMap<T> {
  [key: string]: T;
}

export interface StatusCode {
  Response?: 'True' | 'False';
  Error?: string;
}

export interface PaginatedData<T> extends StatusCode {
  Search: T[];
  totalResults?: string;
}

export interface Pagination {
  total: number;
}

export interface AxiosParams {
  type?: Method;
  params?: JsonObject;
  url?: string;
  data?: JsonObject | FormData;
  base?: string;
}
