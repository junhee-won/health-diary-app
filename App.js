import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaunchScreen from "src/components/screens/LaunchScreen";
import HomeScreen from "src/components/screens/HomeScreen";
import UpdateRecordScreen from "src/components/screens/UpdateRecordScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: "none" }}>
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="UpdateRecordScreen"
            component={UpdateRecordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
