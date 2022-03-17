import React from "react";
import { ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: any;
  isTransparent?: boolean;
  backgroundColor?: string;
}

const AppScreen = ({
  children,
  isTransparent = true,
  backgroundColor,
}: Props) => {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        backgroundColor={
          isTransparent ? "transparent" : backgroundColor && backgroundColor
        }
        barStyle="dark-content"
      />
      <SafeAreaView style={{flex: 1}}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};
export default AppScreen;
