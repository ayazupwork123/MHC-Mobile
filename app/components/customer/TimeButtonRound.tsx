import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  TextStyle,
  GestureResponderEvent,
  View,
} from "react-native";

import { COLORS, FONT1REGULAR } from "../../config";

interface btnProps {
  key?: any;
  /** Should be max 2 words separated by a single space */
  text: string;
  buttonColor?: string;
  textStyle?: TextStyle;
  onPress: (event: GestureResponderEvent) => void;
}

const TimeButtonRound = ({
  text,
  buttonColor,
  textStyle,
  onPress,
}: btnProps) => {
  let formattedText = text.split(" ");

  let overwrtiteColor: string;
  if (buttonColor) overwrtiteColor = buttonColor;
  else overwrtiteColor = styles.container.backgroundColor;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: overwrtiteColor }]}>
        <Text
          style={[
            styles.text,
            textStyle,
          ]}>{`${formattedText[0]}\n${formattedText[1]}`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
    justifyContent: "center",
    backgroundColor: "#EBFBFB",
  },
  text: {
    fontFamily: FONT1REGULAR,
    fontSize: 13,
    //padding: 12,
    textAlign: "center",
    color: "#0BC890",
  },
  /* textSelected: {
    color: COLORS.white,
    fontFamily: FONT1MEDIUM,
    fontSize: 14,
    textAlign: "center",
  }, */
});

export default TimeButtonRound;
