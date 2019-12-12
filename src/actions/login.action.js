import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../utils/constants";


export const loginRequest = (payload)=>{
    return {
        type: LOGIN_REQUEST,
        ...payload
    };
}

export const loginSuccess = (payload)=>{
    return {
        type: LOGIN_SUCCESS,
        ...payload
    };
}