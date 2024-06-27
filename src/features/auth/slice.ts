import { createSlice } from "@reduxjs/toolkit";
import { Slice } from "./types";

const initialState: Slice = {
  user: {
    name: "",
    cellPhone: "",
  },
  token: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signOut(state) {
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
});

export const { signIn, signOut } = slice.actions;
export default slice.reducer;
