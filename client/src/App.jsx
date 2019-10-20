import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './Rdx_actions/axn_auth';
import setAuthToken from './util/setAuthToken';
// === comps ===
import Hello from './components/main/Hello';
import Dash from './components/main/Dash';
import Ctrl from './components/main/Ctrl';
import Open from './components/main/Open';

import Navi from './components/nav/NavStd';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import Alert from './components/warn/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

import CreateProfile from './components/self/CreateProfile';
import EditProfile from './components/self/EditProfile';
import Profiles from './components/self/Profiles';

// === Style ===
import './sass/App.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //  Research: React Hooks: useEffect 'infinite loop' , second parameter
  //  https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Navi />
          <section className='container fill-window'>
            <Route exact path='/' component={Hello} />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dash' component={Dash} />
              <PrivateRoute exact path='/ctrl' component={Ctrl} />
              <PrivateRoute exact path='/open' component={Open} />

              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <Route exact path='/profiles' component={Profiles} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
