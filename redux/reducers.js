import { createSlice } from '@reduxjs/toolkit'

const employeeSlice = createSlice({
  name: 'employeeList',
  initialState: {
    data: [],
  },
  reducers: {
    setEmployeeList: (state, action) => {
      state.data = action.payload.data
    },
  },
})

export const { setEmployeeList } = employeeSlice.actions
export default employeeSlice.reducer
