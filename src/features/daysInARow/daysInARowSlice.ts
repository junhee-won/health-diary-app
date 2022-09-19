import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DaysInARowState {
  daysInARow: number;
}

const initialState: DaysInARowState = {
  daysInARow: 10,
};

export const daysInARowSlice = createSlice({
  name: "daysInARow",
  initialState,
  reducers: {
    updateDaysInARow: (state, action) => {
      console.log("reducer is called ", state);
      state.daysInARow = action.payload;
      console.log("reducer is called ", state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDaysInARow } = daysInARowSlice.actions;

export default daysInARowSlice.reducer;
