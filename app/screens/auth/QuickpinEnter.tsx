// screen 9.2 Enter Quickpin
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Toast from "react-native-root-toast";
import Logo from "../../assets/logo.svg";
import GradientButton from "../../components/GradientButton";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import PINCode from "../../components/PINCode";
import i18n from "../../utils/i18n";

const QuickPinEnter = () => {
  const [code, setCode] = useState("");
  const codeConfirm = "2345";
  var toast: any;

  const setPass = () => {
    const settings = {
      duration: Toast.durations.LONG,
      position: 40,
      backgroundColor: "red",
      hideOnPress: true,
    };
    if (toast) Toast.hide(toast);
    if (code.length !== 4)
      return (toast = Toast.show(i18n.t("Code not filled"), settings));
    if (code !== codeConfirm)
      return (toast = Toast.show(i18n.t("Wrong Code"), settings));
    console.log(code);
  };

  return (
    <AppScreenKeyboardHide>
      <View style={styles.container}>
        <View style={styles.main}>
          <Logo />
          <View
            style={{ marginTop: 40, width: "90%", justifyContent: "center" }}>
            <Text style={styles.passInfo}>
              {i18n.t("Submit the 4 digit code for login")}
            </Text>
          </View>
          <View style={styles.pinCode}>
            <PINCode
              value={code}
              _text={{ color: "#4D4C4C", fontWeight: "normal" }}
              setValue={setCode}
              verificationError={false}
            />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 50 }}>
        <View style={styles.subContainer}>
          <GradientButton text={i18n.t("Login")} onPress={setPass} />
        </View>
      </View>
    </AppScreenKeyboardHide>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
  },
  main: {
    top: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  passInfo: {
    fontFamily: "Poppins-Light",
    color: "#807C7C",
    textAlign: "center",
    lineHeight: 21,
    fontSize: 14,
  },
  pinCode: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
  },
});

export default QuickPinEnter;
