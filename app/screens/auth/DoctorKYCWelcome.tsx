// screen 5.0 Medical Professional KYC process Welcome Screen
//   contains Screen 5.0 to 5.4
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import KYCImageRectangle from "../../components/doctor/KYCImageRectangle";
import KYCWelcomeSvg from "../../assets/KYCWelcome.svg";
import Rectangle42 from "../../assets/Rectangle42.png";
import Rectangle43 from "../../assets/Rectangle43.png";
import KYCSuccess from "../../assets/KYCSuccess.svg";
import GradientButton from "../../components/GradientButton";
import AppScreen from "../../components/AppScreen";
import ThreeStepIndicator from "../../components/stepIndicators/threeSteps/ThreeStepIndicator";
import i18n from "../../utils/i18n";

interface State {
  currentScreen: number;
}

const Screen1 = ({
  navigate = () => {},
}: {
  navigate: (n: number) => void;
}) => {
  const changeScreen = () => navigate(2);
  const exit = () => console.log("skip");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <KYCWelcomeSvg />
          <View style={styles.verifyView}>
            <Text style={styles.verifyText}>
              {i18n.t("Verify Your Account")}
            </Text>
          </View>
          <View style={styles.verifyView}>
            <Text style={styles.verifyInfo}>
              {i18n.t("Complete Your KYC Proceess in Few Steps")}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 60 }}>
        <View style={styles.subContainer}>
          <GradientButton text={i18n.t("KYC Process")} onPress={changeScreen} />
          <View style={styles.verifyView}>
            <TouchableOpacity onPress={exit}>
              <Text style={styles.skip}>{i18n.t("Skip")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const Screen2 = ({
  navigate = () => {},
}: {
  navigate: (n: number) => void;
}) => {
  const changeScreen = () => navigate(3);
  const goBack = () => navigate(1);

  return (
    <>
      <View style={styles.leftAlign}>
        <Text style={styles.screenTitle}>{i18n.t("KYC Process")}</Text>
        <View style={{ marginTop: 40 }}>
          <ThreeStepIndicator active={1} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <KYCImageRectangle kycImage={Rectangle42} />
          <Text style={styles.verifyUpload}>
            {i18n.t("Upload a photo of ID card")}
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 60 }}>
        <View style={styles.subContainer}>
          <GradientButton text={i18n.t("Next")} onPress={changeScreen} />
          <View style={styles.verifyView}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.skip}>{i18n.t("Back")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const Screen3 = ({
  navigate = () => {},
}: {
  navigate: (n: number) => void;
}) => {
  const changeScreen = () => navigate(4);
  const goBack = () => navigate(2);

  return (
    <>
      <View style={styles.leftAlign}>
        <Text style={styles.screenTitle}>{i18n.t("KYC Process")}</Text>
        <View style={{ marginTop: 40 }}>
          <ThreeStepIndicator active={2} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <KYCImageRectangle kycImage={Rectangle43} />
          <Text style={styles.verifyUpload}>{i18n.t("Upload Your Photo")}</Text>
        </View>
      </View>
      <View style={{ marginBottom: 60 }}>
        <View style={styles.subContainer}>
          <GradientButton text={i18n.t("Next")} onPress={changeScreen} />
          <View style={styles.verifyView}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.skip}>{i18n.t("Back")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const Screen4 = ({
  navigate = () => {},
}: {
  navigate: (n: number) => void;
}) => {
  const changeScreen = () => navigate(5);
  const goBack = () => navigate(3);

  return (
    <>
      <View style={styles.leftAlign}>
        <Text style={styles.screenTitle}>{i18n.t("KYC Process")}</Text>
        <View style={{ marginTop: 40 }}>
          <ThreeStepIndicator active={3} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <KYCImageRectangle kycImage={Rectangle42} />
          <Text style={styles.verifyUpload}>
            {i18n.t("Upload a photo of \nLicense to practice medicine")}.
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 60 }}>
        <View style={styles.subContainer}>
          <GradientButton text={i18n.t("Next")} onPress={changeScreen} />
          <View style={styles.verifyView}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.skip}>{i18n.t("Back")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const Screen5 = () => {
  const changeScreen = () => console.log("Save");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <KYCSuccess />
          <Text style={styles.verifyComplete}>
            {i18n.t("KYC Process Completed")}
          </Text>
          <View style={{ ...styles.verifyView, marginTop: 50, width: "90%" }}>
            <Text style={styles.verifyInfo}>
              {i18n.t("Congratulations KYC")}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 60 }}>
        <View style={styles.subContainer}>
          <GradientButton text={i18n.t("Get Started")} onPress={changeScreen} />
        </View>
      </View>
    </>
  );
};

const KYCWelcome = () => {
  const [state, setState] = useState<State>({
    currentScreen: 1,
  });

  const navigateSubScreen = (n: number = 1) => setState({ currentScreen: n });

  return (
    <AppScreen>
      <AppScreenKeyboardHide>
        {state.currentScreen === 1 && <Screen1 navigate={navigateSubScreen} />}
        {state.currentScreen === 2 && <Screen2 navigate={navigateSubScreen} />}
        {state.currentScreen === 3 && <Screen3 navigate={navigateSubScreen} />}
        {state.currentScreen === 4 && <Screen4 navigate={navigateSubScreen} />}
        {state.currentScreen === 5 && <Screen5 />}
      </AppScreenKeyboardHide>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
  },
  verifyView: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  verifyText: {
    fontSize: 24,
    color: "#090F47",
    textAlign: "center",
    fontFamily: "Overpass-Medium",
  },
  verifyInfo: {
    fontFamily: "Overpass-Light",
    color: "rgba(9, 15, 71, 0.45)",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 16,
  },
  verifyUpload: {
    fontFamily: "Rubik-Bold",
    textAlign: "center",
    top: -20,
    color: "#222222",
    fontSize: 16,
  },
  verifyComplete: {
    fontFamily: "Overpass-Bold",
    textAlign: "center",
    color: "#090F47",
    top: 40,
    fontSize: 24,
  },
  skip: {
    fontFamily: "Rubik-Regular",
    color: "#677294",
    fontSize: 14,
  },
  leftAlign: {
    width: "90%",
    top: 20,
    flexDirection: "column",
    justifyContent: "center",
    left: "5%",
    alignItems: "flex-start",
  },
  screenTitle: {
    fontSize: 20,
    color: "#000000",
    fontFamily: "Rubik-Bold",
  },
});

export default KYCWelcome;
