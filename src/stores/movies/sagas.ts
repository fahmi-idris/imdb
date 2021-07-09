import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import get from 'lodash/get';

import { TypedReduxAction } from 'interfaces';
import { MovieParamsSearch, Movies } from 'interfaces/movies';
import { PaginatedData } from 'interfaces/common';
import { setLoading } from 'stores/app/loadings/action';

import { callApi } from 'utils/api';

import { fetchMoviesSuccess, fetchMoviesFailed, fetchMoviesDetailSuccess, fetchMoviesDetailFailed } from './actions';
import { MoviesActionTypes } from './types';

function* handleFetchMoviesRequest({
  payload: { s, page, type, isInfiniteScroll },
}: TypedReduxAction<MovieParamsSearch>) {
  yield put(setLoading(MoviesActionTypes.MOVIES_FETCH_REQUEST, true));
  try {
    const res: PaginatedData<Movies> = yield call(callApi, {
      type: 'GET',
      params: {
        s,
        type,
        page,
      },
    });
    yield put(fetchMoviesSuccess(res, isInfiniteScroll));
  } catch (err) {
    const error: string = get(err, 'response.data.message', 'Whoops, an error occurred! Please try again.');
    yield put(fetchMoviesFailed(error));
  } finally {
    yield put(setLoading(MoviesActionTypes.MOVIES_FETCH_REQUEST, false));
  }
}

function* watchFetchMoviesRequest() {
  yield takeLatest(MoviesActionTypes.MOVIES_FETCH_REQUEST, handleFetchMoviesRequest);
}

function* handleFetchMoviesDetailRequest({ payload }: TypedReduxAction<string>) {
  yield put(setLoading(MoviesActionTypes.MOVIES_FETCH_DETAIL_REQUEST, true));
  try {
    const res: Movies = yield call(callApi, {
      type: 'GET',
      params: {
        i: payload,
      },
    });
    yield put(fetchMoviesDetailSuccess(res));
  } catch (err) {
    const error: string = get(err, 'response.data.message', 'Whoops, an error occurred! Please try again.');
    yield put(fetchMoviesDetailFailed(error));
  } finally {
    yield put(setLoading(MoviesActionTypes.MOVIES_FETCH_DETAIL_REQUEST, false));
  }
}

function* watchFetchMoviesDetailRequest() {
  yield takeLatest(MoviesActionTypes.MOVIES_FETCH_DETAIL_REQUEST, handleFetchMoviesDetailRequest);
}

export default function* sagas() {
  yield all([fork(watchFetchMoviesRequest), fork(watchFetchMoviesDetailRequest)]);
}
