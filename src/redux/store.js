import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initialData";
import { userReducer } from "./slices/userSlice";
import { filterReducer } from "./slices/filterSlice";
import { cartReducer } from "./slices/cartSlace";

export const store = configureStore({
    reducer: {
     user: userReducer,
     filter: filterReducer,    
     cart: cartReducer,
    },
    preloadedState: getInitState(),
});
store.subscribe(() => localStorage.setItem('reduxStateX', JSON.stringify(store.getState())));
