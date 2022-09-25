import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Text from "./basic/Text";

export default function HealthCalendar({ navigation }) {
  const diaries = useSelector((state: RootState) => state.diaries);
  const now = new Date().toISOString().split("T")[0];
  const [yearMonth, setYearMonth] = useState(now.slice(0, 7));

  const onPressDay = (day) => {
    navigation.push("DiaryScreen", {
      yearMonth: day.dateString.slice(0, 7),
      date: day.day,
      diaryType: "update",
    });
  };

  const onPressLeftArrow = () => {
    const year = Number(yearMonth.slice(0, 4));
    const month = yearMonth.slice(5);
    const _month = Number(month) - 1;
    if (_month == 0) {
      setYearMonth(`${year - 1}-12`);
    } else if (_month < 10) {
      setYearMonth(`${year}-0${_month}`);
    } else {
      setYearMonth(`${year}-${_month}`);
    }
  };

  const onPressRightArrow = () => {
    const year = Number(yearMonth.slice(0, 4));
    const month = yearMonth.slice(5);
    const _month = Number(month) + 1;
    if (_month == 13) {
      setYearMonth(`${year + 1}-01`);
    } else if (_month < 10) {
      setYearMonth(`${year}-0${_month}`);
    } else {
      setYearMonth(`${year}-${_month}`);
    }
  };

  return (
    <View
      style={{
        position: "relative",
        alignItems: "center",
      }}
    >
      <Calendar
        style={{
          height: 320,
          minWidth: "80%",
          marginBottom: 30,
          borderRadius: 25,
          height: "auto",
          paddingBottom: 10,
        }}
        onPressArrowLeft={(subtractMonth) => {
          subtractMonth();
          onPressLeftArrow();
        }}
        onPressArrowRight={(addMonth) => {
          addMonth();
          onPressRightArrow();
        }}
        markingType={"custom"}
        initialDate={now}
        maxDate={now}
        dayComponent={({ date, state }) => {
          const monthDiariesIndex = diaries.findIndex(
            (item) => item?.yearMonth === date?.dateString.slice(0, 7)
          );
          const isHealth = diaries[monthDiariesIndex]?.diaries[date.day]
            ?.healths
            ? true
            : false;
          return (
            <TouchableOpacity
              onPress={() => onPressDay(date)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#3cb731",
                borderWidth: isHealth ? 2 : 0,
              }}
            >
              <Text
                color={state === "disabled" ? "#CCCCCC" : "black"}
                fontSize={20}
              >
                {date.day}
              </Text>
            </TouchableOpacity>
          );
        }}
        hideDayNames={false}
        renderArrow={(direction) => {
          if (direction === "left") {
            return <FontAwesome5 name="arrow-left" size={20} color="#005eb8" />;
          } else {
            return (
              <FontAwesome5 name="arrow-right" size={20} color="#005eb8" />
            );
          }
        }}
        monthFormat={"MM"}
      />
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 45,
          height: 30,
          minWidth: "80%",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          borderTopColor: "#005eb8",
          borderTopWidth: 2,
          borderBottomColor: "#005eb8",
          borderBottomWidth: 2,
        }}
      >
        <Text fontSize={20} color="black">
          월
        </Text>
        <Text fontSize={20} color="black">
          화
        </Text>
        <Text fontSize={20} color="black">
          수
        </Text>
        <Text fontSize={20} color="black">
          목
        </Text>
        <Text fontSize={20} color="black">
          금
        </Text>
        <Text fontSize={20} color="black">
          토
        </Text>
        <Text fontSize={20} color="black">
          일
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 2,
          height: 40,
          minWidth: "40%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Text fontSize={35} color="black">
          {yearMonth.slice(5)}
        </Text>
      </View>
    </View>
  );
}
