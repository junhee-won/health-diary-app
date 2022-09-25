import { StyleSheet, View } from "react-native";

export default function MoadlContainer({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    alignItems: "center",
    justifyContent: "start",
    padding: 30,
  },
});
