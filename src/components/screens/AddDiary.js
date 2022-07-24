import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import uuid from 'react-native-uuid'
import TopBar from 'src/components/bars/TopBar';
import ModifyHealth from 'src/components/health/ModifyHealth';

export default function AddDiary({ route, navigation }) {
  const { date } = route.params
  const [healths, setHealths] = React.useState([])

  const goBack = () => {
    console.log('go back')
  }
  const complete = () => {
    console.log('complete')
  }
  const addHealth = () => {
    const _healths = [...healths, {
      uuid: uuid.v4(),
      name: null,
      sets: []
    }]
    setHealths(_healths)
  }

  React.useEffect(() => { console.log(healths) }, [healths])

  return (
    <View style={styles.container}>
      <TopBar props={{
        leftButton: { icon: 'arrow-left', onPress: goBack },
        rightButton: { icon: 'check', onPress: complete },
        text: date
      }} />
      {healths.map((item, index) => {
        return < ModifyHealth key={index} props={{ healths: healths, setHealths: setHealths, healthUuid: item.uuid }} />
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
