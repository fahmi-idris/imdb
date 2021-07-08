import { MoviesState } from 'interfaces/movies';

export const getMoviesIndex = (store: MoviesState): MoviesState['index'] => store.index;
export const getMoviesData = (store: MoviesState): MoviesState['data'] => store.data;
