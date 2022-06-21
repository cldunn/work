import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import restService from "../rest-service";

const initialState: any = {}

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
    reducers: {}
})
