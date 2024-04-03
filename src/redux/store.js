import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initialData";
import { userReducer } from "./slices/userSlice";
import { filterReducer } from "./slices/filterSlice";
import { quantityReducer } from "./slices/quantitySlice";

export const store = configureStore({
    reducer: {
     user: userReducer,
     filter: filterReducer,
     quantity: quantityReducer
    },
    preloadedState: getInitState(),
});
store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())));
