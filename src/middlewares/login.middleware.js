import { put, call, fork, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../utils/constants";
import { loginMock } from "../modules/login/login.service";
import { history } from '../core/store';
function* loginWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginWorker);
}

function* loginWorker(action) {
    let { email, password } = action;
    let res = yield call(loginApi, { email, password });
    if (res && res.data) {
        let { token } = res.data;
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                token
            }
        });
        history.push('/dashboard');
    }
    console.log(res);
}

function loginApi(params) {
    return loginMock(params);
}

export const LoginSaga = [fork(loginWatcher)];