import {configureStore} from "@reduxjs/toolkit";
import saisieSlice from "./Slice/saisieSlice.ts";
import categorySlice from "./Slice/categorySlice.ts";
import expenseSlice from "./Slice/expenseSlice.ts";
import revenuSlice from "./Slice/revenuSlice.ts";
import {saveMounth, saveStorage} from "../utils/localStorage.ts";
import categorieExpenseMiddleware from "./middleware/categorieExpenseMiddleware.ts";
import user from "./Slice/user.tsx";

const store = configureStore({
    reducer: {
        saisie: saisieSlice.reducer,
        category: categorySlice.reducer,
        expense: expenseSlice.reducer,
        revenu: revenuSlice.reducer,
        user
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                categorieExpenseMiddleware
            ])
})

store.subscribe(() => {
    saveStorage(store.getState())
    saveMounth((new Date()).getMonth())
})

export default store;