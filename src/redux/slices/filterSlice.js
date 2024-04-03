import { createSlice } from "@reduxjs/toolkit";
import { myInitialData } from "../initialData";


const filterSlice = createSlice({
  name: 'filter',
  initialState: myInitialData.filter,
  reducers: {
    changeSearchValue(state, action) {
      state.search = action.payload
    }
  }
})

export const { changeSearchValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
