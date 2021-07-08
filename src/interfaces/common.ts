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
