import React from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from "react-native";
import { STATUS_BAR_HEIGHT } from "../config";
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  children: any;
  isTransparent?: boolean;
  backgroundColor?: string;
  linearColor?: Array<string>;
  barStyle?: any;
}

const AppScreenKeyboardHide = ({
  children,
  isTransparent = true,
  backgroundColor,
  linearColor,
  barStyle = "dark-content"
}: Props) => {
  return (
    <KeyboardAvoidingView 
      style={{flex: 1}} 
      behavior={Platform.OS === "ios" ? "padding" : undefined} 
    >
      <ImageBackground
        source={require("../assets/background.png")}
        style={{
          flex: 1,
          paddingTop: isTransparent
            ? STATUS_BAR_HEIGHT + 10
            : STATUS_BAR_HEIGHT
        }}
      >
        <View style={{
          height: Constants.statusBarHeight, 
          backgroundColor: isTransparent ? "transparent" : backgroundColor && backgroundColor, 
          width: "100%",
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
          {linearColor && (
            <LinearGradient
              colors={linearColor}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{
                width: '100%',
                height: STATUS_BAR_HEIGHT,
                top: 0,
                position: 'absolute',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                alignSelf: 'center',
              }}
            />
          )}
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle={barStyle}
          />
        </View>
        <SafeAreaView style={{flex: 1, marginBottom: Platform.OS === "android" ? 15 : 0}}>
          {children}
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
export default AppScreenKeyboardHide;
