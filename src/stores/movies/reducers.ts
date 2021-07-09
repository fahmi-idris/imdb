import { Reducer, combineReducers } from 'redux';

import { DataMap } from 'interfaces/common';
import { Movies, MoviesState } from 'interfaces/movies';

import { MoviesActionTypes } from './types';

const initialState: MoviesState = {
  index: [],
  data: {},
  detail: null,
  errors: null,
  pagination: {
    total: 0,
  },
};

const index: Reducer<MoviesState['index']> = (state = initialState.index, { type, payload }) => {
  switch (type) {
    case MoviesActionTypes.MOVIES_FETCH_SUCCESS:
      if (payload.data.Search instanceof Array) {
        const data = payload.data.Search.map((item: Movies) => (item.imdbID ? item.imdbID : ''));
        if (payload.isInfiniteScroll) {
          return [...state, ...data];
        }
        return [...data];
      }
      return [];
    case MoviesActionTypes.MOVIES_FETCH_FAILED:
      return state;
    default:
      return state;
  }
};

const data: Reducer<MoviesState['data']> = (state = initialState.data, { type, payload }) => {
  switch (type) {
    case MoviesActionTypes.MOVIES_FETCH_SUCCESS:
      if (payload.data.Search instanceof Array) {
        const MoviesMap: DataMap<Movies> = {};
        payload.data.Search.forEach((item: Movies) => {
          if (item.imdbID) {
            MoviesMap[item.imdbID] = item;
          }
        });
        if (payload.isInfiniteScroll) {
          return { ...state, ...MoviesMap };
        }
        return { ...MoviesMap };
      }
      return { ...state };
    case MoviesActionTypes.MOVIES_FETCH_FAILED:
      return state;
    default:
      return state;
  }
};

const pagination: Reducer<MoviesState['pagination']> = (state = initialState.pagination, { type, payload }) => {
  switch (type) {
    case MoviesActionTypes.MOVIES_FETCH_SUCCESS:
      if (payload.data.Response === 'True') {
        const { totalResults } = payload.data;
        const total = Math.ceil(Number(totalResults) / 10);
        return {
          total,
        };
      }
      return state;
    default:
      return state;
  }
};

const detail: Reducer<MoviesState['detail']> = (state = initialState.detail, { type, payload }) => {
  switch (type) {
    case MoviesActionTypes.MOVIES_FETCH_DETAIL_SUCCESS:
      return payload;
    case MoviesActionTypes.MOVIES_FETCH_DETAIL_FAILED:
      return initialState.detail;
    default:
      return state;
  }
};

const errors: Reducer<MoviesState['errors']> = (state = initialState.errors, { type, payload }) => {
  switch (type) {
    case MoviesActionTypes.MOVIES_FETCH_DETAIL_SUCCESS:
    case MoviesActionTypes.MOVIES_FETCH_SUCCESS:
      return null;
    case MoviesActionTypes.MOVIES_FETCH_FAILED:
    case MoviesActionTypes.MOVIES_FETCH_DETAIL_FAILED:
      return payload;
    default:
      return state;
  }
};

const reducer = combineReducers<MoviesState>({
  index,
  data,
  detail,
  errors,
  pagination,
});

export default reducer;
