import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../utils/constants";
import Storage from "../services/storage.service";


let initialState = {
    token: ""
};

export const LoginReducer = (state=initialState, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST: return state;
        case LOGIN_SUCCESS: 
        
        Storage.set('token', action.payload.token);
        return {
            ...state,
            token: action.payload.token
        };
        default: return state;
    }
}