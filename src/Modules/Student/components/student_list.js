import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../ReduxApi/Home/action";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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

