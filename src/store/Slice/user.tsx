import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  dob: {
    date: string;
    age: string;
  };
  email: string;
  picture: {
    thumbnail: string;
    medium: string;
    large: string;
  },
  loadState: {
    state: "idle" | "pending" | "error" | "loaded";
    message: string;
  }
}

export const fetchUser = createAsyncThunk(
    "fetchUser",
    async () => {
      return (await axios.get("https://randomuser.me/api/")).data
    }
)

const initialState: IUser = {
  loadState: {
    state: "idle",
    message: ""
  }
} as IUser

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      console.log(action)
      state.loadState = {
        state: "pending",
        message: "Chargement des infos utilisateurs"
      }
    })
        .addCase(fetchUser.rejected, (state,action) => {
          console.log(action)
          state.loadState = {
            state: "error",
            message: "Une erreur est survenue lors du chargement des infos utilisateur"
          }
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          const u = action.payload.results[0]
          state.gender = u.gender
          state.name = u.name
          state.dob = u.dob
          state.email = u.email
          state.picture = u.picture
          state.loadState = {
            state: 'loaded',
            message: ""
          }
        })
  }
})

export const {} = user.actions;

export default user.reducer;