import { action } from 'typesafe-actions';

import { PaginatedData } from 'interfaces/common';
import { Movies } from 'interfaces/movies';

import { MoviesActionTypes } from './types';

export const fetchMoviesRequest = () => action(MoviesActionTypes.MOVIES_FETCH_REQUEST);
export const fetchMoviesSuccess = (data: PaginatedData<Movies>) => action(MoviesActionTypes.MOVIES_FETCH_SUCCESS, data);
export const fetchMoviesFailed = (message: string) => action(MoviesActionTypes.MOVIES_FETCH_FAILED, message);
