import { createSlice } from "@reduxjs/toolkit";

const pointsSlice = createSlice({
  name: "points",
  initialState: 0,
  reducers: {
    increasePoints: (state, action) => {
      state = state += action.payload;
    },
  },
});
export const { increasePoints } = pointsSlice.actions
export default pointsSlice.reducer
