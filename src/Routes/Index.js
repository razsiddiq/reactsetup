import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Modules/Home/Index';
import Student from "../Modules/Student"
export const RoutePages = (props) => {
    return(
        <>
            <Route path="/program"  component={Student} />
            <Route path="/home" exact component={Home} />
        </>
    )
}