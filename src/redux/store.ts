import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.ts"; // Import user slice (create this next)

// Configure Redux Store
const store = configureStore({
  reducer: {
    user: userReducer, // Add more reducers here if needed
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
