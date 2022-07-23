import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function AddHealth({ route, navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>{dateString}</Text> */}
      <Button icon='plus'>운동 추가하기</Button>
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
