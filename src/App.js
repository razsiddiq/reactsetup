import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './App.css';
import { RoutePages } from './Routes/Index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          render={() => {
            return <RoutePages />;
          }}
        />
      </Switch>
      <Link to="/program">Student</Link>
    </div>
  );
}

export default App;
