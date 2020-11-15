import React, { Component } from "react";
import { Route, Switch } from "react-router";
import StudentList from "./components/student_list"

import {
    withRouter
} from "react-router-dom";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <div className="">
                <button onClick={() => this.props.history.push({ pathname: "/program/listv1" })}>list</button>
                <Switch>
                    <Route exact path="/program/listv1" component={StudentList}>
                    </Route>
                </Switch>
            </div>
        );
    }

}


export default withRouter(Student);

