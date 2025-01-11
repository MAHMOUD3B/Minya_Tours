import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRedeemCards = createAsyncThunk(
  "redeem-cards/fetchRedeemCards",
  async () => {
    try {
      const response = fetch("../../../../public/Data/redeem_cards.json")
        .then((res) => res.json())
        .then((data) => data);
      return response;
    } catch (error) {
      console.log("redeem cards can't fetched!", error);
    }
  }
);

const redeemCardsSlice = createSlice({
  name: "redeem-cards",
  initialState: {
    loading: false,
    cards: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRedeemCards.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRedeemCards.fulfilled, (state, action) => {      
      state.cards = action.payload;
    });
    builder.addCase(fetchRedeemCards.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default redeemCardsSlice.reducer;
