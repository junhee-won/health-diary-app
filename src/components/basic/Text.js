import React from "react";
import { Text as ReactNativeText, StyleSheet } from "react-native";
import * as Font from "expo-font";
Font.loadAsync({
  GamjaFlower: require("../../../assets/fonts/GamjaFlower-Regular.ttf"),
});

export default function Text({ children, fontSize, color }) {
  const styles = StyleSheet.create({
    text: {
      color: color,
      fontFamily: "GamjaFlower",
      fontSize: fontSize,
      padding: 5,
    },
  });
  return <ReactNativeText style={styles.text}>{children}</ReactNativeText>;
}
