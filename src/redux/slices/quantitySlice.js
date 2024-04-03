import { createSlice } from "@reduxjs/toolkit";
import { myInitialData } from "../initialData";

const quantitySlice = createSlice({
    name: "quantity",
    initialState: myInitialData.quantity,
    reducers:{
        setUpQuantity(_, action) {
            return action.payload
        }
  
    }
})

export const { setUpQuantity } = quantitySlice.actions;
export const quantityReducer = quantitySlice.reducer;