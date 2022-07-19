import { createSlice } from "@reduxjs/toolkit";

let userCache = createSlice({
    name : 'userCache',
    initialState : { value : 0},
    reducers : {
        // user 로그인 성공
        userLogin(state : {value : number}) {
            state.value = 1
        }
    }
});

export let { userLogin }  = userCache.actions

export default userCache;