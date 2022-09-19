import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { updateDiary } from "../../features/diaries/diariesSlice";
import TopBar from "../TopBar";
import SelectHealth from "../modals/SelectHealth";
import SelectSet from "../modals/SelectSet";
import deepCopy from "../../modules/deepCopy";

export default function DiaryScreen({ route, navigation }) {
  const { yearMonth, date, hour, minute, diaryType } = route.params;
  const dispatch = useDispatch();
  const diaries = useSelector((state: RootState) => state.diaries);

  const monthDiariesIndex = diaries.findIndex(
    (item) => item.yearMonth === yearMonth
  );
  let diary = {};
  if (monthDiariesIndex !== -1) {
    diary = diaries[monthDiariesIndex].diaries[date];
  }

  const [healths, setHealths] = useState(diary?.healths || []);
  const [startTime, setStartTime] = useState(
    diary?.startTime || `${hour}-${minute}`
  );
  const [endTime, setEndTime] = useState(diary?.endTime);
  const [modal, setModal] = useState(null);

  const saveDiary = () => {
    if (diaryType === "start") {
      const nowDate = new Date();
      dispatch(
        updateDiary({
          yearMonth: yearMonth,
          date: date,
          diary: {
            healths: healths,
            startTime: startTime,
            endTime: `${nowDate.getHours()}-${nowDate.getMinutes()}`,
          },
        })
      );
    }
    navigation.replace("HomeScreen");
  };

  const onPressAddHealth = () => {
    setModal(
      <SelectHealth onPressButton={selectHealth} healthIndex={healths.length} />
    );
  };

  const onPressHealthName = (healthIndex) => {
    setModal(
      <SelectHealth onPressButton={selectHealth} healthIndex={healthIndex} />
    );
  };

  const selectHealth = (health, index) => {
    const _healths = deepCopy(healths);
    if (healths.length === index) {
      _healths.push({
        name: health,
        sets: [
          {
            num: 10,
            weight: 10,
          },
        ],
      });
    } else {
      _healths[index].name = health;
    }
    setHealths(_healths);
    setModal(null);
  };

  const onPressAddSet = (healthIndex) => {
    setModal(
      <SelectSet
        onPressButton={selectSet}
        healthIndex={healthIndex}
        setIndex={healths[healthIndex].sets.length}
        originWeight={10}
        originNum={10}
      />
    );
  };

  const onPressSet = (healthIndex, setIndex) => {
    setModal(
      <SelectSet
        onPressButton={selectSet}
        healthIndex={healthIndex}
        setIndex={setIndex}
        originWeight={healths[healthIndex].sets[setIndex].weight}
        originNum={healths[healthIndex].sets[setIndex].num}
      />
    );
  };

  const selectSet = (healthIndex, setIndex, weight, num) => {
    const _healths = deepCopy(healths);
    if (healths[healthIndex].sets.length === setIndex) {
      _healths[healthIndex].sets.push({
        weight,
        num,
      });
    } else {
      _healths[healthIndex].sets[setIndex] = {
        weight,
        num,
      };
    }
    setHealths(_healths);
    setModal(null);
  };

  return (
    <View style={styles.container}>
      <TopBar
        yearMonth={yearMonth}
        date={date}
        diaryType={diaryType}
        onPressRightButton={saveDiary}
      />
      {startTime && <Text>시작시간: {startTime}</Text>}
      {endTime && <Text>종료시간: {endTime}</Text>}
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {healths?.map((item, index) => {
          return (
            <View key={index} style={styles.health}>
              <Button mode="contained" onPress={() => onPressHealthName(index)}>
                {item.name}
              </Button>
              {item.sets.map((_item, _index) => {
                return (
                  <View key={_index} style={styles.set}>
                    <Text>weight</Text>
                    <Button
                      mode="contained"
                      onPress={() => onPressSet(index, _index)}
                    >
                      {_item.weight}
                    </Button>
                    <Text>num</Text>
                    <Button
                      mode="contained"
                      onPress={() => onPressSet(index, _index)}
                    >
                      {_item.num}
                    </Button>
                  </View>
                );
              })}
              <Button onPress={() => onPressAddSet(index)} mode="contained">
                세트 추가
              </Button>
            </View>
          );
        })}
      </ScrollView>
      <Button icon="plus" onPress={onPressAddHealth}>
        운동 추가
      </Button>
      {modal}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "start",
    backgroundColor: "green",
  },
  health: {
    backgroundColor: "skyblue",
    width: "80%",
    padding: 10,
  },
  set: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    margin: 10,
    flexDirection: "row",
  },
});
