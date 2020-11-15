import React from 'react';
import { Route } from 'react-router-dom';
import Student from "../Modules/Student";

export const RoutePages = () => {
    return(
        <>
            <Route path="/program"  component={Student} />
        </>
    );
};