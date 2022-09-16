import { Provider } from "react-redux";
import { store } from "./src/app/store.ts";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "src/components/screens/Home";
import Diary from "src/components/screens/Diary";
import AddDiary from "src/components/screens/AddDiary";
import SignIn from "src/components/screens/SignIn";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Diary" component={Diary} />
          <Stack.Screen name="AddDiary" component={AddDiary} />
          {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
