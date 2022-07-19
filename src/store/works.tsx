import { createSlice } from "@reduxjs/toolkit";
import { goWork } from "../common/writeWork";
import { WorkInterF } from "../types/commonTypes";

export let goWorks = createSlice({
    name : 'goWorks',
    initialState : () : WorkInterF[] => {
        return JSON.parse(localStorage.getItem('goWork') as string)
    },
    reducers : {
        goWorkAdd(state : WorkInterF[] , actions : any ) {
            
        }
    }
});

export let leaveWorks = createSlice({
    name : 'leaveWorks',
    initialState : () : WorkInterF[] => {
        return JSON.parse(localStorage.getItem('leaveWork') as string);
    },
    reducers : {
        leaveWorkAdd(state : WorkInterF[], actions : any) {

        }    
    }
});

export let { goWorkAdd } = goWorks.actions;
export let { leaveWorkAdd } = leaveWorks.actions;
