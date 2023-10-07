import { configureStore, createSlice } from "@reduxjs/toolkit";
import { listInitialState } from "../constants/NetworkList";

export const listSlice = createSlice({
  name: "list",
  initialState: listInitialState,
  reducers: {
    update(state, action) {
      let temp = state.networks;
      temp.push(action.payload);
      state.networks = temp;
      console.log(action.payload);
    },
  },
});

export const listAction = listSlice.actions;
