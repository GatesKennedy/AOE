import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === comps ===
import Hello from './components/main/Hello';
import Navi from './components/nav/NavStd';
import Dash from './components/main/Dash';
import Ctrl from './components/main/Ctrl';
import Open from './components/main/Open';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/warn/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './Rdx_actions/axn_auth';
import setAuthToken from './util/setAuthToken';
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
          <Route exact path='/' component={Hello} />
          <section className='container'>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dash' component={Dash} />
              <PrivateRoute exact path='/ctrl' component={Ctrl} />
              <PrivateRoute exact path='/open' component={Open} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
