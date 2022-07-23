import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HealthCalendar from 'src/components/HealthCalendar';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HealthCalendar navigation={navigation} />
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
