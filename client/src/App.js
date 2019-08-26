import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Hello from './components/main/Hello';
import Dash from './components/main/Dash';
import Ctrl from './components/main/Ctrl';
import Open from './components/main/Open';
import Join from './components/auth/Join';
import Login from './components/auth/Login';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Hello} />
      <section className='container'>
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
);

export default App;
