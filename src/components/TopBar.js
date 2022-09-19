import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function TopBar({
  yearMonth,
  date,
  diaryType,
  onPressRightButton,
}) {
  const buttonText = diaryType === "start" ? "운동 끝" : "저장";
  return (
    <View style={styles.container}>
      <Text>
        {yearMonth}-{date}
      </Text>
      <Button icon="check" onPress={onPressRightButton}>
        {buttonText}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    height: 50,
    width: "100%",
  },
});
