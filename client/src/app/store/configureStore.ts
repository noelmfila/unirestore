import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../../feature/contact/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { basketSlice } from "../../feature/basket/basketSlice";

// export function configureStore(){
//     return createStore(counterReducer);
// }

export const store = configureStore({
    reducer:{
        basket: basketSlice.reducer
        // counter: counterSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//custom hooka instead of useDispatch and useSelector
export const useAppDispatch =() => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;