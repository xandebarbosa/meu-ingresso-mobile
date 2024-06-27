import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import eventsReducer from "./events";
import cartReducer from "./cart";
import ticketsReducer from "./tickets";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    cart: cartReducer,
    tickets: ticketsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
