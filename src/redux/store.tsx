import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contacts";

export const store = configureStore({
  reducer: {
    contactInfo: contactSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;