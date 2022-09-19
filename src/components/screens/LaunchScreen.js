import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setDiaries } from "../../features/diaries/diariesSlice";
import { getAsyncStorage } from "../../modules/AsyncStorageHelper";

export default function LaunchScreen({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const timer = new Promise((resolve, reject) =>
        setTimeout(() => resolve(true), 3000)
      );
      await Promise.all([timer, getAsyncStorage("healthDiaryAppStoarge")]).then(
        ([res1, res2]) => {
          dispatch(
            setDiaries(
              res2.diaries || [
                {
                  yearMonth: "2022-09",
                  diaries: new Array(32).fill(null),
                },
              ]
            )
          );
          navigation.replace("HomeScreen");
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
