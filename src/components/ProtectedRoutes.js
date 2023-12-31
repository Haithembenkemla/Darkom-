import React from "react";
import { Route, Redirect } from "react-router-dom";


export default function ProtectedRoutes({ component: Component, ...rest }) {
  return (

    
    <Route
      {...rest}
      render={(props) => {
        const token = localStorage.getItem("token");

        
        if (token) {
          return <Component {...props} />;
        } else {
          
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}