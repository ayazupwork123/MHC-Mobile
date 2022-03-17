// screen 7.2 Forgot Password process step 2
//            (final , will then be redirected to Reset Password)
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import Button from "../../components/GradientButton";
import PINCode from "../../components/PINCode";
import i18n from "../../utils/i18n";

interface OwnProps {
  navigation: any;
}

function resetOTP({ navigation }: OwnProps) {
  const [value, setValue] = useState<string>("");
  const [verificationError, setVerificationError] = useState<boolean>(false); // Change this value to true for checking wrong OTP screen.
  return (
    <AppScreenKeyboardHide>
      <View style={styles.content}>
        <View />
        <View style={styles.subContent}>
          <View style={styles.featureView}>
            <Text style={styles.featureText}>
              {i18n.t("CodeEnter4Digits")}
            </Text>
          </View>
          <Text style={[styles.code, { color: verificationError ? "#B90000" : "#807C7C" }]}>
            {verificationError
              ? i18n.t('CodeRecheck')
              : i18n.t('CodeEnterFromEmail')}
          </Text>
          <View style={styles.pinCode}>
            <PINCode
              value={value}
              setValue={setValue}
              verificationError={verificationError}
            />
          </View>
        </View>
        <View style={styles.subContent}>
          <View style={styles.continueContent}>
            <Button
              text={i18n.t("Continue")}
              onPress={() => {
                setVerificationError(true);
                setTimeout(() => {
                  navigation.navigate("resetOTP");
                }, 1000);
              }}
              btnDisabled={!value || value.length !== 4}
              marginTopHide
              width={"100%"}
              borderRadius={12}
              height={45}
              fontSize={14}
            />
          </View>
          <View style={styles.backContenet}>
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
  container: {
    flex: 1,
  },
  content: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subContent: {
    width: "90%", 
    marginBottom: 30, 
    alignItems: "center" 
  },
  continueContent: {
    width: "90%", 
    height: 40, 
    marginTop: 30
  },
  backContenet: {
    width: "90%", 
    height: 40, 
    marginTop: 18 
  },
  code: {
    fontFamily: "Rubik-Light",
    marginTop: 10,
    marginBottom: 30,
    color: "#807C7C",
    textAlign: "center",
    width: "90%",
    fontSize: 14
  },
  pinCode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%"
  },
  featureView: {
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  featureText: {
    fontSize: 18,
    fontFamily: "Rubik-Medium",
  },
});

export default resetOTP;
