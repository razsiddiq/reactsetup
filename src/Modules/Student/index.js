import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import StudentList from './components/student_list';

class Student extends Component {
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
          onClick={() => history.push({ pathname: '/program/listv1' })}
        >
          list
        </button>
        <Switch>
          <Route exact path="/program/listv1" component={StudentList} />
        </Switch>
      </div>
    );
  }
}

Student.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Student);
