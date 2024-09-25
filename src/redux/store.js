import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../functions/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
