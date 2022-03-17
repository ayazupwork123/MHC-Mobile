import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text,Image,StyleSheet, View } from "react-native";
import { moderateScale } from "../utils/helper";
import { COLORS } from "../config";
import { IMAGES } from "../config/constants";
const MenuItem = (props : any) => {
    
  let forwardArrow = props.forwardArrow??true
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      key={props.name} 
      style={[styles.containter,props.isActive ? styles.active : null ]}
      onPress={() => navigation.navigate(props.route)}
    >
      {props.icon &&
        <View style={{ width : '10%' }}>
          <Image source={props.icon} />
        </View>
      }
      <View style={{ width : '90%',justifyContent : 'center' }}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      {forwardArrow && 
        <View style={{ justifyContent : 'center' }}>
          <Image source={IMAGES.common.forwardArrow} />
        </View>
      }
    </TouchableOpacity>
  )
}
const styles =  StyleSheet.create({
  text : {
    fontSize : moderateScale(18),
    color : COLORS.white,
    paddingHorizontal : moderateScale(15),
  },
  active : {
    borderColor : COLORS.white,
    borderRadius : moderateScale(6),
    borderWidth : 1,
    shadowOffset: {width: moderateScale(4), height: moderateScale(4)},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.1,
  },
  containter : {
    width : moderateScale(212),
    height : moderateScale(61),
    flexDirection  : 'row',           
    padding : moderateScale(20),
    justifyContent : 'center'
  }
})
export {MenuItem}