import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import TopBar from 'src/components/bars/TopBar';
import ModifyHealth from 'src/components/health/ModifyHealth';

export default function AddDiary({ route, navigation }) {
  const { date, diary, type } = route.params
  const [_diary, _setDiary] = React.useState(diary || { startTime: null, endTime: null, healths: [] })

  React.useEffect(() => {
    if (type !== 'start') return
    _setDiary({ ..._diary, startTime: Date.now() })
  }, [])

  const goBack = () => {
    console.log('go back')
  }
  const complete = () => {
    console.log('complete')
  }
  const addHealth = () => {
    const cp = { ..._diary }
    cp.healths.push({ name: null, sets: [] })
    _setDiary(cp)
  }

  React.useEffect(() => {
    console.log(_diary)
  }, [_diary])

  return (
    <View style={styles.container}>
      <TopBar props={{
        leftButton: { icon: 'arrow-left', onPress: goBack },
        rightButton: { icon: 'check', onPress: complete },
        text: date
      }} />
      {_diary.healths.map((item, index) => {
        return <ModifyHealth key={index} props={{ _diary: _diary, healthIndex: index }} />
      })}
      <Button icon='plus' onPress={addHealth}>운동 추가</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  }
});
