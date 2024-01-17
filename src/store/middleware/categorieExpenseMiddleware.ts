import {deleteCategory} from "../Slice/categorySlice.ts";
import {updateExpenseCategory} from "../Slice/expenseSlice.ts";

const categorieExpenseMiddleware = (store: any) => (next: any) => (action: any) => {

    if(action.type === deleteCategory.toString()) {
        store.dispatch(updateExpenseCategory(action.payload.value))
    }

    return next(action);
}

export default categorieExpenseMiddleware;