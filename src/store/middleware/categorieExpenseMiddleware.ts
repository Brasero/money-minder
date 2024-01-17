import {deleteCategory} from "../Slice/categorySlice.ts";
import {updateExpenseCategory} from "../Slice/expenseSlice.ts";
import {StoreState} from "../index.tsx";
import {Middleware} from "redux";

const categorieExpenseMiddleware: Middleware<{}, StoreState> = (store) => (next) => (action) => {

    if(action.type === deleteCategory.toString()) {
        store.dispatch(updateExpenseCategory(action.payload.value))
    }

    return next(action);
}

export default categorieExpenseMiddleware;