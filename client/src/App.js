import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hello from './components/layout/Hello';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Open from './components/layout/Open';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Hello />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
