import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EatScreen from "./screens/EatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EatScreen"
              component={EatScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
});
