import React from "react";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { BsHouseFill } from "react-icons/bs";

import restService from "../rest-service";

import WorldTabContainer from './tabs/world-tab-container';

const initialState = {
    activeKey: 'home',
    panes: [{
        key: 'home',
        isDeleteEnabled: false,
        content: <WorldTabContainer />,
        icon: <BsHouseFill  style={{width: '1.5em', height: '1.5em', color: 'black'}} />
    }]
}

export const pageConfig = createAsyncThunk('cookie/pageConfig', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(payload.url);
    return data;
})


// "mutating" code is okay inside of createSlice!
// createSlice is a function that accepts a "slice name", an initial state, 
// an object full of reducer functions, and an object full of extraReducers for thunk reducers
const cookieSlice = createSlice({
    name: 'cookie',
    initialState,
    reducers: {
        addTab(state, action) {
            const ndx = state.panes.findIndex((tab) => tab.key === action.payload.key);
            state.activeKey = action.payload.key;
            if ( ndx < 0 ) {
                state.panes.push(action.payload);
            }
        },
        selectTab(state, action) {
            const ndx = state.panes.findIndex((tab) => tab.key === action.payload);
            if ( ndx >= 0 ) {
                state.activeKey = action.payload;
            }
        },
        deleteTab(state, action) {
            const selNdx = state.panes.findIndex((tab) => tab.key === action.payload);
            const curNdx = state.panes.findIndex((tab) => tab.key === state.activeKey);
            
            state.activeKey = selNdx === curNdx ? state.panes[selNdx - 1].key: state.activeKey;
            state.panes = state.panes.filter((st) => st.key != action.payload);
        }
    }
})

export const selectActiveKey = (state: any): string => state.cookie.activeKey;
export const selectPanes = (state: any): string => state.cookie.panes;

export const { addTab, selectTab, deleteTab } = cookieSlice.actions

export default cookieSlice.reducer