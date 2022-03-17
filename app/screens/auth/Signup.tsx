// screen 2.3 Signup Provide credentials
import React, { useRef, useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import i18n from "../../utils/i18n";
import PhoneInput from "react-native-phone-number-input";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import AppInput from "../../components/forms/FormField";
import Button from "../../components/GradientButton";
import { COLORS, FONT1LIGHT, SCREEN_WIDTH } from "../../config";

interface State {
  selectedType: string;
  phone: string;
  email: string;
  password: string;
  cPassword: string;
}

interface OwnProps {
  navigation: any;
}

function Signup({ navigation }: OwnProps) {
  const phoneInputRef = useRef<PhoneInput>(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [value, setValue] = useState<string>("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState<string>("");
  const [state, setState] = useState<State>({
    selectedType: "",
    phone: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (name: any, value: any) => {
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const onSubmit = (_ref: any) => {
    _ref.current?.focus();
  };

  return (
    <AppScreenKeyboardHide>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <PhoneInput
            layout="first"
            autoFocus
            defaultCode="PK"
            ref={phoneInputRef}
            defaultValue={value}
            placeholder={i18n.t("Enter phone number")}
            textInputStyle={styles.phone_text}
            onChangeText={(text) => setValue(text)}
            codeTextStyle={styles.phone_input_text}
            textContainerStyle={styles.phone_input_text_container}
            onChangeFormattedText={(text) => setFormattedPhoneNumber(text)}
            containerStyle={[
              styles.margin_top_43,
              styles.phone_input_container,
            ]}
          />
          <AppInput
            placeholder={i18n.t("Email")}
            name={"email"}
            value={state.email}
            onChange={handleChange}
            onSubmitRef={passwordRef}
            returnKeyType="next"
            onSubmit={onSubmit}
          />
          <AppInput
            secureTextEntry
            placeholder={i18n.t("Password")}
            name={"password"}
            value={state.password}
            onChange={handleChange}
            refrence={passwordRef}
            onSubmitRef={confirmPasswordRef}
            returnKeyType="next"
            onSubmit={onSubmit}
          />
          <AppInput
            secureTextEntry
            placeholder={i18n.t("Confirm Password")}
            name={"cPassword"}
            value={state.cPassword}
            onChange={handleChange}
            refrence={confirmPasswordRef}
          />
        </View>
        <View style={{ width: '100%', marginBottom: Platform.OS === 'ios' ? 20 : 0}}>
          <Button
            text={i18n.t("Next")}
            onPress={() => navigation.navigate("OTP")}
            marginTopHide
            borderRadius={4}
            height={40}
            fontSize={14}
          />
          <Button
            text={i18n.t("Back")}
            onPress={() => navigation.goBack()}
            marginTopHide
            borderRadius={4}
            transparent
            height={40}
            fontSize={14}
          />
        </View>
      </View>
    </AppScreenKeyboardHide>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: "10%",
    marginBottom: 20,
    width: SCREEN_WIDTH,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentView: {
    width: "90%",
    marginTop: '10%'
  },
  phone_input_container: {
    borderColor: COLORS.inputBorderColor,
    borderWidth: 1,
    width: "100%",
    paddingBottom: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
    height: 54,
  },
  phone_input_text_container: {
    backgroundColor: COLORS.white,
  },
  phone_input_text: {
    borderLeftColor: COLORS.sepraratorColor,
    marginLeft: -10,
    paddingLeft: 14,
    paddingTop: 10,
    height: 35,
    borderLeftWidth: 1,
    color: COLORS.placeholderTextColor,
    fontFamily: FONT1LIGHT,
    fontSize: 14,
  },
  phone_text: {
    color: COLORS.placeholderTextColor,
    fontFamily: FONT1LIGHT,
    fontSize: 14,
    marginLeft: -6,
    marginTop: 1.5,
  },
  margin_top_43: {
    marginTop: 43,
  },
});
export default Signup;
