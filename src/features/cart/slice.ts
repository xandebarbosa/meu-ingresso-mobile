import { createSlice } from "@reduxjs/toolkit";
import { Slice } from "./types";

const initialState: Slice = {
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.ticket.type !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = slice.actions;
export default slice.reducer;
