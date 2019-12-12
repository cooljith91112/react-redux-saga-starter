import { all } from "redux-saga/effects";
import { LoginSaga } from "./login.middleware";

export default function* rootMiddleware() {
    yield all([
        ...LoginSaga,
    ]);
}