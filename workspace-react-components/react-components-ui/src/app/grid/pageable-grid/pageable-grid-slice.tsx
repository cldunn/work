import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import restService from "../../rest-service";

// interfaces, move to types

// state
const initialState:any = {
    gridData: []
}

// thunk functions
// createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise (or value if await).
// It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator 
// that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
export const init = createAsyncThunk('pageable-grid/init', async () => {
    // retrieves jsonResp.data
    const data = await restService.get('/pageable-grid/init');
    return data;
})
  
export const searchItems = createAsyncThunk('pageable-grid/searchItems', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(payload.url, {...payload.params.pageInfo, ...payload.params.criteria});
    return data;
})

// "mutating" code is okay inside of createSlice!
// createSlice is a function that accepts a "slice name", an initial state, 
// an object full of reducer functions, and an object full of extraReducers for thunk reducers
const pageableGridSlice = createSlice({
    name: 'pageable-grid',
    initialState,
    reducers: {}
});
  
// selectors go here

// actions go here

export default pageableGridSlice.reducer