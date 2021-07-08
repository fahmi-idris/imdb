import { all, fork, put, takeLatest, call } from 'redux-saga/effects';

import { TypedReduxAction } from 'interfaces';
import { RootStore } from 'interfaces/stores';
import { Movies } from 'interfaces/movies';
import { PaginatedData } from 'interfaces/common';
import { setLoading } from 'stores/app/loadings/action';

import { callApi } from 'utils/api';

import { fetchMoviesSuccess, fetchMoviesFailed } from './actions';
import { MoviesActionTypes } from './types';

function* handleFetchMoviesRequest() {
  yield put(setLoading(MoviesActionTypes.MOVIES_FETCH_REQUEST, true));
  try {
    const res: PaginatedData<Movies> = yield call(callApi, 'GET', '&s=Batman&page=1');
    console.dir(res);
    // yield put(fetchMoviesSuccess(res));
  } catch (err) {
    // const error: string = get(err, 'response.data.message', 'Whoops, an error occurred! Please try again.');
    console.dir(err);
    yield put(fetchMoviesFailed('error'));
  } finally {
    yield put(setLoading(MoviesActionTypes.MOVIES_FETCH_REQUEST, false));
  }
}

function* watchFetchMoviesRequest() {
  yield takeLatest(MoviesActionTypes.MOVIES_FETCH_REQUEST, handleFetchMoviesRequest);
}

export default function* sagas() {
  yield all([fork(watchFetchMoviesRequest)]);
}
