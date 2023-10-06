import {createSlice } from "@reduxjs/toolkit";

const uiInitialState = { darkMode: false };

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    toggle(state) {
      state.darkMode = !state.darkMode;
    },
  },
});
export const uiAction = uiSlice.actions;