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

import i18n from "../../utils/i18n";

interface kycProps {
  kycImage: ImageSourcePropType;
}

const KYCImageRectangle = ({ kycImage }: kycProps) => {
  const [image, setImage] = useState<any>(null);

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
      aspect: [4, 3],
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
      aspect: [4, 3],
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
    <View>
      <Image
        source={image ? { uri: image } : kycImage}
        style={{ width: 330, height: 170 }}
      />
      <TouchableOpacity onPress={() => PickImage()} style={styles.cameraStyles}>
        <FontAwesome name="camera" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraStyles: {
    width: 40,
    height: 40,
    top: -25,
    left: 305,
    padding: 4,
    backgroundColor: "#999999",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    borderRadius: 20,
  },
});

export default KYCImageRectangle;
