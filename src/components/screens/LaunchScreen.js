import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import HealthCalendar from "src/components/HealthCalendar";
import { useSelector, useDispatch } from "react-redux";
import { updateRecord } from "../../features/record/recordSlice";
import { useIsFocused } from "@react-navigation/native";
import { getAsyncStorage } from "../../modules/AsyncStorageHelper";
import { setAsyncStorage } from "../../modules/AsyncStorageHelper";

export default function LaunchScreen({ navigation }) {
  useEffect(() => {
    (async function () {
      setAsyncStorage("healthDiaryAppStoarge", {
        test: "abc",
      });
      const timer = new Promise((resolve, reject) =>
        setTimeout(() => resolve(true), 3000)
      );
      await Promise.all([timer, getAsyncStorage("healthDiaryAppStoarge")]).then(
        ([res1, res2]) => {
          console.log(res1);
          console.log(res2);
        }
      );
    })();
  });
  return (
    <View style={styles.container}>
      <Text>LaunchSceren</Text>
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
