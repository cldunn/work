import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import restService from '../rest-service';

// import restService from 'src/app/rest-service';

interface FormInterface {
    name: string,
    password: string
}

interface ILoginSliceState {
    publicKey: string,
    form: FormInterface
}

const initialState:ILoginSliceState = {
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
export const getPublicKey = createAsyncThunk('login/getPublicKey', async (paylod: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(paylod.url);
    return data;
})
  
export const login = createAsyncThunk('login/login', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.post(payload.url, payload.params);
    return data;
})

// "mutating" code is okay inside of createSlice!
// createSlice is a function that accepts a "slice name", an initial state, 
// an object full of reducer functions, and an object full of extraReducers for thunk reducers
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSetPublicKey(state, action) {
            state.publicKey = action.payload.publicKey;
          }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPublicKey.fulfilled, (state, action) => {
            // action.payload === jsonResp.data
            // can use caseReducers to indirectly update state
            loginSlice.caseReducers.loginSetPublicKey(state, action);
        })
    }
})

export const selectPublicKey = (state: any): string => state.login.publicKey;
export const selectForm = (state: any): FormInterface => state.login.form;

export default loginSlice.reducer