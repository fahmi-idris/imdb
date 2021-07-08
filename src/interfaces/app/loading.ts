export interface Data {
  [id: string]: boolean;
}

export interface Store {
  data: Data;
}

export interface LoadingState {
  fetch: boolean;
  save?: boolean;
  remove?: boolean;
  update?: boolean;
}
