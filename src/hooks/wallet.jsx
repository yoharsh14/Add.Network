import { createSlice } from "@reduxjs/toolkit";

const walletInitialState = { provider: null, connected: false, chainId: null };

export const walletSlice = createSlice({
  name: "wallet",
  initialState: walletInitialState,
  reducers: {
    update(state, action) {
      console.log(action.payload);
      state.provider = action.payload;
      state.connected = true;
    },
    addChainId(state, action) {
      state.chainId = action.payload;
    },
  },
});

export const walletAction = walletSlice.actions;
