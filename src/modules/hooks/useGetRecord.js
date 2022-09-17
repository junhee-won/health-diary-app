import { useState } from "react";
import { useSelector } from "react-redux";

export default function useGetRecord(yearMonth, date) {
  const records = useSelector((state: RootState) => state);
  const index = records.records.findIndex(
    (item) => item.yearMonth === yearMonth
  );
  if (index == -1) {
    return useState(null);
  } else {
    return useState(
      JSON.parse(JSON.stringify(records.records[index].dailyRecords[date]))
    );
  }
}
