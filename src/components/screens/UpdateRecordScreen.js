import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import ModifyHealth from "src/components/health/ModifyHealth";
import useGetRecord from "src/modules/hooks/useGetRecord";
import UpdateHealthModal from "../modals/updateHealth/UpdateHealthModal";
import { useDispatch, useSelector } from "react-redux";
import deepCopy from "../../modules/deepCopy";
import { updateDaysInARow } from "../../features/days/dyasSlice";

export default function UpdateRecordScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { yearMonth, date, hour, minute, recordType } = route.params;
  const [record, setRecord] = useGetRecord(yearMonth, date);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(null);
  };

  const saveHealth = (type, health) => {
    if (type === "add") {
      const temp = deepCopy(record) || [];
      temp.push(health);
      setRecord(temp);
      setModal(null);
    }
  };

  const onPressAddHealthButton = () => {
    setModal(
      <UpdateHealthModal
        type="add"
        health={{ name: null }}
        closeModal={closeModal}
        saveHealth={saveHealth}
      />
    );
  };

  const temp = () => {
    dispatch(updateDaysInARow(123));
  };

  useEffect(() => {
    console.log(record);
  }, [record]);

  return (
    <View style={styles.container}>
      {/* <TopBar
        props={{
          leftButton: { icon: "arrow-left", onPress: goBack },
          rightButton: { icon: "check", onPress: complete },
          text: date,
        }}
      /> */}

      <Button icon="plus" onPress={onPressAddHealthButton}>
        운동 추가
      </Button>
      <Button onPress={temp}>test</Button>
      {modal}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
