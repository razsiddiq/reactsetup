import React from 'react';
import { Route } from 'react-router-dom';
import Student from "../Modules/Student"
export const RoutePages = (props) => {
    return(
        <>
            <Route path="/program"  component={Student} />
        </>
    )
}