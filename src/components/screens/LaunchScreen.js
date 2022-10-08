import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
          // navigation.replace("HomeScreen");
        }
      );
    })();
  });
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("../../../assets/health_app_logo.png")}
      />
      <Image
        style={{ width: 300, height: 300, margin: 50 }}
        source={require("../../../assets/text.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005eb8",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
