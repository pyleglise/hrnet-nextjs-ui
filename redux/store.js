import { configureStore } from '@reduxjs/toolkit'
import employeeListReducer from '../redux/reducers'
const isDeveloppement = process.env.NEXT_PUBLIC_MODE === 'developpement'
export default configureStore({
  reducer: {
    employeeList: employeeListReducer,
  },
  devTools: isDeveloppement,
})
