import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { getData } from "src/modules/AsyncStorageHelper";

export default function Record({ route, navigation }) {
  const dateString = route?.params?.day?.dateString;
  const [record, setRecord] = React.useState(null);

  const onPressUpdateDiary = () => {
    navigation.push("UpdateRecordScreen", {
      date: dateString,
      record: record,
      type: "update",
    });
  };

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      (async () => {
        const _record = await getData(dateString);
        console.log("_record: ", _record);
        setRecord(_record);
      })();
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{dateString}</Text>
      {record !== null ? <Text>yes record</Text> : null}
      <Button icon="plus" onPress={onPressUpdateDiary}>
        운동 기록하기
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
