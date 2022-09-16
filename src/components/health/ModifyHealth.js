import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import SelectHealth from 'src/components/modals/SelectHealth';

export default function ModifyHealth({ props }) {
  const { _diary, healthIndex } = props
  const [modalVisible, setModalVisible] = React.useState(false)

  const onClickModal = () => {
    console.log('모달 클릭')
  }

  return (
    <View style={styles.box}>
      {modalVisible &&
        <SelectHealth props={{ setModalVisible: setModalVisible, onClickModal: onClickModal }} />
      }
      <Button onPress={() => setModalVisible(true)}>
        {_diary.healths[healthIndex].name ? _diary.healths[healthIndex].name : '운동 선택'}
      </Button>
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
    borderWidth: 5,
  }
});
