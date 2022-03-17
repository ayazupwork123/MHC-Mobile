// screen 3.3 User Profile Creation process step 3
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppScreen from "../../components/AppScreen";
import FourStepIndicator from "../../components/stepIndicators/fourSteps/FourStepIndicator";
import ProfileImageRound from "../../components/ProfileImageRound";
import ProfileImage from "../../assets/profileImg.png";
import Button from "../../components/GradientButton";
import i18n from "../../utils/i18n";
import { FONT1MEDIUM, SCREEN_WIDTH } from "../../config";
import { COLORS } from "../../config";

const CreateUserProfile3 = ({ navigation }: any) => {
  const [image, setImage] = useState<any>(ProfileImage);
  return (
    <AppScreen>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <Text style={styles.heading}>{i18n.t("Personal Information")}</Text>
          <FourStepIndicator active={3} />
          <View style={styles.profileImage}>
            <ProfileImageRound profileImage={image} />
            <Text style={styles.featureText}>
              {i18n.t("Set up your profile")}
            </Text>
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <Button
            height={54}
            fontSize={18}
            width={"100%"}
            style={{ fontWeight: FONT1MEDIUM }}
            borderRadius={10}
            text={i18n.t("Next")}
            onPress={() => navigation.navigate("CreateUserProfileSuccess")}
            marginTopHide
          />
          <Button
            height={54}
            transparent
            fontSize={18}
            marginTopHide
            width={"100%"}
            borderRadius={10}
            text={i18n.t("Back")}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </AppScreen>
  );
};

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
  },
  featureText: {
    fontSize: 22,
    color: "#090F47",
    textAlign: "center",
    fontFamily: FONT1MEDIUM,
  },
  heading: {
    fontSize: 20,
    fontFamily: FONT1MEDIUM,
    color: COLORS.black,
    marginBottom: 40,
  },
  profileImage: {
    marginTop: "25%",
    width: "100%",
    alignItems: "center",
  },
});

export default CreateUserProfile3;
