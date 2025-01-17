import React from "react";
import { Route, Redirect } from "react-router-dom";
import Storage from "../services/storage.service";
import Permissions from "./permission.router";
import { RandomKey } from "../utils/random.key";

export const CustomRouter = ({ xComponent: Component, ...xProps }) => {
    return (
      <Route
        {...xProps}
        render={props => {
          let returnProps = {...xProps, ...props};
          let token = Storage.get("token");
          let pathName = props.match.path;
          if (!token && pathName !== "/login") {
            return <Redirect to="/login" />;
          } else if (pathName === "/login" && token) {
  
            return <Redirect to="/dashboard" />;
          }else if (pathName === "/" && token) {
  
            return <Redirect to="/dashboard" />;
          }
          return <Permissions {...returnProps} key={RandomKey.generate()} Component={Component}/>;
        }}
      />
    );
  };