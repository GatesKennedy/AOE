import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hello from './components/layout/Hello';
import Join from './components/auth/Join';
import Login from './components/auth/Login';
import Dash from './components/layout/Dash';
import Ctrl from './components/layout/Ctrl';
import Open from './components/layout/Open';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Hello} />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Join} />
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
