// screen 2.4 Validate email and screen 2.5 validate phone
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import OTPIcon from "../../assets/svg/otp";
import i18n from "../../utils/i18n";
import PINCode from "../../components/PINCode";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import { FONT1LIGHT } from "../../config"

interface OwnProps {
  navigation: any;
}

function Signup({ navigation }: OwnProps) {
  const testCode = "1020"
  const [value, setValue] = useState<string>("");
  const [verificationError, setVerificationError] = useState<boolean>(false); // Change this value to true for checking wrong OTP screen.
  
  const setCode = (value: string) => {
    setValue(value)
    if (value.length === 4 ) {
      if (value === testCode) {
        setVerificationError(false);
        navigation.navigate("Success");
      }
      else setVerificationError(true);
    }
  }
  return (
    <AppScreenKeyboardHide>
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View />
        <View
          style={{ width: "90%", marginBottom: 30, alignItems: "center" }}
        >
          <OTPIcon />
          <View style={styles.featureView}>
            <Text style={styles.featureText}>{i18n.t("myhealthcell")}</Text>
          </View>
          <Text
            style={{
              fontFamily: FONT1LIGHT,
              marginTop: 50,
              marginBottom: 50,
              color: verificationError ? "#B90000" : "#807C7C",
              textAlign: "center",
              width: "90%",
              fontSize: 14,
            }}
          >
            {verificationError
              ? i18n.t("Please re-check and enter correct code *")
              : i18n.t(
                  "Submit the 4 digit code you got on your provided number"
                )}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <PINCode
              value={value}
              setValue={setCode}
              verificationError={verificationError}
            />
          </View>
          <Text
            onPress={() => {
              setVerificationError(true);
              setTimeout(() => {
                navigation.navigate("Success");
              }, 1000);
            }}
            style={{
              fontFamily: FONT1LIGHT,
              textDecorationLine: "underline",
              marginTop: 100,
              marginBottom: 50,
              color: "#807C7C",
              textAlign: "center",
              width: "90%",
              fontSize: 14,
            }}
          >
            {i18n.t("Didn't receive an OTP? Resend")}
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 30 }}></View>
      </View>
    </AppScreenKeyboardHide>
  );
}

const styles = StyleSheet.create({
  featureView: {
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  featureText: {
    fontSize: 18,
    fontFamily: FONT1LIGHT,
  },
});

export default Signup;

