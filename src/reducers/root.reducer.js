import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import LoadingReducer from "./loading.reducer";
import ErrorReducer from "./error.reducer";
import { LoginReducer } from "./login.reducer";

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        loading: LoadingReducer,
        error: ErrorReducer,
        login: LoginReducer
    });

export default createRootReducer;
