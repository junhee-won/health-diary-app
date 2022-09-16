import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SetState {
  weight: number;
  num: number;
}

interface HealthState {
  name: string;
  sets: Array<SetState>;
}

export interface RecordState {
  date: string;
  startTime: string;
  endTime: string;
  healths: Array<HealthState>;
}

const initialState: RecordState[] = [
  {
    date: "20220916",
    startTime: "123",
    endTime: "46",
    healths: [{ name: "pullUp", sets: [{ weight: 123, num: 23 }] }],
  },
];

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    updateRecord: (state, action: PayloadAction<RecordState>) => {
      const index: number = state.findIndex(
        (item) => item.date === action.payload.date
      );
      if (index == -1) {
        state.push(action.payload);
      } else {
        state[index] = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateRecord } = recordSlice.actions;

export default recordSlice.reducer;
