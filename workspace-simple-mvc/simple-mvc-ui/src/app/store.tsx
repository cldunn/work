import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import logger from 'redux-logger';

import commonReducer from './common/common-slice'
import homeReducer from './home/home-slice'

const store = configureStore({
  reducer: {
    common: commonReducer,
    home: homeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export default store


