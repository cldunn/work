import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import restService from "./rest-service";

interface MessageInterface {
  content: string,
  details: string[]
}

interface CommonSliceState {
  isLoading: boolean,
  status: string
  showAlert: boolean,
  alertMessage: string,
  showModal: boolean,
  modalMessage: MessageInterface
}

const initialState:CommonSliceState = {
    isLoading: false,
    status: 'success',
    showAlert: false,
    alertMessage: null,
    showModal: false,
    modalMessage: null
}

// thunk functions
// createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise (or value if await).
// It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator 
// that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
export const initApp = createAsyncThunk('common/initApp', async () => {
  // retrieves jsonResp.data
  const data = await restService.get('/initApp');
  return data;
})

// "mutating" code is okay inside of createSlice!
// createSlice is a function that accepts a "slice name", an initial state, 
// an object full of reducer functions, and an object full of extraReducers for thunk reducers
const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    commonIsLoading(state, action) {
      state.isLoading = action.payload
    },
    commonOpenAlert(state, action) {
      const { status, alertMessage} = action.payload;
  
      state.status = status || 'success'
      
      state.showAlert = true;
      state.alertMessage = alertMessage;
      
      state.showModal = false;
      state.modalMessage = null;
    },
    commonCloseAlert(state) {
      state.status = status || 'success'

      state.showAlert = false;
      state.alertMessage = null;

      state.showModal = false;
      state.modalMessage = null
    },
    commonOpenModal(state, action) {
      const { status, modalMessage} = action.payload;
  
      state.status = status || 'success'

      state.showAlert = false;
      state.alertMessage = null;

      state.showModal = true;
      state.modalMessage = {
        content: modalMessage.content,
        details: modalMessage.details
      }
    },
    commonCloseModal(state) {
      state.status = status || 'success'

      state.showAlert = false;
      state.alertMessage = null;

      state.showModal = false;
      state.modalMessage = null
    }
  }
})

// selectors go here
export const selectIsLoading = (state: any): boolean => state.common.isLoading;
export const selectStatus = (state: any): string => state.common.status;
export const selectShowAlert = (state: any): boolean => state.common.showAlert;
export const selectAlertMessage = (state: any): string => state.common.alertMessage;
export const selectShowModal = (state: any): boolean => state.common.showModal;
export const selectModalMessage = (state: any): MessageInterface => state.common.modalMessage;

export const { commonIsLoading, commonOpenModal, commonCloseModal } = commonSlice.actions

export default commonSlice.reducer