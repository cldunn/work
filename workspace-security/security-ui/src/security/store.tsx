import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import logger from 'redux-logger';


import commonReducer from './common-slice'
import loginReducer from './login/login-slice';
import homeReducer from './home/home-slice';

// abstraction over the standard Redux createStore function that adds good defaults to the store setup
const store = configureStore({
  reducer: {
    common: commonReducer,
    login: loginReducer,
    home: homeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

/* 
  The default Dispatch type does not know about thunks or other middleware. 
  In order to correctly dispatch thunks, you need to use the specific 
  customized AppDispatch type from the store that includes the thunk middleware types
*/
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export default store


