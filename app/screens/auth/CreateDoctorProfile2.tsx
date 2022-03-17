// screen Medical Professional Profile Creation process step 2
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import i18n from "../../utils/i18n";
import * as ImagePicker from "expo-image-picker";
import ThreeStepIndicator from "../../components/stepIndicators/threeSteps/ThreeStepIndicator";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import Button from "../../components/GradientButton";
import { COLORS, FONT1LIGHT, FONT1MEDIUM, SCREEN_WIDTH } from "../../config";

interface Props {
  navigation: any;
}

function CreateDoctorProfile2(props: Props) {
  const { navigation } = props;
  const [image, setImage] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");

  const cameraAccessPermission = (type: string) => {
    if (Platform.OS !== "web") {
      if (type === "upload") {
        pickFromGallery();
      } else {
        pickFromCamera();
      }
    }
  };

  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert(i18n.t("Sorry, we need access permissions"));
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const pickFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert(i18n.t("Sorry, we need camera roll permissions"));
    } else {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const showOptions = () => {
    Alert.alert(
      i18n.t("Set Profile Picture"),
      i18n.t("Please choose an option"),
      [
        {
          text: i18n.t("Upload from gallery"),
          onPress: () => cameraAccessPermission("upload"),
          style: "cancel",
        },
        {
          text: i18n.t("Take a picture"),
          onPress: () => cameraAccessPermission("camera"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <AppScreenKeyboardHide>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <Text style={styles.heading}>{i18n.t("Personal information")}</Text>
          <ThreeStepIndicator active={2} />
          <View style={styles.form}>
            <View style={styles.pictureBox}>
              <View style={styles.imageView}>
                {image !== "" && (
                  <Image style={styles.profileView} source={{ uri: image }} />
                )}
                <TouchableOpacity
                  style={styles.openCamera}
                  onPress={showOptions}
                >
                  <Image
                    style={styles.cameraIcon}
                    source={require("./../../assets/camera-icon.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.setProfile}>
              {i18n.t("Set up your profile")}
            </Text>
            <View style={styles.textArea}>
              <TextInput
                placeholder={i18n.t("Introduce yourself to the public")}
                value={introduction}
                returnKeyType="done"
                onChangeText={(text) => setIntroduction(text)}
                placeholderTextColor={COLORS.placeholderTextColor}
                multiline
                numberOfLines={3}
                style={styles.input}
              />
            </View>
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
            onPress={() => navigation.navigate("CreateDoctorProfile3")}
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
  },
  heading: {
    fontSize: 20,
    fontFamily: FONT1MEDIUM,
    color: COLORS.black,
    marginBottom: 40,
  },
  form: {
    marginTop: "10%",
  },
  profileView: {
    width: "100%",
    height: "100%",
    borderRadius: 80,
  },
  pictureBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 23,
  },
  imageView: {
    height: SCREEN_WIDTH * 0.3,
    width: SCREEN_WIDTH * 0.3,
    borderRadius: 80,
    padding: 5,
    backgroundColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  openCamera: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: -6,
    right: -5,
  },
  cameraIcon: {
    width: "100%",
    height: "100%",
  },
  setProfile: {
    marginBottom: 7,
    fontSize: 16,
    fontFamily: FONT1MEDIUM,
    color: COLORS.black,
    textAlign: 'center',
  },
  textArea: {
    width: "100%",
    paddingHorizontal: 20,
    height: 110,
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.inputBorderColor,
  },
  input: {
    fontFamily: FONT1LIGHT,
    color: COLORS.blue,
    width: "100%",
    fontSize: 16,
    top: 0,
  },
});

export default CreateDoctorProfile2;
