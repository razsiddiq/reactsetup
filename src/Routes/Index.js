import React from 'react';
import { Route } from 'react-router-dom';
import Student from '../Modules/Student';
import Auth from '../Modules/Auth';

export const RoutePages = () => {
  return (
    <>
      <Route path="/program" component={Student} />
      <Route path="/auth" component={Auth} />
    </>
  );
};
