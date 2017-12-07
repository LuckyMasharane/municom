import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
       const res = await fetch('/user/get-current-user', {credentials: "include"});
       const data = await res.json();
       console.log("data", data.user)
       
        dispatch({type: FETCH_USER, payload: data.user});
    }