import { RouterState } from 'connected-react-router';

import { MoviesState } from './movies';
import AppState from './app';

export interface RootStore {
  app: AppState;
  router: RouterState;
  movies: MoviesState;
}
