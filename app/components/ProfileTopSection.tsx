import { LinearGradient } from "expo-linear-gradient";
import React, { FunctionComponent } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Text,
  Alert,
} from "react-native";
import Header from "../components/Header";
import i18n from "../utils/i18n";
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONT1BOLD } from "../config";

interface Props {
  image: string | null;
  isEdit: boolean;
  editAction: () => void;
  setImage: (uri: string) => void;
}

const ProfileTopSection: FunctionComponent<Props> = (props) => {
  const { image, setImage, editAction, isEdit } = props;

  const cameraAccessPermission = async (type: string) => {
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
      alert(i18n.t("NoPhotosPermission"));
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
      alert(i18n.t("NoCameraPermission"));
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
      i18n.t("SetProfilePicture"),
      i18n.t("OptionChoose"),
      [
        {
          text: i18n.t("GalleryUpload"),
          onPress: () => cameraAccessPermission("upload"),
          style: "cancel",
        },
        {
          text: i18n.t("PictureTake"),
          onPress: () => cameraAccessPermission("camera"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.imageContainerIOS}>
      <LinearGradient
        colors={[COLORS.primaryBlue, COLORS.themeGradientColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}>
        <View>
          <Header
            mainHeadingColor={COLORS.white}
            mainHeading={i18n.t("Profile")}
            rightComponent={
              <TouchableOpacity onPress={editAction}>
                <Text style={styles.mainHeading}>
                  {i18n.t(isEdit ? "Save" : "Edit")}
                </Text>
              </TouchableOpacity>
            }
          />
          <View style={styles.pictureBox}>
            <View style={styles.imageView}>
              {image && (
                <Image style={styles.profileView} source={{ uri: image }} />
              )}
              <TouchableOpacity style={styles.openCamera} onPress={showOptions}>
                <Image
                  style={styles.cameraIcon}
                  source={require("./../assets/camera-icon.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  profileView: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  linearGradient: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  imageContainerIOS: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
  },
  pictureBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 38,
  },
  imageView: {
    height: 212,
    width: 212,
    borderRadius: 20,
    padding: 5,
    backgroundColor: COLORS.white,
  },
  openCamera: {
    width: 75,
    height: 75,
    position: "absolute",
    bottom: -34,
    right: -34,
  },
  cameraIcon: {
    width: "100%",
    height: "100%",
  },
  mainHeading: {
    color: "#fff",
    fontSize: 20,
    fontFamily: FONT1BOLD,
  },
});

export default ProfileTopSection;
