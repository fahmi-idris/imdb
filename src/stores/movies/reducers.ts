import { Reducer, combineReducers } from 'redux';

import { DataMap } from 'interfaces/common';
import { Movies, MoviesState } from 'interfaces/movies';

import { MoviesActionTypes } from './types';

const initialState: MoviesState = {
  index: [],
  data: {},
  pagination: null,
};

const index: Reducer<MoviesState['index']> = (state = initialState.index, { type, payload }) => {
  switch (type) {
    case MoviesActionTypes.MOVIES_FETCH_SUCCESS:
      if (payload.Search instanceof Array) {
        return payload.Search.map((item: Movies) => (item.imdbID ? item.imdbID : ''));
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
      if (payload.Search instanceof Array) {
        const MoviesMap: DataMap<Movies> = {};
        payload.Search.forEach((item: Movies) => {
          if (item.imdbID) {
            MoviesMap[item.imdbID] = item;
          }
        });
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
      if (payload) {
        const { data: _deletedData, ...res } = payload;
        return res;
      }
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers<MoviesState>({
  index,
  data,
  pagination,
});

export default reducer;
