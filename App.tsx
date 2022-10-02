import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import {
  DefaultTheme as defaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaunchScreen from "src/components/screens/LaunchScreen";
import HomeScreen from "src/components/screens/HomeScreen";
import DiaryScreen from "src/components/screens/DiaryScreen";

const theme = {
  ...defaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...defaultTheme.colors,
    primary: "white",
    secondary: "white",
    tertiary: "#a1b2c3",
  },
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ animation: "none" }}>
            <Stack.Screen
              name="LaunchScreen"
              component={LaunchScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DiaryScreen"
              component={DiaryScreen}
              options={{
                title: "운동 일지",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
