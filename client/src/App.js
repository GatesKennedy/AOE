import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === comps ===
import Hello from './components/main/Hello';
import Dash from './components/main/Dash';
import Ctrl from './components/main/Ctrl';
import Open from './components/main/Open';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/warn/Alert';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './Rdx_actions/axn_auth';
import setAuthToken from './util/setAuthToken';
// === Style ===
import './App.css';

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
          <Route exact path='/' component={Hello} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/dash' component={Dash} />
              <Route exact path='/ctrl' component={Ctrl} />
              <Route exact path='/open' component={Open} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
