import React, { Component } from 'react';
import {Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter} from 'react-router-dom';
import AboutUs from './Components/AboutUs';

class Home extends Component {
  render() {
    return (
      <div>
        Hello
        <br/>
        <button onClick={() => this.props.history.push({ pathname: "/home/about" })}>About Us</button>
        <br/>
        <br/>
        <Switch>
          <Route exact path="/home/about" component={AboutUs}></Route>
        </Switch>
      </div>
    );
  }
}


export default withRouter(Home);
