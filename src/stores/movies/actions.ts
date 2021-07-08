import { action } from 'typesafe-actions';

import { PaginatedData } from 'interfaces/common';
import { MovieParamsSearch, Movies } from 'interfaces/movies';

import { MoviesActionTypes } from './types';

export const fetchMoviesRequest = (params: MovieParamsSearch) => action(MoviesActionTypes.MOVIES_FETCH_REQUEST, params);
export const fetchMoviesSuccess = (data: PaginatedData<Movies>) => action(MoviesActionTypes.MOVIES_FETCH_SUCCESS, data);
export const fetchMoviesFailed = (message?: string) => action(MoviesActionTypes.MOVIES_FETCH_FAILED, message);

export const fetchMoviesDetailRequest = (movieId: string) =>
  action(MoviesActionTypes.MOVIES_FETCH_DETAIL_REQUEST, movieId);
export const fetchMoviesDetailSuccess = (data: Movies) => action(MoviesActionTypes.MOVIES_FETCH_DETAIL_SUCCESS, data);
export const fetchMoviesDetailFailed = (message?: string) =>
  action(MoviesActionTypes.MOVIES_FETCH_DETAIL_FAILED, message);
