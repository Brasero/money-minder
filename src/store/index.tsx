import {configureStore} from "@reduxjs/toolkit";
import saisieSlice from "./Slice/saisieSlice.ts";
import categorySlice from "./Slice/categorySlice.ts";
import expenseSlice from "./Slice/expenseSlice.ts";

const store = configureStore({
    reducer: {
        saisie: saisieSlice.reducer,
        category: categorySlice.reducer,
        expense: expenseSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
})

export default store;