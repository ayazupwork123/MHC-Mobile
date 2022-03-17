// screen 8.1 Reset Password screen
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import Button from "./../../components/GradientButton";
import PasswordField from "./../../components/forms/PasswordField";
import AppScreen from "../../components/AppScreen";
import { COLORS } from "../../config";
import i18n from "../../utils/i18n";
import { SCREEN_WIDTH } from "./../../config/index";

interface State {
  password: string;
  cPassword: string;
  isValid: boolean;
}
function ResetPassword({ navigation }: any) {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [state, setState] = useState<State>({
    password: "",
    cPassword: "",
    isValid: false,
  });

  const [alertPresent, setAlertPresent] = useState<boolean>(false)

  const handleChange = (name: any, value: any) => {
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const [enableButton, setEnableButton] = useState<boolean>(false);
  useEffect(() => {
    state.password.trim() &&
    state.cPassword.trim() &&
    state.isValid &&
    state.password === state.cPassword
      ? setEnableButton(true)
      : setEnableButton(false);
  }, [state.password, state.cPassword]);

  const validatePassword = (pass: string) => {
    var containsNum = /\d/;
    var containsSym = /\W/;
    var containsCap = /[A-Z]+/;
    if (
      containsNum.test(pass) &&
      containsSym.test(pass) &&
      containsCap.test(pass) &&
      state.password.length > 5
    ) {
      setState((pre) => ({ ...pre, isValid: true }));
    } else {
      
      if (!alertPresent){
        setAlertPresent(true)
        Alert.alert(
          i18n.t("auth.ResetPassword.InvalidPasswordTitle"),
          i18n.t("auth.ResetPassword.InvalidPasswordInfo"),
          [{text: 'OK', onPress: () => setAlertPresent(false) }],
        );
      } 
      setState((pre) => ({ ...pre, isValid: false }));
    }
  };

  function handleBlur(value: string) {
    validatePassword(value);
  }

  return (
    <AppScreen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, alignItems: "center" }}
      >
        <View style={styles.containerTop}>
          <Text style={styles.screenTitle}>{i18n.t("auth.ResetPassword.title")}</Text>
          <Text style={styles.screenInfo}>{i18n.t("auth.ResetPassword.ResetPasswordIntro")}</Text>
          <View
            style={{
              width: "90%",
            }}
          >
            <View style={{ paddingBottom: 15 }}>
              <PasswordField
                placeholder={i18n.t("common.Password")}
                name={"password"}
                value={state.password}
                onChange={handleChange}
                onBlur={() => handleBlur(state.password)}
                refrence={passwordRef}
              />
            </View>

            <PasswordField
              placeholder={i18n.t("common.ConfirmPassword")}
              name={"cPassword"}
              value={state.cPassword}
              onChange={handleChange}
              onBlur={() => handleBlur(state.password)}
              refrence={confirmPasswordRef}
            />
          </View>
        </View>

        <View style={styles.containerBottom}>
          <Button
            text={i18n.t("auth.ResetPassword.UpdatePassword")}
            onPress={() => navigation.navigate("ResetPasswordSuccess")}
            marginTopHide
            borderRadius={10}
            height={50}
            fontSize={16}
            btnDisabled={enableButton ? false : true}
          />
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate("Login")}
          >
            {i18n.t("Back")}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  containerBottom: {
    flex: 0.5,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
  },
  screenTitle: {
    fontFamily: "Rubik-Medium",
    fontSize: 24,
    marginBottom: 20,
  },
  screenInfo: {
    fontFamily: "Rubik-Regular",
    fontSize: 14,
    textAlign: "center",
    width: "80%",
    paddingBottom: 20,
    color: COLORS.grey,
  },
  loginText: {
    margin: SCREEN_WIDTH * 0.08,
    color: COLORS.themeGradientColor,
  },
});
export default ResetPassword;
