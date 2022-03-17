// screen 6 Login Screen
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BasicModal from "../../components/AppError";
import i18n from "../../utils/i18n";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import AppInput from "../../components/forms/FormField";
import PasswordField from "../../components/forms/PasswordField";
import Button from "../../components/GradientButton";
import { COLORS, FONT1LIGHT, FONT1MEDIUM, FONT1REGULAR } from "../../config";

interface State {
  selectedType: string;
  phone: string;
  email: string;
  password: string;
  cPassword: string;
  modalVisible: boolean;
  isEmailInvalid: boolean;
  isPasswordInvalid: boolean;
}

interface OwnProps {
  navigation: any;
}

function Login({ navigation }: OwnProps) {
  const passwordRef = useRef(null);
  const [state, setState] = useState<State>({
    selectedType: "",
    phone: "",
    email: "fareedalam873@gmail.com",
    password: "123456",
    cPassword: "",
    modalVisible: false,
    isEmailInvalid: false,
    isPasswordInvalid: false,
  });

  useEffect(() => {
    setState((pre) => ({
      ...pre,
      isPasswordInvalid: state.password.length < 6,
    }));
  }, [state.password]);

  const handleChange = (name: string, value: any) => {
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const closeModalVisible = () => {
    setState((pre) => ({ ...pre, modalVisible: false }));
  };

  const handleModalClick = () => {
    setState((pre) => ({ ...pre, modalVisible: false }));
    navigation.navigate("TermsCondition")
  };

  const modalContent = () => {
    return (
      <View style={styles.content}>
        <Icon
          name={"alert-circle-outline"}
          type={"ionicon"}
          color={COLORS.alertColor}
          size={60}
        />
        <Text style={styles.noEmailFound}>
          {i18n.t('NoEmailFound')}
        </Text>
        <Text style={styles.noSuchEmail}>
          {i18n.t('NoEmailRegistered')}
        </Text>
        <Text
          style={styles.noAccountContainer}
          onPress={handleModalClick}
        >
          {i18n.t('NoAccount')}
        </Text>
      </View>
    );
  };

  const checkEmail = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(state.email)) {
      setState((pre) => ({ ...pre, isEmailInvalid: false }));
    } else {
      setState((pre) => ({ ...pre, isEmailInvalid: true }));
    }
  };

  const onSubmit = (_ref: any) => {
    _ref.current?.focus();
  };

  return (
    <>
      <AppScreenKeyboardHide>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.featureView}>
              <Text style={styles.featureText}>{i18n.t("WelcomeBack")}</Text>
            </View>
            <Text style={styles.headerContent}>
              {i18n.t('DummyText')}
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <AppInput
              onBlur={checkEmail}
              placeholder={i18n.t("Email")}
              name={"email"}
              value={state.email}
              error={state.email && state.isEmailInvalid}
              icon={
                state.email && !state.isEmailInvalid ? (
                  <Icon
                    name={"check"}
                    type={"antdesign"}
                    color={"#677294"}
                    size={18}
                  />
                ) : null
              }
              onChange={handleChange}
              onSubmitRef={passwordRef}
              returnKeyType="next"
              onSubmit={onSubmit}
            />
            <PasswordField
              secureTextEntry
              placeholder={i18n.t("Password")}
              error={state.password && state.password.length < 6}
              name={"password"}
              value={state.password}
              onChange={handleChange}
              refrence={passwordRef}
            />
            <View style={styles.loginContainer}>
              <Button
                text={i18n.t("Login")}
                btnDisabled={!state.email || !state.password}
                onPress={() => navigation.navigate("MainTabNav")}
                marginTopHide
                width={"100%"}
                borderRadius={12}
                height={45}
                fontSize={14}
              />
            </View>
            <Text
              onPress={() => navigation.navigate("ForgotPassword")}
              style={styles.forgotContainer}
            >
              {i18n.t("ForgotPassword")}
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <Text
              onPress={() => navigation.navigate("TermsCondition")}
              style={styles.forgotContainer}
            >
              {i18n.t('NoAccount')}
            </Text>
          </View>
        </View>
      </AppScreenKeyboardHide>
      <BasicModal
        modalVisible={state.modalVisible}
        closeModalVisible={closeModalVisible}
        headerTitle={""}
        content={modalContent()}
        buttonTitle={"CONTINUE"}
        handleClick={handleModalClick}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  noAccountContainer: {
    fontSize: 14,
    fontFamily: FONT1REGULAR,
    color: COLORS.alertColor
  },
  noEmailFound: {
    fontSize: 24, 
    fontFamily: FONT1MEDIUM
  },
  noSuchEmail: {
    fontSize: 14, 
    fontFamily: FONT1REGULAR, 
    color: COLORS.grey 
  },
  header: {
    width: "100%", 
    alignItems: "center",
    marginTop: 100 
  },
  emailContainer: {
    width: "90%", 
    alignItems: "center", 
    marginBottom: 30 
  },
  loginContainer: {
    width: "100%", 
    height: 40, 
    marginTop: 30 
  },
  forgotContainer: {
    fontFamily: FONT1LIGHT,
    marginTop: 20,
    textAlign: "center",
    color: Colors.themeGradientColor,
    width: "90%",
    fontSize: 14
  },
  headerContent: {
    fontFamily: FONT1LIGHT,
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
export default Login;
