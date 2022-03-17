// screen 7.1 Forgot Password process step 1
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import AppInput from "../../components/forms/FormField";
import Button from "../../components/GradientButton";
import i18n from "../../utils/i18n";

interface State {
  email: string;
  isEmailInvalid: boolean;
}

interface OwnProps {
  navigation: any;
}

function ForgotPassword({ navigation }: OwnProps) {
  const [state, setState] = useState<State>({
    email: "",
    isEmailInvalid: false
  });

  const handleChange = (name: any, value: any) => {
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const checkEmail = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(state.email)) {
      setState((pre) => ({ ...pre, isEmailInvalid: false }));
    } else {
      setState((pre) => ({ ...pre, isEmailInvalid: true }));
    }
  };

  const { email, isEmailInvalid } = state;
  return (
    <AppScreenKeyboardHide>
      <View style={styles.content}>
        <View />
        <View style={styles.subContent}>
          <View style={styles.passForgot}>
            <View style={styles.featureView}>
              <Text style={styles.featureText}>
                {i18n.t("ForgotPassword")}
              </Text>
            </View>
            <Text style={styles.forgotText}>
              {i18n.t("DummyText")}
            </Text>
          </View>
          <AppInput
            onBlur={checkEmail}
            placeholder={i18n.t("Email")}
            name={"email"}
            error={email && isEmailInvalid}
            value={email}
            icon={
              email && !isEmailInvalid ? (
                <Icon
                  name={"check"}
                  type={"antdesign"}
                  color={"#677294"}
                  size={18}
                />
              ) : null
            }
            onChange={handleChange}
          />
        </View>
        <View style={styles.subContent}>
          <View style={styles.continueContent}>
            <Button
              text={i18n.t("Continue")}
              btnDisabled={!email || isEmailInvalid}
              onPress={() => navigation.navigate("resetOTP")}
              marginTopHide
              width={"100%"}
              borderRadius={12}
              height={45}
              fontSize={14}
            />
          </View>
          <View style={styles.backContent}>
            <Button
              text={i18n.t("Back")}
              onPress={() => navigation.goBack()}
              marginTopHide
              width={"100%"}
              transparent
              borderRadius={12}
              height={40}
              fontSize={14}
            />
          </View>
        </View>
      </View>
    </AppScreenKeyboardHide>
  );
}

const styles = StyleSheet.create({
  content: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subContent: {
    width: "90%", 
    alignItems: "center", 
    marginBottom: 30 
  },
  continueContent: {
    width: "90%", 
    height: 40, 
    marginTop: 30 
  },
  backContent: {
    width: "90%", 
    height: 40, 
    marginTop: 18
  },
  passForgot: {
    width: "100%", 
    alignItems: "center", 
    marginTop: 100 
  },
  forgotText: {
    fontFamily: "Rubik-Light",
    marginBottom: 20,
    textAlign: "center",
    color: "#677294E5",
    width: "90%",
    fontSize: 14
  },
  featureView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginBottom: 10,
  },
  featureText: {
    fontSize: 18,
    fontFamily: "Rubik-Medium",
    textAlign: "center",
  }
});
export default ForgotPassword;
