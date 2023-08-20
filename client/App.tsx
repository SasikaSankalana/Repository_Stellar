import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import LandingPage from "./src/pages/LandingPage";
import SearchPage from "./src/pages/SearchPage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Rollbox: require("./src/assets/fonts/RollboxLight.ttf"),
    Inter: require("./src/assets/fonts/Inter.ttf"),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
