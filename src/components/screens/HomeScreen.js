import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import HealthCalendar from "src/components/HealthCalendar";
import updateDays from "src/modules/updateDays";

export default function HomeScreen({ navigation }) {
  useIsFocused();
  const diaries = useSelector((state: RootState) => state.diaries);
  const { daysInAMonth, daysInARow } = updateDays({ diaries });

  const onPressStartHealth = () => {
    const date = new Date();
    const _month = date.getMonth();
    const month = _month < 9 ? `0${_month + 1}` : _month + 1;
    navigation.push("DiaryScreen", {
      yearMonth: `${date.getFullYear()}-${month}`,
      date: `${date.getDate()}`,
      hour: date.getHours(),
      minute: date.getMinutes(),
      diaryType: "start",
    });
  };

  return (
    <View style={styles.container}>
      <HealthCalendar navigation={navigation} />
      <Text>현재 연속: {daysInARow}</Text>
      <Text>이번달: {daysInAMonth}</Text>
      <Button icon="dumbbell" onPress={onPressStartHealth}>
        운동하기
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
