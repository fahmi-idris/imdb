import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScreenLoading } from 'components/loading';

const Movies = React.lazy(() => import(/* webpackChunkName: 'movies' */ './movies-list'));
const Detail = React.lazy(() => import(/* webpackChunkName: 'detail' */ './movies-detail'));

const Routes: React.FC = () => (
  <React.Suspense fallback={<ScreenLoading />}>
    <Switch>
      <Route path="/" component={Movies} exact />
      <Route path="/:movieId/movie" component={Detail} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </React.Suspense>
);

export default Routes;
