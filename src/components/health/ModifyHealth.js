import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import react from 'react';

export default function ModifyHealth({ props }) {
  const { healts, setHealths, healthUuid } = props

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: '랫풀다운', value: '랫풀다운' },
    { label: '벤치 프레스', value: '벤치 프레스' },
    { label: '시티드 로우', value: '시티드 로우' },
    { label: '후면', value: '후면' },
    { label: '숄더 프레스', value: '숄더 프레스' },
    { label: '삼두', value: '삼두' },
    { label: '이두', value: '이두' },
    { label: '러닝', value: '러닝' },
    { label: '계단', value: '계단' },
    { label: '스쿼트', value: '스쿼트' },
  ]);

  react.useEffect(() => {
    console.log('-----')
    if (!healts) return
    console.log('11111')
    const _healths = [...healts]
    _healths.forEach((item, index) => { item.uuid === healthUuid ? _healths[index].name = value : null })
    console.log(_healths)
    setHealths(_healths)
  }, [value, healts])

  return (
    <View style={styles.box}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text>{healthUuid}</Text>
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    height: 50,
    backgroundColor: 'skyblue',
    zIndex: 1
  }
});
