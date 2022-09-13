import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import restService from '../rest-service';

interface HomeInterface {
    fname: string,
    lname: string,
    gender:string
}

interface IHomeSliceState {
    form: HomeInterface
}

const initialState:IHomeSliceState = {
    form: {
        fname: 'Sean',
        lname: 'Dunn',
        gender: 'M'
    }
}

// thunk functions
// createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise (or value if await).
// It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator 
// that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
export const getPageConfig = createAsyncThunk('home/pageConfig', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(payload.url);
    return data;
})

export const getPerson = createAsyncThunk('home/getPerson', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(payload.url);
    return data;
})

export const getPersons = createAsyncThunk('home/getPersons', async (payload: any) => {
    // retrieves jsonResp.data
    console.log(initialState.form);
    const data = await restService.get(payload.url, payload.params);
    return data;
})

export const updPerson = createAsyncThunk('home/updPerson', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.post(payload.url, payload.params);
    return data;
})

// "mutating" code is okay inside of createSlice!
// createSlice is a function that accepts a "slice name", an initial state, 
// an object full of reducer functions, and an object full of extraReducers for thunk reducers
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setForm(state, action) {
            state.form = action.payload.person;
        },
        setForms(state, action) {
            state.form = action.payload.persons[0];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPerson.fulfilled, (state, action) => {
            // action.payload === jsonResp.data
            // can use caseReducers to indirectly update state
            homeSlice.caseReducers.setForm(state, action)
        })
        .addCase(getPersons.fulfilled, (state, action) => {
            // action.payload === jsonResp.data
            // can use caseReducers to indirectly update state
            homeSlice.caseReducers.setForms(state, action)
        })
        .addCase(updPerson.fulfilled, (state, action) => {
            // action.payload === jsonResp.data
            // can use caseReducers to indirectly update state
            homeSlice.caseReducers.setForm(state, action)
        })
    }
})

export const selectForm = (state: any): HomeInterface => state.home.form;

export default homeSlice.reducer