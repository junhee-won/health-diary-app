import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput, Divider } from "react-native-paper";
import SelectHealth from "./SelectHealth";
import deepCopy from "../../../modules/deepCopy";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function UpdateHealthModal({
  type,
  health,
  closeModal,
  saveHealth,
  index,
}) {
  const [_health, _setHealth] = useState(health);
  const [isActiveSelectHealth, setIsActiveSelectHealth] = useState(true);

  useEffect(() => {
    if (_health?.name) {
      setIsActiveSelectHealth(false);
    }
  }, []);

  const onPressSelectHealthButton = (healthName) => {
    const temp = deepCopy(_health);
    temp.name = healthName;
    _setHealth(temp);
    setIsActiveSelectHealth(false);
  };

  const onPressAddSetButton = () => {
    const temp = deepCopy(_health);
    temp.sets = temp.sets || [];
    temp.sets.push({
      weight: 10,
      num: 10,
    });
    _setHealth(temp);
  };

  const onChangeSet = (index, type, num) => {
    num = Number(num);
    const temp = deepCopy(_health);
    temp.sets[index][type] = num;
    _setHealth(temp);
  };

  return (
    <View style={styles.container}>
      {isActiveSelectHealth ? (
        <SelectHealth onPress={onPressSelectHealthButton} />
      ) : (
        <View style={styles.box}>
          <View style={styles.topbar}>
            <Button icon="close" onPress={closeModal}></Button>
            <Button
              onPress={() => {
                saveHealth("add", _health);
              }}
            >
              완료
            </Button>
          </View>
          <KeyboardAwareScrollView
            style={{
              width: "100%",
              height: "100%",
              borderTopColor: "black",
              borderTopWidth: 2,
            }}
          >
            <Text onPress={() => setIsActiveSelectHealth(true)}>
              {_health.name}
            </Text>
            {_health?.sets?.map((item, index) => {
              return (
                <View style={styles.set} key={index}>
                  <Text>무게</Text>
                  <TextInput
                    mode="outlined"
                    keyboardType="numeric"
                    value={String(item.weight)}
                    onChangeText={(num) => onChangeSet(index, "weight", num)}
                  />
                  <Text>개수</Text>
                  <TextInput
                    mode="outlined"
                    keyboardType="numeric"
                    value={String(item.num)}
                    onChangeText={(num) => onChangeSet(index, "num", num)}
                  />
                </View>
              );
            })}
            <Button icon="plus" mode="contained" onPress={onPressAddSetButton}>
              세트 추가
            </Button>
          </KeyboardAwareScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(52, 52, 52, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    width: "100%",
    height: "100%",
    padding: "10%",
  },
  box: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "start",
  },
  set: {
    width: "100%",
    height: 70,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
