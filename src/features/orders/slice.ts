
import { createSlice } from "@reduxjs/toolkit";
import { Slice } from "./types";


const initialState: Slice = {
    allId: ["1", "2", "3"],
    byId: {},
    loading: false,
    status: "idle",
};

const slice = createSlice({
    name: "orders",
    initialState,
    reducers: {        
    }
});
export default slice.reducer;