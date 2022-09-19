import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface daysState {
  daysInARow: number;
  daysInAMonth: number;
}

const initialState: daysState = {
  daysInARow: 10,
  daysInAMonth: 10,
};

export const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    updateDaysInARow: (state, action) => {
      state.daysInARow = action.payload;
    },
    updateDaysInAMonth: (state, action) => {
      state.daysInAMonth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDaysInARow, updateDaysInAMonth } = daysSlice.actions;

export default daysSlice.reducer;
