import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";
import * as Font from "expo-font";
Font.loadAsync({
  GamjaFlower: require("../../../assets/fonts/GamjaFlower-Regular.ttf"),
});

export default function TextInput({ value, fontSize, onChangeProps, color }) {
  const styles = StyleSheet.create({
    textInput: {
      flex: 1,
      color: color,
      fontFamily: "GamjaFlower",
      fontSize: fontSize,
      padding: 5,
    },
  });
  return (
    <RNTextInput
      style={styles.textInput}
      value={value}
      onChangeText={onChangeProps}
    />
  );
}
