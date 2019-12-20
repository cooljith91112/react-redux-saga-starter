import React from "react";
import { Route } from "react-router-dom";

export const Permissions = (props)=>{
    let {Component} = props;
    return (
        <Route
          render={_props => {
            let returnProps = {..._props, ...props};
            return <Component {...returnProps} />;
          }}
        />
      );
}

export default Permissions;