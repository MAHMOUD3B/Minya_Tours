import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: false,
  reducers: {
    setPopupStatus: (state, action) => {

      return state = action.payload;
    },
  },
});

export const { setPopupStatus } = popupSlice.actions;
export default popupSlice.reducer;
