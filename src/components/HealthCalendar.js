import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function HealthCalendar({ navigation }) {
  const now = new Date().toISOString().split('T')[0]

  return (
    <Calendar
      initialDate={now}
      // minDate={'2012-05-10'}
      maxDate={now}
      onDayPress={day => {
        navigation.push('Diary', {
          day: day
        })
      }}
      //   // onDayLongPress={day => {
      //   //   console.log('selected day', day);
      //   // }}
      monthFormat={'MM'}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '200px',
    marginBottom: '25px',
  }
});
