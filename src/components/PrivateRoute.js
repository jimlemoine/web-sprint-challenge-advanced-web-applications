import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({component:Component, ...rests}) {
  return (<Route {...rest} render={(props)=> {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to='/login' />;
    }
  }} />);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute