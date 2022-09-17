import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "../features/record/recordSlice";

export const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
