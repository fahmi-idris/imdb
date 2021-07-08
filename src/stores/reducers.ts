/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { RootStore } from 'interfaces/stores';

import app from './app/reducers';
import movies from './movies/reducers';

export default function buildRootReducer(history: History) {
  return combineReducers<RootStore>({
    router: connectRouter(history),
    app,
    movies,
  });
}
