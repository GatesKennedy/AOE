import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === comps ===
import Hello from './components/main/Hello';
import Dash from './components/main/Dash';
import Ctrl from './components/main/Ctrl';
import Open from './components/main/Open';
import Join from './components/auth/Join';
import Login from './components/auth/Login';
import Alert from './components/warn/Alert';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './store';
// === Style ===
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path='/' component={Hello} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/join' component={Join} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
        <Route exact path='/dash' component={Dash} />
        <Route exact path='/ctrl' component={Ctrl} />
        <Route exact path='/open' component={Open} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
