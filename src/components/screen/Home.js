import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Calandar from '../Calandar';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Calandar navigation={navigation} />
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
