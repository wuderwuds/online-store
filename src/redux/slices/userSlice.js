import { createSlice } from "@reduxjs/toolkit";
import { myInitialData } from "../initialData";

const userSlice = createSlice({
    name: "user",
    initialState: myInitialData.user,
    reducers:{
        setUpUser(_, action) {
            return action.payload
        },
        cleanUser() {
           localStorage.removeItem('reduxStateX')
           return myInitialData.user  
        }
    }
})

export const { setUpUser, cleanUser } = userSlice.actions;
export const userReducer = userSlice.reducer;