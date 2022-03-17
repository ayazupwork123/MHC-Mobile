import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import {IMAGES} from '../config/constants'
import i18n from "../utils/i18n";

interface imgProps {
  profileImage?: ImageSourcePropType,
  containerStyle?: any
}

const ProfileImageRound = ({ profileImage,containerStyle }: imgProps) => {
  const [image, setImage] = useState<any>(null);

  // TODO: if profileImage is not provided, a circle with the user's initials should show instead

  const chooseFromGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert(i18n.t("NoPhotosPermission"));
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      // console.log(result.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert(i18n.t("NoCameraPermission"));
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      // console.log(result.uri);
    }
  };

  const PickImage = async () => {
    Alert.alert(i18n.t("Permissions"), i18n.t("UploadPhoto"), [
      {
        text: i18n.t("Gallery"),
        onPress: () => chooseFromGallery(),
      },
      { text: i18n.t("Camera"), onPress: () => openCamera() },
    ]);
  };

  return (
    <View style={[containerStyle]}>
      <Image
        source={image ? { uri: image } : profileImage ? profileImage : IMAGES.common.profileImage}
        style={styles.imgStyles}
      />
      <TouchableOpacity onPress={() => PickImage()} style={styles.cameraStyles}>
        <FontAwesome name="camera" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyles: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  cameraStyles: {
    width: 40,
    height: 40,
    top: -50,
    left: 95,
    padding: 4,
    backgroundColor: "#999999",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    borderRadius: 20,
  },
});

export default ProfileImageRound;
