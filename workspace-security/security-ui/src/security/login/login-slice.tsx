import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import restService from '../rest-service';

interface FormInterface {
    name: string,
    password: string
}

interface ILoginSliceState {
    time: string;
    publicKey: string,
    form: FormInterface
}

const initialState:ILoginSliceState = {
    time: null,
    publicKey: null,
    form: {
        name: null,
        password: null
    }
}
// thunk functions
// createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise (or value if await).
// It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator 
// that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
export const getPublicKey = createAsyncThunk('login/getPublicKey', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(payload.url);
    return data;
})
  
export const login = createAsyncThunk('login/login', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.post(payload.url, {}, payload.headers);
    return data;
})

// "mutating" code is okay inside of createSlice!
// createSlice is a function that accepts a "slice name", an initial state, 
// an object full of reducer functions, and an object full of extraReducers for thunk reducers
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setPublicKey(state, action) {
            state.publicKey = action.payload.publicKey;
        },
        setTime(state, action) {
            state.time = action.payload.time;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPublicKey.fulfilled, (state, action) => {
            // action.payload === jsonResp.data
            // can use caseReducers to indirectly update state
            loginSlice.caseReducers.setPublicKey(state, action);
        })
        .addCase(login.fulfilled, (state, action) => {
            // action.payload === jsonResp.data
            // can use caseReducers to indirectly update state
            loginSlice.caseReducers.setTime(state, action);
        })
    }
})

export const selectPublicKey = (state: any): string => state.login.publicKey;
export const selectForm = (state: any): FormInterface => state.login.form;
export const selectTime = (state: any): string => state.login.time;

export default loginSlice.reducer