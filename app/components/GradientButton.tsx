import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONT1REGULAR } from "../config";

function GradientButton(props: any) {
  return (
    <LinearGradient
      colors={
        props.transparent
          ? ["transparent", "transparent"]
          : props.btnDisabled
          ? [COLORS.lightGrey, COLORS.lightGrey]
          : [COLORS.primaryBlue, COLORS.themeGradientColor]
      }
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={[
        {
          width: props.width ? props.width : "90%",
          borderRadius: props.borderRadius ? props.borderRadius : 12,
          alignSelf: props.alignSelf || "center",
          marginTop: props.marginTopHide ? 0 : 30,
        },
        props.backgroundColor && { backgroundColor: props.backgroundColor },
      ]}>
      <TouchableOpacity
        disabled={props.btnDisabled}
        onPress={() => props.onPress()}
        style={[
          styles.button,
          { height: props.height ? props.height : 54, flexDirection: "column" },
        ]}>
        {props.icon && props.icon}
        <Text
          style={[
            styles.text,
            {
              color: props.transparent ? COLORS.blue : COLORS.white,
              fontSize: props.fontSize ? props.fontSize : 18,
            },
            props.textColor && { color: props.textColor },
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONT1REGULAR,
  },
});

export default GradientButton;
