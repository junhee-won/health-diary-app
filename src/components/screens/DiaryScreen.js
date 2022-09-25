import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Text from "../basic/Text";
import TextInput from "../basic/TextInput";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateDiary } from "../../features/diaries/diariesSlice";
import TopBar from "../TopBar";
import SelectHealth from "../modals/SelectHealth";
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

  const _hour = hour ? `${hour}-${minute}` : null;
  const [healths, setHealths] = useState(diary?.healths || []);
  const [startTime, setStartTime] = useState(diary?.startTime || _hour);
  const [endTime, setEndTime] = useState(diary?.endTime || null);
  const [modal, setModal] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

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
    } else {
      dispatch(
        updateDiary({
          yearMonth: yearMonth,
          date: date,
          diary: {
            healths: healths,
            startTime: startTime,
            endTime: endTime,
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
            weight: 20,
          },
        ],
      });
    } else {
      _healths[index].name = health;
    }
    setHealths(_healths);
    setIsUpdated(true);
    setModal(null);
  };

  const updateSet = (healthIndex, setIndex, setType, num) => {
    const _healths = deepCopy(healths);
    if (setType === "weight") {
      _healths[healthIndex].sets[setIndex].weight = num;
    } else {
      _healths[healthIndex].sets[setIndex].num = num;
    }
    setHealths(_healths);
    setIsUpdated(true);
  };

  const addSet = (healthIndex) => {
    const _healths = deepCopy(healths);
    if (_healths[healthIndex]?.sets?.length !== 0) {
      _healths[healthIndex].sets.push({
        weight:
          _healths[healthIndex].sets[_healths[healthIndex]?.sets?.length - 1]
            .weight,
        num: _healths[healthIndex].sets[_healths[healthIndex]?.sets?.length - 1]
          .num,
      });
    } else {
      _healths[healthIndex].sets.push({
        weight: 20,
        num: 10,
      });
    }
    setHealths(_healths);
    setIsUpdated(true);
  };

  const deleteSet = (healthIndex, setIndex) => {
    const _healths = deepCopy(healths);
    _healths[healthIndex].sets.splice(setIndex, 1);
    setHealths(_healths);
    setIsUpdated(true);
  };

  deleteSet;

  return (
    <View style={styles.container}>
      <TopBar
        yearMonth={yearMonth}
        date={date}
        diaryType={diaryType}
        onPressRightButton={saveDiary}
        isUpdated={isUpdated}
      />
      <View style={styles.time}>
        <Text fontSize={20} color="white">
          시작 시간
        </Text>
        <TextInput
          value={startTime}
          onChangeProps={(text) => setStartTime(text)}
          color="white"
          fontSize={20}
        />
        <Text fontSize={20} color="white">
          종료 시간
        </Text>
        <TextInput
          value={endTime}
          onChangeProps={(text) => setEndTime(text)}
          color="white"
          fontSize={20}
        />
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {healths?.map((item, index) => {
          return (
            <View key={index} style={styles.health}>
              <View style={styles.title}>
                <Text fontSize={25} color="white">
                  {item.name}
                </Text>
                <Button
                  style={styles.titleButton}
                  onPress={() => onPressHealthName(index)}
                >
                  <FontAwesome5 name="exchange-alt" size={24} color="white" />
                </Button>
              </View>
              {item.sets.map((_item, _index) => {
                return (
                  <View key={_index} style={styles.set}>
                    <Text color="white" fontSize={20}>
                      무게
                    </Text>
                    <TextInput
                      value={`${healths[index].sets[_index].weight}`}
                      onChangeProps={(text) =>
                        updateSet(index, _index, "weight", Number(text))
                      }
                      color="white"
                      fontSize={20}
                    />
                    <Text color="white" fontSize={20}>
                      횟수
                    </Text>
                    <TextInput
                      value={`${healths[index].sets[_index].num}`}
                      onChangeProps={(text) =>
                        updateSet(index, _index, "num", Number(text))
                      }
                      color="white"
                      fontSize={20}
                    />
                    <Button
                      onPress={() => deleteSet(index, _index)}
                      style={{ position: "absolute", right: -10 }}
                    >
                      <FontAwesome5 name="times" color="white" size={20} />
                    </Button>
                  </View>
                );
              })}
              <Button style={styles.setButton} onPress={() => addSet(index)}>
                <FontAwesome5 name="plus" color="#005eb8" size={15} />
                <Text fontSize={20} color="#005eb8">
                  &nbsp;세트 추가
                </Text>
              </Button>
            </View>
          );
        })}
      </ScrollView>
      <Button style={styles.button} onPress={onPressAddHealth}>
        <FontAwesome5 name="plus" color="#005eb8" size={20} />
        <Text fontSize={25} color="#005eb8">
          &nbsp;운동 추가
        </Text>
      </Button>
      {modal}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005eb8",
    alignItems: "center",
    justifyContent: "center",
  },
  health: {
    width: "80%",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  title: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  titleButton: {
    position: "absolute",
    right: 0,
  },
  set: {
    height: 30,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  setButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 150,
  },
  time: {
    height: 40,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 200,
    marginBottom: 50,
  },
});
