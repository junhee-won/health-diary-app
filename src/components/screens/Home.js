import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import HealthCalendar from "src/components/HealthCalendar";
import { useSelector, useDispatch } from "react-redux";
import { updateRecord } from "../../features/record/recordSlice";

export default function Home({ navigation }) {
  const records = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <HealthCalendar navigation={navigation} />
      <Button
        icon="dumbbell"
        onPress={() =>
          navigation.push("AddDiary", {
            date: new Date().toISOString().split("T")[0],
            diary: null,
            type: "start",
          })
        }
      >
        운동하기
      </Button>
      <Button onPress={() => console.log(records)}>test</Button>
      <Button
        onPress={() => {
          const _records = JSON.parse(JSON.stringify(records));
          console.log(_records.record[0].healths[0]);
          _records.record[0].healths[0].sets.push({ weight: 50, num: 100 });
          console.log(_records.record[0]);
          dispatch(updateRecord(_records.record[0]));
        }}
      >
        set 추가
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
