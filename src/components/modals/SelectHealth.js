import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Text from "../basic/Text";
import { Button } from "react-native-paper";
import MoadlContainer from "./ModalContainer";

export default function SelectHealth({ onPressButton, healthIndex }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const healths = [
    {
      healthType: "가슴",
      names: ["벤치 프레스", "인클라인 벤치 프레스", "플라이"],
    },
    {
      healthType: "등",
      names: ["풀업", "랫풀다운", "암풀다운", "시티드 로우", "원암 덤벨 로우"],
    },
    {
      healthType: "어깨",
      names: [
        "숄더 프레스",
        "덤벨 숄더 프레스",
        "밀리터리 프레스",
        "어깨 후면",
        "사이드 레터럴 레이즈",
      ],
    },
    {
      healthType: "팔",
      names: ["바벨 컬", "삼두 케이블"],
    },
    {
      healthType: "하체",
      names: ["스쿼트", "레그 익스텐션", "레그 컬", "레그 프레스"],
    },
    {
      healthType: "기타",
      names: ["러닝", "플랭크", "행잉 레그레이즈"],
    },
  ];
  return (
    <MoadlContainer>
      <View style={styles.container}>
        <View style={styles.typeContainer}>
          {healths.map((item, index) => {
            if (index === activeIndex) {
              return (
                <Button
                  style={styles.activeType}
                  key={index}
                  onPress={() => setActiveIndex(index)}
                >
                  <Text fontSize={25} color="white">
                    {item.healthType}
                  </Text>
                </Button>
              );
            } else {
              return (
                <Button
                  style={styles.type}
                  key={index}
                  onPress={() => setActiveIndex(index)}
                >
                  <Text fontSize={25} color="white">
                    {item.healthType}
                  </Text>
                </Button>
              );
            }
          })}
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.buttonContainer}>
            {activeIndex !== null
              ? healths[activeIndex].names.map((item, index) => {
                  return (
                    <Button
                      style={styles.button}
                      key={index}
                      mode="contained"
                      onPress={() => onPressButton(item, healthIndex)}
                    >
                      <Text fontSize={21} color="white">
                        {item}
                      </Text>
                    </Button>
                  );
                })
              : null}
          </View>
        </ScrollView>
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
    borderRadius: 10,
  },
  typeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 5,
  },
  type: {
    margin: 5,
    backgroundColor: "#005eb8",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  activeType: {
    margin: 5,
    backgroundColor: "#00376c",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  button: {
    height: 50,
    width: "70%",
    marginBottom: 20,
    backgroundColor: "#005eb8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
