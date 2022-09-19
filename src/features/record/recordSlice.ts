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

interface DailyRecordState {
  startTime: string;
  endTime: string;
  healths: Array<HealthState>;
}

export interface RecordState {
  yearMonth: string;
  dailyRecords: Array<DailyRecordState>;
}

const initialState: RecordState[] = [
  {
    yearMonth: "2022-09",
    dailyRecords: new Array(32).fill(null),
  },
];

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    updateDailyRecord: (state, action) => {
      const index: number = state.findIndex(
        (item) => item.yearMonth === action.payload.yearMonth
      );
      if (index == -1) {
        const temp = {
          yearMonth: action.payload.yearMonth,
          dailyRecords: new Array(32).fill(null),
        };
        temp[action.payload.date] = action.payload.dailyRecord;
        state.push(temp);
      } else {
        state[index].dailyRecords[action.payload.date] =
          action.payload.dailyRecord;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDailyRecord } = recordSlice.actions;

export default recordSlice.reducer;
