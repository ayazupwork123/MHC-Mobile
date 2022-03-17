// screen 9.1 Set Quickpin
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import GradientButton from "../../components/GradientButton";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import PINCode from "../../components/PINCode";
import i18n from "../../utils/i18n";

interface OwnProps {
  navigation: any;
}

const QuickPinSet = ({ navigation }: OwnProps) => {
  const [code, setCode] = useState("");
  const [codeConfirm, setCodeConfirm] = useState("");
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
    if (codeConfirm.length !== 4)
      return (toast = Toast.show(i18n.t("Confirm code not filled"), settings));
    if (code !== codeConfirm)
      return (toast = Toast.show(i18n.t("Code Missmatch"), settings));
    console.log(code);
  };

  const goBack = () => navigation.goBack();

  return (
    <AppScreenKeyboardHide>
      <View style={styles.leftAlign}>
        <TouchableOpacity
          onPress={goBack}
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 5,
            overflow: "hidden",
          }}>
          <Feather name="chevron-left" size={24} color="#677294" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>{i18n.t("Set Quickpin")}</Text>
        <View style={{ marginTop: 40, width: "90%", justifyContent: "center" }}>
          <Text style={styles.passInfo}>
            {i18n.t("Submit the 4 digit code for login")}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.leftAlign}>
          <Text style={{ ...styles.setCode, marginTop: 40 }}>
            {i18n.t("New Code")}
          </Text>
          <View style={styles.pinCode}>
            <PINCode
              value={code}
              setValue={setCode}
              verificationError={false}
            />
          </View>
          <Text style={{ ...styles.setCode, marginTop: 20 }}>
            {i18n.t("Re-enter Code")}
          </Text>
          <View style={styles.pinCode}>
            <PINCode
              autoFocus={false}
              value={codeConfirm}
              _text={{ color: "#4D4C4C", fontWeight: "normal" }}
              setValue={setCodeConfirm}
              verificationError={false}
            />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 50 }}>
        <View style={styles.subContainer}>
          <GradientButton text={i18n.t("Confirm")} onPress={setPass} />
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
  leftAlign: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    left: "5%",
    alignItems: "flex-start",
  },
  screenTitle: {
    fontSize: 20,
    marginTop: 30,
    color: "#090F47",
    fontFamily: "Overpass-Bold",
  },
  passInfo: {
    fontFamily: "Poppins-Light",
    color: "#807C7C",
    textAlign: "center",
    lineHeight: 21,
    fontSize: 14,
  },
  setCode: {
    fontFamily: "Rubik-Light",
    color: "#807C7C",
    textAlign: "left",
    lineHeight: 19,
    fontSize: 16,
  },
  pinCode: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
  },
});

export default QuickPinSet;
