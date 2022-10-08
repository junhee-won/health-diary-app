import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../basic/Text";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import HealthCalendar from "src/components/HealthCalendar";
import updateDays from "../../modules/updateDays";
import * as Font from "expo-font";
import { getAsyncStorage } from "../../modules/AsyncStorageHelper";
Font.loadAsync({
  GamjaFlower: require("../../../assets/fonts/GamjaFlower-Regular.ttf"),
});

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#005eb8",
      alignItems: "center",
      justifyContent: "center",
    },
    textBox: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
    },
    button: {
      padding: 10,
      marginTop: 50,
      height: 90,
      borderRadius: 10,
      borderColor: daysInARow === 0 ? "red" : "#3cb731",
      borderWidth: 5,
    },
  });

  return (
    <View style={styles.container}>
      <HealthCalendar navigation={navigation} />
      <View style={styles.textBox}>
        <Text color="white" fontSize={25}>
          연속&nbsp;&nbsp;
        </Text>
        <Text color="white" fontSize={40}>
          {daysInARow}
        </Text>
        <Text color="white" fontSize={25}>
          일
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text color="white" fontSize={25}>
          이번달&nbsp;&nbsp;
        </Text>
        <Text color="white" fontSize={40}>
          {daysInAMonth}
        </Text>
        <Text color="white" fontSize={25}>
          일
        </Text>
      </View>
      <Button
        style={styles.button}
        mode="contained"
        onPress={onPressStartHealth}
      >
        {daysInARow === 0 ? (
          <>
            <FontAwesome5 name="dumbbell" size={30} color="red" />
            <Text color="red" fontSize={40}>
              &nbsp;운동 시작
            </Text>
          </>
        ) : (
          <>
            <FontAwesome5 name="check" size={30} color="#3cb731" />
            <Text color="#3cb731" fontSize={40}>
              &nbsp;운동 완료
            </Text>
          </>
        )}
      </Button>
    </View>
  );
}
