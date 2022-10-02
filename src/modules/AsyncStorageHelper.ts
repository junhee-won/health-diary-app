import AsyncStorage from "@react-native-async-storage/async-storage";
import { MonthDiariesState } from "src/features/diaries/diariesSlice";

export const setAsyncStorage = async (
  key: string,
  value: Array<MonthDiariesState>
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
