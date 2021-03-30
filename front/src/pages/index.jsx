import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loading from '../components/Loading';
import AppLayout from '../layouts/AppLayout';

const Result = React.lazy(() => import('../pages/result'));
const Detail = React.lazy(() => import('../pages/detail'));
const NotFound = React.lazy(() => import('../pages/notFound'));

const MainPage = () => (
  <Suspense fallback={<Loading />}>
    <AppLayout>
      <Switch>
        <Route exact path="/items" render={(props) => <Result {...props} />} />
        <Route path="/items/:id" render={(props) => <Detail {...props} />} />
        <Route exact path="/" render={() => <></>} />
        <Route path="/404" render={(props) => <NotFound {...props} />} />
        <Redirect to="/404" />
      </Switch>
    </AppLayout>
  </Suspense>
);

export { MainPage as default };
