import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
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

  return (
    <View style={styles.box}>
      <Text>hi</Text>
      <Text>hi</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          backgroundColor: 'white',
          width: '150px'
        }}
        containerStyle={{
          width: '150px',
          height: 40,
        }}
      // textStyle={{
      //   fontSize: 15,
      //   backgroundColor: 'red',
      //   height: '50px'
      // }}
      />
      <View>
        <Text>hi</Text>
      </View>
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
  }
});
