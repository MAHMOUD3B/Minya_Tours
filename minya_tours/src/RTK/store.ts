import { configureStore } from "@reduxjs/toolkit";
import pointsReducer from "./Slices/points";
const Store = configureStore({
  reducer: {
    points: pointsReducer,
  },
});
export default Store;
