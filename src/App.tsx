import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScreenLoading } from 'components/loading';
import Movies from './modules/movies';

const App: React.FC = () => (
  <React.Suspense fallback={<ScreenLoading />}>
    <Switch>
      <Route path="/" component={Movies} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </React.Suspense>
);

export default App;
