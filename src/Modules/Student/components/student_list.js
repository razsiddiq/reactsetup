import React, { Component } from "react";
import { Route, Switch } from "react-router";
import * as actions from "../../../ReduxApi/Home/action";
import { Map } from "immutable";
 
import {
    withRouter
} from "react-router-dom";
import { connect } from "react-redux";


class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        //this.props.getPrograms('1');
    }

    render() {
        return (

            <div className="">
                Tabs
            </div>

        );
    }

   
}


export default connect(null, actions)(StudentList);

