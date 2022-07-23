import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Diary({ route, navigation }) {
  const dateString = route?.params?.day?.dateString

  return (
    <View style={styles.container}>
      <Text>{dateString}</Text>
      <Button icon='plus' onPress={() => navigation.push('AddHealth', { date: dateString })}>운동 추가하기</Button>
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
