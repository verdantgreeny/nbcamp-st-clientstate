import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.text = action.payload;
    },
    resetMessage: (state) => {
      state.text = "";
    },
  },
});

export const { setMessage, resetMessage } = messageSlice.actions;
export default messageSlice.reducer;
