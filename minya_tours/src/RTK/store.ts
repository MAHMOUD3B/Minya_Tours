import { configureStore } from "@reduxjs/toolkit";
import pointsReducer from "./Slices/points";
import popupReducer from "./Slices/popup";

import redeemCardsReducer from "./Slices/APIs/redeem_cards";
const Store = configureStore({
  reducer: {
    points: pointsReducer,
    popup: popupReducer,

    // APIs
    redeemCards: redeemCardsReducer,
  },
});
export default Store;
