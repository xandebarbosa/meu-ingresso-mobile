import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Slice, Ticket } from "./types";

const initialState: Slice = {
  allId: [],
  byId: {},
};

const slice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    createTickets(state, action: PayloadAction<Ticket[]>) {
      state.byId = action.payload.reduce<Slice["byId"]>((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
      state.allId = Object.keys(state.byId);
    },
  },
});

export const { createTickets } = slice.actions;
export default slice.reducer;
