import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./basic/Text";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "react-native-paper";

export default function TopBar({
  yearMonth,
  date,
  diaryType,
  onPressRightButton,
  isUpdated,
}) {
  return (
    <View style={styles.container}>
      <Text fontSize={20} color="white">
        {yearMonth.slice(0, 4)}년&nbsp;
        {yearMonth.slice(5, 7)}월&nbsp;
        {date}일
      </Text>
      {(diaryType === "start" || isUpdated) && (
        <Button
          style={styles.button}
          mode="contained"
          onPress={onPressRightButton}
        >
          <Text fontSize={20} color="#005eb8">
            &nbsp;저장
          </Text>
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#005eb8",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 5,
  },
  button: {
    position: "absolute",
    right: 0,
    width: 80,
    margin: 10,
  },
});
