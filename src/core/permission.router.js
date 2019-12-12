import React from "react";
import { Route, Redirect } from "react-router-dom";

export const Permissions = ({Component: Component, ..._props})=>{
    
    return (
        <Route
          render={props => {
            let returnProps = {..._props, ...props};
            // let token = Storage.get("token");
            let pathName = props.match.path;
            console.log(returnProps);
            return <Component {...returnProps} />;
          }}
        />
      );
}

export default Permissions;