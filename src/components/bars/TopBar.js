import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function TopBar({ props }) {
  const { leftButton, rightButton, text } = props
  return (
    <View style={styles.topBar}>
      <Button icon={leftButton.icon} onPress={leftButton.onPress}></Button>
      <Text>{text}</Text>
      <Button icon={rightButton.icon} onPress={rightButton.onPress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
