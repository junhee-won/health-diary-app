import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SelectHealth from "./SelectHealth";
import deepCopy from "../../../modules/deepCopy";

export default function UpdateSets({ health }) {
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

  return <View style={styles.container}></View>;
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
});
