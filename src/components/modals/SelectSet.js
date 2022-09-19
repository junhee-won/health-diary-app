import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MoadlContainer from "./ModalContainer";

export default function SelectSet({
  onPressButton,
  healthIndex,
  setIndex,
  originNum,
  originWeight,
}) {
  const [num, setNum] = useState(originNum);
  const [weight, setWeight] = useState(originWeight);
  return (
    <MoadlContainer>
      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => onPressButton(healthIndex, setIndex, weight, num)}
        >
          완료
        </Button>
        <KeyboardAwareScrollView
          style={{
            width: "100%",
            height: "100%",
            borderTopColor: "black",
            borderTopWidth: 2,
          }}
        >
          <Text>무게</Text>
          <TextInput
            mode="outlined"
            keyboardType="numeric"
            value={String(weight)}
            onChangeText={(opnd) => setWeight(opnd)}
          />
          <Text>개수</Text>
          <TextInput
            mode="outlined"
            keyboardType="numeric"
            value={String(num)}
            onChangeText={(opnd) => setNum(opnd)}
          />
        </KeyboardAwareScrollView>
      </View>
    </MoadlContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    height: "100%",
    paddingTop: 50,
  },
  button: {
    height: 50,
    width: "90%",
    marginBottom: 30,
  },
});
