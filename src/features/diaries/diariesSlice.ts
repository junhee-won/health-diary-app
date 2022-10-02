import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setAsyncStorage } from "../../modules/AsyncStorageHelper";

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

interface PayloadActionProps {
  yearMonth: string;
  date: string;
  diary: DiaryState;
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
    updateDiary: (state, action: PayloadAction<PayloadActionProps>) => {
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
      setAsyncStorage("healthDiaryAppStoarge", state);
    },
    setDiaries: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDiary, setDiaries } = diariesSlice.actions;

export default diariesSlice.reducer;
