import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, FONT1MEDIUM } from "../../../config";
import i18n from "../../../utils/i18n";

const Step = (active: boolean, step: number) => {
  if (active)
    return (
      <LinearGradient
        colors={[COLORS.primaryBlue, COLORS.themeGradientColor]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={[styles.stepContainer, styles.activeStepContainer]}>
        <Text style={styles.activeStepText}>{`${i18n.t("Step")} ${step}`}</Text>
      </LinearGradient>
    );
  else
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>{`${i18n.t("Step")} ${step}`}</Text>
      </View>
    );
};

const AppointmentStepIndicator = ({ active }: { active: number }) => {
  if (active < 1) active = 1;
  else if (active > 4) active = 4;
  return (
    <View style={styles.container}>
      {Step(active === 1, 1)}
      {Step(active === 2, 2)}
      {Step(active === 3, 3)}
      {Step(active === 4, 4)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 34,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
  },
  stepContainer: {
    width: 70,
    height: 34,
    borderRadius: 4,
    justifyContent: "center",
  },
  stepText: {
    color: COLORS.blue,
    fontFamily: FONT1MEDIUM,
    fontSize: 12,
    textAlign: "center",
  },
  activeStepContainer: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
  activeStepText: {
    fontFamily: FONT1MEDIUM,
    fontSize: 12,
    color: COLORS.white,
    textAlign: "center",
  },
});

export default AppointmentStepIndicator;
