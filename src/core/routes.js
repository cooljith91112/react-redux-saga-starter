import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Redirect, Route } from "react-router-dom";
import { CustomRouter } from "./custom.router";
import LoginContainer from "../modules/login/login.container";
import DashBoardContainer from "../modules/dashboard/dashboard.container";
import { AppRoutes } from "./app.routes";

const Routes = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Suspense
                    fallback={<div style={{ display: "none" }}> Loading ...</div>}
                >
                    <Switch>
                        <CustomRouter path="/login" xComponent={LoginContainer} />
                        <CustomRouter path="/dashboard" xComponent={DashBoardContainer} />
                        {AppRoutes.map(_routes =>
                            <CustomRouter
                                key={_routes.path}
                                path={_routes.path}
                                xComponent={_routes.component}
                                permissions={_routes.permission}
                            />)}
                        <Redirect from="*" to="/login" push />
                    </Switch>
                </Suspense>
            </ConnectedRouter>
        </Provider>
    );
};

export default Routes;