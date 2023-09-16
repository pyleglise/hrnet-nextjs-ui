import { configureStore } from '@reduxjs/toolkit'
import employeeListReducer from '../redux/reducers'

export default configureStore({
  reducer: {
    employeeList: employeeListReducer,
  },
  devTools: true,
})
