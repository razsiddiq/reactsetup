import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './components/Login';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div className="">
        <button
          type="button"
          onClick={() => history.push({ pathname: '/auth/login' })}
        >
          Login
        </button>
        <Switch>
          <Route exact path="/auth/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

Auth.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Auth);
