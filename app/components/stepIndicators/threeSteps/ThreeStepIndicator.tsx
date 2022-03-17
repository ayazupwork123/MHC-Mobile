import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { COLORS, FONT1MEDIUM } from "./../../../config/index";

const ThreeStepIndicator = ({ active }: { active: number }) => {
  if (active < 1) active = 1;
  else if (active > 3) active = 3;
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.step, styles.activeStep]}>1</Text>
      </View>
      <View
        style={[
          styles.line,
          (active === 2 || active === 3) && styles.activeLine,
        ]}
      />

      <View>
        <Text
          style={[
            styles.step,
            (active === 2 || active === 3) && styles.activeStep,
          ]}>
          2
        </Text>
      </View>
      <View style={[styles.line, active === 3 && styles.activeLine]} />
      <View>
        <Text style={[styles.step, active === 3 && styles.activeStep]}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 34,
    flexDirection: "row",
    justifyContent: "center",
  },
  step: {
    width: 35,
    height: 35,
    fontSize: 18,
    fontFamily: FONT1MEDIUM,
    backgroundColor: COLORS.white,
    paddingLeft: Platform.OS === "ios" ? 8 : 12,
    paddingTop: Platform.OS === "ios" ? 2 : 6,
    overflow: "hidden",
    borderRadius: 17,
    borderColor: "#CED8DD",
    borderWidth: 5,
    color: COLORS.blue,
  },
  activeStep: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
    borderColor: COLORS.primaryBlue,
  },
  line: {
    width: 114,
    height: 4,
    top: 16,
    backgroundColor: "#CED8DD",
  },
  activeLine: {
    backgroundColor: COLORS.primaryBlue,
  },
});

export default ThreeStepIndicator;
