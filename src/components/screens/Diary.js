import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { getData } from 'src/module/AsyncStorageHelper';

export default function Diary({ route, navigation }) {
  const dateString = route?.params?.day?.dateString
  const [diary, setDiary] = React.useState(null)

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      (async () => {
        const _diary = await getData(dateString)
        console.log('_diary: ', _diary)
        setDiary(_diary)
      })()
    });
  }, [])

  return (
    <View style={styles.container}>
      <Text>{dateString}</Text>
      {diary !== null ? (
        <Text>yes diary</Text>
      ) : null}
      <Button icon='plus' onPress={() => navigation.push('AddDiary', { date: dateString })}>운동 기록하기</Button>
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
