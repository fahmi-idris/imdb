import { MoviesState } from 'interfaces/movies';

export const getMoviesIndex = (store: MoviesState): MoviesState['index'] => store.index;
export const getMoviesData = (store: MoviesState): MoviesState['data'] => store.data;
export const getMoviesPagination = (store: MoviesState): MoviesState['pagination'] => store.pagination;
export const getMoviesDetail = (store: MoviesState): MoviesState['detail'] => store.detail;
export const getMoviesErrors = (store: MoviesState): MoviesState['errors'] => store.errors;
