// screen 1
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AppScreen from "./../../components/AppScreen";
import Button from "./../../components/GradientButton";
import Logo from "../../assets/svg/Logo";

import { COLORS, SCREEN_HEIGHT } from "../../config";
import i18n from "../../utils/i18n";
import routes from "../../navigation/routes";

function Welcome({ navigation }: any) {
  return (
    <AppScreen>
      <View style={styles.topContainer}>
        <Logo />
        <Text style={styles.titleMain}>myHealthCell</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.welcomeMessage}>{i18n.t("auth.Welcome.WelcomeMessage")}</Text>
        <Text style={styles.welcomeInfo}>{i18n.t("auth.Welcome.WelcomeInfo")}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          text={i18n.t("common.SignUp")}
          onPress={() => navigation.navigate(routes.AUTH.SIGNUP)}
          marginTopHide
          borderRadius={10}
          height={50}
          fontSize={16}
        />
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate(routes.AUTH.LOGIN)}
        >
          {i18n.t("auth.Welcome.LoginNavigation")}
        </Text>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: SCREEN_HEIGHT * 0.04,
  },
  titleMain: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    paddingTop: 20,
  },
  middleContainer: {
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
  },
  welcomeMessage: {
    fontFamily: "Rubik-Medium",
    fontSize: 24,
    paddingBottom: 20,
  },
  welcomeInfo: {
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    textAlign: "center",
    width: "70%",
    paddingBottom: 20,
    color: COLORS.grey,
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: SCREEN_HEIGHT * 0.08,
  },
  loginText: {
    marginTop: 16,
    color: COLORS.themeGradientColor,
  },
});
export default Welcome;
