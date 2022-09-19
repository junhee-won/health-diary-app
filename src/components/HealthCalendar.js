import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";

const customStyles = {
  container: {
    backgroundColor: "red",
    borderRadius: 1,
  },
  text: {
    color: "blue",
  },
};

export default function HealthCalendar({ navigation }) {
  const diaries = useSelector((state: RootState) => state.diaries);
  const now = new Date().toISOString().split("T")[0];
  const yearMonth = now.slice(0, 7);

  const monthDiariesIndex = diaries.findIndex(
    (item) => item.yearMonth === yearMonth
  );

  const markedDates = {};
  if (monthDiariesIndex !== -1) {
    for (let i = 1; i <= now.slice(8, 10); i++) {
      if (diaries[monthDiariesIndex].diaries[i]?.healths) {
        const nowDay = i < 10 ? "0" + i : i;
        markedDates[yearMonth + "-" + nowDay] = {
          customStyles,
        };
      }
    }
  }

  const onPressDay = (day) => {
    navigation.push("DiaryScreen", {
      yearMonth: day.dateString.slice(0, 7),
      date: day.day,
      diaryType: "update",
    });
  };

  return (
    <Calendar
      initialDate={now}
      // minDate={'2012-05-10'}
      maxDate={now}
      onDayPress={(day) => {
        onPressDay(day);
      }}
      //   // onDayLongPress={day => {
      //   //   console.log('selected day', day);
      //   // }}
      monthFormat={"MM"}
      markingType={"custom"}
      markedDates={markedDates}
      //   // onMonthChange={month => {
      //   //   console.log('month changed', month);
      //   // }}
      //   hideArrows={false}
      //   // // Replace default arrows with custom ones (direction can be 'left' or 'right')
      //   renderArrow={(direction) =>
      //     direction === 'left' ? <Button icon="arrow-left" onPress={() => } /> : <Button icon="arrow-right" />
      //   }
      //   // // Do not show days of other months in month page. Default = false
      //   // hideExtraDays={true}
      //   // // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
      //   // // day from another month that is visible in calendar page. Default = false
      //   // disableMonthChange={true}
      //   // // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
      //   // firstDay={1}
      //   // // Hide day names. Default = false
      //   // hideDayNames={true}
      //   // // Show week numbers to the left. Default = false
      //   // showWeekNumbers={true}
      //   // // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      //   onPressArrowLeft={subtractMonth => console.log(subtractMonth)}
      // // // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      // // onPressArrowRight={addMonth => addMonth()}
      // // // Disable left arrow. Default = false
      // // disableArrowLeft={true}
      // // // Disable right arrow. Default = false
      // // disableArrowRight={true}
      // // // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
      // // disableAllTouchEventsForDisabledDays={true}
      // // // Replace default month and year title with custom one. the function receive a date as parameter
      // // renderHeader={date => {
      // //   /*Return JSX*/
      // // }}
      // // Enable the option to swipe between months. Default = false
      // enableSwipeMonths={true}
    />
  );
}
