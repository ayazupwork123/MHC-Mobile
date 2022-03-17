import 'react-native-gesture-handler';
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { DrawerStack } from './app/navigation/drawer';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  const [loaded] = useFonts({
    "Rubik-Light": require("./app/assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("./app/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("./app/assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("./app/assets/fonts/Rubik-Medium.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <RootSiblingParent>
        <DrawerStack />
      </RootSiblingParent>
    );
  }
}
