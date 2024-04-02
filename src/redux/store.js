import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initialData";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
     user: userReducer,
    },
    preloadedState: getInitState(),
});
store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())));
