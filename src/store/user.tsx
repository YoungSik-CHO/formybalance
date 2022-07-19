import { createSlice } from "@reduxjs/toolkit";
import { userInterF } from "../types/loginTypes"

export let user = createSlice({
    name : 'user',
    initialState : () : userInterF   => {
        return JSON.parse(localStorage.getItem('user') as string)[0]
    },
    reducers : {
        changeName(state : userInterF, actions : any) {
            state.name = actions.payload
        },
        changePw(state : userInterF, actions : any) {
            state.pw = actions.payload
        }
    }
})

export let { changeName, changePw } = user.actions;
