import { all, fork } from 'redux-saga/effects';

import Movies from './movies/sagas';

export default function* rootSaga() {
  yield all([fork(Movies)]);
}
