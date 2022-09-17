import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function SelectHealth(param) {
  const { onPress } = param;
  const healthNames = ["벤치 프레스", "풀업", "스쿼트"];
  return (
    <View style={styles.container}>
      {healthNames.map((item, index) => {
        return (
          <Button
            style={styles.button}
            key={index}
            mode="contained"
            onPress={() => onPress(item)}
          >
            <Text>{item}</Text>
          </Button>
        );
      })}
    </View>
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
