import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
// const token = localStorage.getItem('user-token');
// console.log('token: ', token);



// const Login = lazy(() => import('./user-pages/Login'));
const Login = lazy(() => import('./user-pages/Login2'));
const Register1 = lazy(() => import('./user-pages/Register'));

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const QualityInfo = lazy(() => import('./components/QualityInfo/qualityInfo'));

const Weaving = lazy(() => import('./components/weaving/Weaving'));

const Sizing = lazy(() => import('./components/weaving/Weaving'));

const Weft = lazy(() => import('./components/Weft/Weft'));

const Production = lazy(() => import('./components/Production/Production'));

const Beam = lazy(() => import('./components/Beam/Beam'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));

const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/qualityInfo" component={QualityInfo} />
          <Route exact path="/weaving" component={Weaving} />
          <Route exact path="/Sizing" component={Sizing} />
          <Route exact path="/Weft" component={Weft} />
          <Route exact path="/Production" component={Production} />
          <Route exact path="/Beam" component={Beam} />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />

          <Route path="/form-Elements/basic-elements" component={BasicElements} />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />


          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />


          <Redirect to="/user-pages/login-1" />
          {/* {token === undefined ?
            (<Redirect to="/user-pages/login-1" />)
            : (<Redirect to="/dashboard" />)}
          <Redirect to="/dashboard" /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;