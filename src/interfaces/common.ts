import { Method } from 'axios';
import { JsonObject } from 'interfaces';

export interface DataMap<T> {
  [key: string]: T;
}

export interface PaginatedData<T> {
  Search: T[];
  totalResults?: string;
  Response?: boolean;
}

export interface Pagination {
  page: number | null;
  total: number;
}

export interface AxiosParams {
  type?: Method;
  params?: JsonObject;
  url?: string;
  data?: JsonObject | FormData;
  base?: string;
}
