import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    removeItem(
      state,
      action: PayloadAction<{
        type: string;
        eventId: string;
      }>
    ) {
      console.log(action.payload);
      console.log(state.items);
      state.items = state.items.filter(
        (item) =>
          item.event.id !== action.payload.eventId &&
          item.ticket.type !== action.payload.type
      );
    },
  },
});

export const { addItem, removeItem } = slice.actions;
export default slice.reducer;
