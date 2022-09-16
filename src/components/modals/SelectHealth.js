import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function SelectHealth({ props }) {
  const { setModalVisible, onClickItem } = props

  const showModal = () => setVisible(true);
  const hideModal = () => console.log('하이드 모달');

  return (
    <view>
      <div style={styles.container}>
        모달
      </div>
    </view>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'start',
    zIndex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
    width: 412,
    height: 915,
  }
});