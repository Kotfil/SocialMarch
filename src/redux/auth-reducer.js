import {authAPI} from "../api/api";
import React from "react";
import {Redirect} from "react-router-dom";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
        }
        default:
            return state;
    }
}


export const setAuthUserData = (id, email,login) => ({type: SET_USER_DATA, id, email,login});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me(`https://social-network.samuraijs.com/api/1.0/auth/me`,)
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email,login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}
export default authReducer;
