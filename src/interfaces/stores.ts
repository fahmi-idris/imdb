import { RouterState } from 'connected-react-router';

import { store } from 'utils/redux';

import { MoviesState } from './movies';
import AppState from './app';

export interface RootStore {
  app: AppState;
  router: RouterState;
  movies: MoviesState;
}

export type AppDispatch = typeof store.dispatch;
