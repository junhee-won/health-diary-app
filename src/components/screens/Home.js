import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import HealthCalendar from 'src/components/HealthCalendar';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HealthCalendar navigation={navigation} />
      <Button icon='dumbbell' onPress={() => navigation.push('AddDiary', {
        date: new Date().toISOString().split('T')[0]
      })}>
        운동하기
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
