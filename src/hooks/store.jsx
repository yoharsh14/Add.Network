import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui";
import { listSlice } from "./list";
import { walletSlice } from "./wallet";
export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    list: listSlice.reducer,
    wallet: walletSlice.reducer,
  },
});
