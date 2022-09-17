import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import HealthCalendar from "src/components/HealthCalendar";
import { useSelector, useDispatch } from "react-redux";
import { updateRecord } from "../../features/record/recordSlice";

export default function HomeScreen({ navigation }) {
  const records = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <HealthCalendar navigation={navigation} />
      <Button
        icon="dumbbell"
        onPress={() => {
          const date = new Date();
          const _month = date.getMonth();
          const month = _month < 9 ? `0${_month + 1}` : _month;
          navigation.push("UpdateRecordScreen", {
            yearMonth: `${date.getFullYear()}-${month}`,
            date: `${date.getDate()}`,
            hour: date.getHours(),
            minute: date.getMinutes(),
            recordType: "add",
          });
        }}
      >
        운동하기
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
