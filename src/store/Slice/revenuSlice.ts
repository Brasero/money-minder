import {createSlice} from "@reduxjs/toolkit";
import {IRevenu} from "../../components/HomeComponents/Metrics/Income";
import {normalizeNumber} from "../../utils/utils.ts";
import {selectRevenues} from "../Selector";

export interface IRevenuState {
    revenues : IRevenu[];
    value: Omit<IRevenu, 'id'>;
    error: string;
}

const initialValue: Omit<IRevenu, 'id'> = {
    origin: "",
    amount: 0
}

const initialState: IRevenuState = {
    revenues: localStorage.getItem('money-minder-store') ? selectRevenues(JSON.parse(localStorage.getItem("money-minder-store"))) : [],
    value: initialValue,
    error: ""
}

const revenuSlice = createSlice({
    name: "revenue",
    initialState,
    reducers: {
        addRevenu(state) {
            if (state.value.origin.trim() === '' || state.value.amount <= 0) {
                state.error = "Merci de remplir tout les champs.";
                return
            }
            state.revenues.push({
                ...state.value,
                id: state.revenues.reduce((acc: number, current: IRevenu) => {
                    if(acc < current.id) {
                        return current.id
                    }
                    return acc
                }, 0) + 1,
                amount: normalizeNumber(state.value.amount)
            })
            state.value = initialValue
            state.error = ''
        },
        changeRevenuValue(state, action) {
            state.value[action.payload.name] = action.payload.value
            state.error = ""
        }
    }
})

export const {
    addRevenu,
    changeRevenuValue,
} = revenuSlice.actions

export default revenuSlice