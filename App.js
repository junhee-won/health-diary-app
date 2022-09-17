import { Provider } from "react-redux";
import { store } from "./src/app/store.ts";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "src/components/screens/HomeScreen";
import Record from "src/components/screens/Record";
import UpdateRecordScreen from "src/components/screens/UpdateRecordScreen";
import SignIn from "src/components/screens/SignIn";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Record" component={Record} />
          <Stack.Screen
            name="UpdateRecordScreen"
            component={UpdateRecordScreen}
          />
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
