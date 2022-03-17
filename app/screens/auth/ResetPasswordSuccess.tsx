// screen 8.2 Reset Password process Successful
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/GradientButton";
import AppScreen from "../../components/AppScreen";
import i18n from "../../utils/i18n";
import SuccessIcon from "../../assets/svg/success";
import { COLORS } from "../../config";
import { SCREEN_HEIGHT } from "../../config";

export default function ResetPasswordSuccess({ navigation }: any) {
  return (
    <AppScreen>
      <View style={styles.containerTop}>
        <View style={{ marginBottom: 40 }}>
          <SuccessIcon />
        </View>
        <Text style={styles.screenTitle}>{i18n.t("common.Success")}</Text>
        <Text style={styles.screenInfo}>{i18n.t("auth.ResetPassword.ResPassSuccessInfo")}</Text>
      </View>
      <View style={styles.containerBottom}>
        <Button
          text={i18n.t("Login")}
          onPress={() => navigation.navigate("Login")}
          marginTopHide
          borderRadius={10}
          height={50}
          fontSize={16}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
  containerBottom: {
    flex: 0.3,
    alignContent: "center",
    justifyContent: "flex-end",
    marginBottom: SCREEN_HEIGHT * 0.08,
  },
  screenTitle: {
    fontFamily: "Rubik-Medium",
    fontSize: 24,
    color: "#090F47",
    marginBottom: 20,
  },
  screenInfo: {
    fontFamily: "Rubik-Light",
    fontSize: 16,
    textAlign: "center",
    width: "80%",
    paddingBottom: 20,
    color: COLORS.grey,
  },
});
