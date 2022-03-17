// screen 3.4 User Profile Creation Successful
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SuccessIcon from "../../assets/svg/success";
import i18n from "../../utils/i18n";
import AppScreen from "../../components/AppScreen";
import GradientButton from "../../components/GradientButton";

interface OwnProps {
  navigation: any;
}

function CreateUserProfileSuccess({ navigation }: OwnProps) {
  return (
    <AppScreen>
      <View style={styles.main}>
        <View style={styles.content}>
          <SuccessIcon />
          <View style={styles.featureView}>
            <Text style={styles.featureText}>
              {i18n.t("ProfileCreateSuccess")}
            </Text>
            <Text style={styles.greyText}>{i18n.t("Congratulations")}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 30 }}>
        <GradientButton
          text={i18n.t("SetQuickPin")}
          onPress={() => navigation.navigate("Login")}
          marginTopHide
          borderRadius={10}
          height={50}
          fontSize={16}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
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
    fontFamily: "Rubik-Regular",
  },
  greyText: {
    marginTop: 16,
    marginHorizontal: 10,
    fontSize: 16,
    color: "#8D8D8D",
    textAlign: "center",
    fontFamily: "Rubik-Light",
  },
  content: {
    width: "100%",
    marginBottom: 30,
    alignItems: "center",
  },
});
export default CreateUserProfileSuccess;

