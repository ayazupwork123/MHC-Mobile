// COMPONENT 31. ReportImage
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import i18n from "../utils/i18n";
import { COLORS, SCREEN_WIDTH } from "../config/index"
import noImage from "../assets/no-image.png"
import deleteImage from "../assets/delete-image.png"
import addImage from "../assets/add-grey.png"
interface riProps {
  riImage: [ImageSourcePropType];
}

const ReportImage = ({riImage} : riProps) => {
  const [image, setImage] = useState<any>(null); 
  const [images, setImages] = useState<any>([])
  const [source, setSource] = useState<any>([])
  const [clickAddImage, setClickAddImage] = useState<any>(0); 
  const [clickDelImage, setClickDelImage] = useState<any>(0);

  useEffect(() => {
   var images = riImage ? riImage.map((item : any) => item.uri) : []
   setImages(images)
  },[])
 
  //Gallery
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
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      let newImages = [...images]
      setImages([...newImages, result.uri])
      if (source==noImage) {
        setSource(addImage)
      }
      let clicksAddImage = clickAddImage + 1
      setClickAddImage(clicksAddImage)
    }
  };
 
  //Camera
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert(i18n.t("NoCameraPermission"));
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      let newImages = [...images]
      setImages([...newImages, result.uri])
      if (source==noImage) {
        setSource(addImage)
      }
      let clicksAddImage = clickAddImage + 1
      setClickAddImage(clicksAddImage)
    }
  };

  //Menu
  const PickImage = async () => {
    Alert.alert(i18n.t("Permissions"), i18n.t("UploadPhoto"), [
      { text: i18n.t("Gallery"),onPress: () => chooseFromGallery() },
      { text: i18n.t("Camera"), onPress: () => openCamera() },
    ]);    
  };

  const handleArrayImages = (index: number) => {
    let imagesCopy = [...images]
    imagesCopy.splice(index,1)
    setImages([...imagesCopy])
  }

  const handlerClickDelImage = (index: number) => {
    let clicksDelImage = clickDelImage + 1
    setClickDelImage(clicksDelImage)    
    if (clickDelImage == clickAddImage-1) {
      setSource(noImage)
    }
  }
  
  return(
    <View style={styles.container}>
      { source == noImage  ?          
        <View style={styles.noImageView}>
          <TouchableOpacity onPress={() => {PickImage() }}>  
            <View style={styles.image}>
              <Image source={noImage} style={styles.noImage}/>
            </View>
          </TouchableOpacity>
        </View>      
      : 
        <View style={styles.container}>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollStyle} showsHorizontalScrollIndicator={false}>
            {/* ARRAY */}
            {images.map((item: any,index: number) => {
              return(
                <View key={index} style={styles.deleteImageView}>
                  <Image
                    source={image ? { uri: item } : riImage}
                    style={styles.imageUploaded}
                  />
                  <View style={styles.deleteView}>
                    <TouchableOpacity onPress={() => {handleArrayImages(index), handlerClickDelImage(index)}}> 
                      <Image source={deleteImage} style={styles.deleteImage}/>
                    </TouchableOpacity>
                  </View>
                </View> 
              )
            })}
            {/* NEW IMAGE */}
            <TouchableOpacity onPress={() => {PickImage() }}>        
              <View style={styles.image}>
                <Image source={addImage} style={styles.noImage}/>
              </View>
            </TouchableOpacity>        
          </ScrollView>
        </View>
      }
    </View>
  ) 
}

const styles = StyleSheet.create({
  scrollStyle: {
    justifyContent: "flex-start",
    paddingVertical: 5
  },
  deleteImageView: {
    bottom: SCREEN_WIDTH * 0.0180,
    width: SCREEN_WIDTH * 0.306,
    height: SCREEN_WIDTH * 0.306,
    alignItems: "center",
    justifyContent: "center",    
  },  
  deleteView: {
    left: SCREEN_WIDTH * 0.097,
    bottom: SCREEN_WIDTH * 0.220,
    width: SCREEN_WIDTH * 0.053,
    height: SCREEN_WIDTH * 0.053,
    borderRadius: SCREEN_WIDTH * 0.02515,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.white,
  },
  imageUploaded: {
    left: SCREEN_WIDTH * -0.005,
    bottom: SCREEN_WIDTH * -0.035,
    width: SCREEN_WIDTH * 0.24,
    height: SCREEN_WIDTH * 0.24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.blue,    
  },
  deleteImage: {
    left: SCREEN_WIDTH * 0.00061,
    width: SCREEN_WIDTH * 0.047,
    height: SCREEN_WIDTH * 0.047,
    borderRadius: SCREEN_WIDTH * 0.02515,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  image: {
    top: SCREEN_WIDTH * 0.022,
    left: SCREEN_WIDTH * 0.022,
    width: SCREEN_WIDTH * 0.24,
    height: SCREEN_WIDTH * 0.24,
    borderRadius: 10,
    backgroundColor: COLORS.fineBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  noImage: {
    width: SCREEN_WIDTH * 0.097,
    height: SCREEN_WIDTH * 0.090,
  },
  noImageView: {
    left: SCREEN_WIDTH * -0.316,
    top: SCREEN_WIDTH * -0.032,
  }
})

export default ReportImage