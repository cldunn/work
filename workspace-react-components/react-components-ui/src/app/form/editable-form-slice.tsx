import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import restService from "../rest-service";

interface CriteriaInterface {
  id: number
}

interface FormInterface {
    name: string,
    password: string,
    email: string,
    gender: string,
    date: string,
    currency: string
}
  
interface FormSliceState {
    criteria: CriteriaInterface,
    form: FormInterface
}
  
const initialState:FormSliceState = {
    criteria: null,
    form: null
}

// thunk functions
// createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise (or value if await).
// It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator 
// that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
export const findRecord = createAsyncThunk('editable-form/findRecord', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(payload.url);
    return data;
})

export const saveRecord = createAsyncThunk('editable-form/saveRecord', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.post(payload.url, payload.params);
  return data;
})

// "mutating" code is okay inside of createSlice!
// createSlice is a function that accepts a "slice name", an initial state, 
// an object full of reducer functions, and an object full of extraReducers for thunk reducers
const editableFormSlice = createSlice({
    name: 'editableForm',
    initialState,
    reducers: {
      editableFormSetData(state, action) {
        console.log('recordDto: ', action.payload.recordDto);
        state.form = action.payload.recordDto;
        // state.form.currency = '1234,56';
        // state.form.date = new Date(Date.parse(action.payload.recordDto.date)).toLocaleDateString();
      },
      editableFormClearData(state) {
        // axios-interceptor handles error messaging
        state.form = null;
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(findRecord.fulfilled, (state, action) => {
        // action.payload === jsonResp.data
        console.log('extraReducers findRecord: ', action);
  
        // can use caseReducers to indirectly update state
        editableFormSlice.caseReducers.editableFormSetData(state, action);
      })
      .addCase(findRecord.rejected, (state, action) => {
        // action.payload === jsonResp.data
        console.log('extraReducers findRecord rejected: ', action);
  
        // can use caseReducers to indirectly update state
        editableFormSlice.caseReducers.editableFormClearData(state);  
      })
      .addCase(saveRecord.fulfilled, (state, action) => {
        // action.payload === jsonResp.data
        console.log('extraReducers findRecord: ', action);
  
        // can use caseReducers to indirectly update state
        editableFormSlice.caseReducers.editableFormSetData(state, action);
      })
      .addCase(saveRecord.rejected, (state, action) => {
        // action.payload === jsonResp.data
        console.log('extraReducers findRecord rejected: ', action);
  
        // can use caseReducers to indirectly update state
        editableFormSlice.caseReducers.editableFormClearData(state);  
      })
    }
})

// selectors go here
export const selectCriteria = (state: any): CriteriaInterface => state.editableForm.criteria;
export const selectForm = (state: any): FormInterface => state.editableForm.form;

export const { editableFormSetData, editableFormClearData } = editableFormSlice.actions

export default editableFormSlice.reducer