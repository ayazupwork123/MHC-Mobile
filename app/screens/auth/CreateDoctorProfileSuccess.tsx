// screen 4.5 Medical Professional Profile Creation process finished
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppScreen from "../../components/AppScreen";
import Button from "../../components/GradientButton";
import SuccessIcon from "../../assets/svg/success";
import { COLORS, FONT1LIGHT, FONT1MEDIUM } from "../../config";
import i18n from "../../utils/i18n";

interface OwnProps {
  navigation: any;
}

function CreateDoctorProfileSuccess({ navigation }: OwnProps) {
  return (
    <AppScreen>
      <View style={styles.main}>
        <View />
        <View style={styles.content}>
          <SuccessIcon />
          <View style={styles.featureView}>
            <Text style={styles.featureText}>
              {i18n.t("Profile Created Successfully")}
            </Text>
            <Text style={styles.greyText}>{i18n.t("Congratulations")}</Text>
          </View>
        </View>
        <View style={{ width: "100%", marginBottom: 30 }}>
          <Button
            text={i18n.t("Set Quick Pin")}
            onPress={() => navigation.navigate("Login")}
            marginTopHide
            borderRadius={10}
            height={50}
            fontSize={16}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  featureView: {
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },
  featureText: {
    fontSize: 22,
    color: "#090F47",
    textAlign: "center",
    fontFamily: FONT1MEDIUM,
  },
  greyText: {
    marginTop: 16,
    marginHorizontal: 10,
    fontSize: 16,
    color: COLORS.grey,
    textAlign: "center",
    fontFamily: FONT1LIGHT,
  },
  content: {
    width: "90%",
    marginBottom: 30,
    alignItems: "center",
  },
});
export default CreateDoctorProfileSuccess;
