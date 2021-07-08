/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import buildRootReducer from './reducers';
import rootSagas from './sagas';

const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({});

function configureStore(initialState?: any) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    buildRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history))),
  );

  sagaMiddleware.run(rootSagas);

  return { store, history };
}

export default configureStore;
