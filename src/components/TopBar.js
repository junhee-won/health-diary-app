import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function TopBar({
  yearMonth,
  date,
  diaryType,
  onPressRightButton,
  isUpdated,
}) {
  const buttonText = diaryType === "start" ? "운동 끝" : "저장";
  return (
    <View style={styles.container}>
      <Text>
        {yearMonth}-{date}
      </Text>
      {(diaryType === "start" || isUpdated) && (
        <Button style={styles.button} icon="check" onPress={onPressRightButton}>
          {buttonText}
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
  button: {
    position: "absolute",
    right: 0,
  },
});
