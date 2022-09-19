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

interface DiaryState {
  startTime: string;
  endTime: string;
  healths: Array<HealthState>;
}

export interface MonthDiariesState {
  yearMonth: string;
  diaries: Array<DiaryState>;
}

const initialState: MonthDiariesState[] = [
  {
    yearMonth: "2022-09",
    diaries: new Array(32).fill(null),
  },
];

export const diariesSlice = createSlice({
  name: "diaries",
  initialState,
  reducers: {
    updateDiary: (state, action) => {
      console.log(action.payload);
      const index: number = state.findIndex(
        (item) => item.yearMonth === action.payload.yearMonth
      );
      if (index === -1) {
        const temp = {
          yearMonth: action.payload.yearMonth,
          diaries: new Array(32).fill(null),
        };
        temp[action.payload.date] = action.payload.diary;
        state.push(temp);
      } else {
        state[index].diaries[action.payload.date] = action.payload.diary;
      }
    },
    setDiaries: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDiary, setDiaries } = diariesSlice.actions;

export default diariesSlice.reducer;
