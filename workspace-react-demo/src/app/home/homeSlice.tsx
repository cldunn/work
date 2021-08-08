import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import restService from "../rest-service";

interface PersonInterface {
  firstName: string,
  lastName: string[]
}

interface HomeSliceState {
  person: PersonInterface
}

const initialState:HomeSliceState = {
    person: null
}


// thunk functions
export const getPerson = createAsyncThunk('home/getPerson', async () => {
    // retrieves jsonResp.data
    const data = await restService.get('v1/simpleMvc/getPerson');
    return data;
})
 
// "mutating" code is okay inside of createSlice!
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    homeSetData(state, action) {
      state.person = action.payload.person;
    },
    homeClearData(state) {
      state.person = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPerson.pending, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers getPerson: ', action);
    })
    .addCase(getPerson.fulfilled, (state, action) => {
        // action.payload === jsonResp.data
        console.log('extraReducers getPerson: ', action);

        // can use caseReducers to indirectly update state
        homeSlice.caseReducers.homeSetData(state, action);
      })
      .addCase(getPerson.rejected, (state, action) => {
        // action.payload === jsonResp.data
        console.log('extraReducers getPerson rejected: ', action);

        // can use caseReducers to indirectly update state
        homeSlice.caseReducers.homeClearData(state);  
      })
  }
});

// selectors go here
export const selectPerson = (state: any): PersonInterface => state.home.person;

export const { homeSetData, homeClearData } = homeSlice.actions

export default homeSlice.reducer