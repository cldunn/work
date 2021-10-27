import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import restService from "../rest-service";

interface PresidentInterface {
  firstName: string,
  lastName: string[]
}

interface HomeSliceState {
  president: PresidentInterface
}

const initialState:HomeSliceState = {
    president: null
}


// thunk functions
// createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise (or value if await).
// It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator 
// that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
export const findWashington = createAsyncThunk('home/findWashington', async (payload: any) => {
    // retrieves jsonResp.data
    const data = await restService.get(payload.url);
    return data;
})
 
export const findAdams = createAsyncThunk('home/findAdams', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.get(payload.url);
  return data;
})

export const findJefferson = createAsyncThunk('home/findJefferson', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.get(payload.url, payload.params);
  return data;
})

export const findLincoln = createAsyncThunk('home/findLincoln', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.get(payload.url, payload.params);
  return data;
})

export const findWilson = createAsyncThunk('home/findWilson', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.get(payload.url, payload.params);
  return data;
})

export const findTruman = createAsyncThunk('home/findTruman', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.get(payload.url, payload.params);
  return data;
})

export const findEisenhower = createAsyncThunk('home/findEisenhower', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.post(payload.url, payload.params);
  return data;
})

export const findKennedy = createAsyncThunk('home/findKennedy', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.post(payload.url, payload.params);
  return data;
})

export const findJohnson = createAsyncThunk('home/findJohnson', async (payload: any) => {
  // retrieves jsonResp.data
  const data = await restService.post(payload.url, payload.params);
  return data;
})

export const findReagan = createAsyncThunk('home/findReagan', async (payload: any) => {
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
    homeSetData(state, action) {
      state.president = action.payload.person;
    },
    homeClearData(state) {
      state.president = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(findWashington.pending, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findWashington: ', action);
    })
    .addCase(findWashington.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findWashington: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findWashington.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findWashington rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findAdams.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findAdams: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findAdams.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findAdams rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findJefferson.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findJefferson fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findJefferson.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findJefferson rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findLincoln.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findLincoln fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findLincoln.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findLincoln rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findWilson.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findWilson fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findWilson.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findWilson rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findTruman.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findTruman fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findTruman.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findTruman rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findEisenhower.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findEisenhower fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findEisenhower.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findEisenhower rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findKennedy.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findKennedy fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findKennedy.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findKennedy rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findJohnson.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findJohnson fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findJohnson.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findJohnson rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
    .addCase(findReagan.fulfilled, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findReagan fullfilled: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeSetData(state, action);
    })
    .addCase(findReagan.rejected, (state, action) => {
      // action.payload === jsonResp.data
      console.log('extraReducers findReagan rejected: ', action);

      // can use caseReducers to indirectly update state
      homeSlice.caseReducers.homeClearData(state);  
    })
  }
});

// selectors go here
export const selectPresident = (state: any): PresidentInterface => state.home.president;

export const { homeSetData, homeClearData } = homeSlice.actions

export default homeSlice.reducer