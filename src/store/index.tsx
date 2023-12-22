import {configureStore} from "@reduxjs/toolkit";
import saisieSlice from "./Slice/saisieSlice.ts";
import categorySlice from "./Slice/categorySlice.ts";
import expenseSlice from "./Slice/expenseSlice.ts";
import revenuSlice from "./Slice/revenuSlice.ts";

const store = configureStore({
    reducer: {
        saisie: saisieSlice.reducer,
        category: categorySlice.reducer,
        expense: expenseSlice.reducer,
        revenu: revenuSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
})

store.subscribe(() => {
    localStorage.setItem("money-minder-store", JSON.stringify(store.getState()))
})
export default store;