import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Text,StyleSheet, View } from 'react-native';
import ProfileImageRound from '../components/ProfileImageRound';
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from '../config';
import { moderateScale } from '../utils/helper';
import { MenuItem } from '../components/DrawerMenu';
import { IMAGES,DOCTOR_DRAWER_MENU,USER_DRAWER_MENU } from '../config/constants';
//menus need translation
const menus = DOCTOR_DRAWER_MENU??USER_DRAWER_MENU
function CustomDrawerContent(props:any ) {

  const current = props.navigation.getState().routes[props.navigation.getState().index].name
  return (
    <LinearGradient
      colors={[COLORS.skyBlue,COLORS.darkBlue]}
      start={{ x: 1, y: 1 }}
      end={{ x: 1 , y: 0 }}
      style={[ styles.container]}
    >
      <ProfileImageRound containerStyle={styles.imageContainer} />
      <Text style={styles.userName}>User Name</Text>
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1, justifyContent: "space-around"}}>
        <View style={{ width :moderateScale(216), marginTop : moderateScale(-10) }}>
          {menus.map(value => {
            let active = value.route == current
            return <MenuItem 
            name={value.name} 
            key={value.name}
            icon={value.icon}
            route={value.route}
            isActive={active}
          />
          })}
        </View>
        <View style={{ marginBottom : 10, width :moderateScale(216) }}>
          <MenuItem 
            name={"Logout"} 
            key={"Logout"}
            icon={IMAGES.drawer.logout}
            forwardArrow={false}
          />
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal : '25%',
    paddingTop : moderateScale(64)
  },
  userName : {
    fontSize : moderateScale(20),
    fontFamily : 'Rubik-Regular',
    color : COLORS.white
  },
  container :  {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export { CustomDrawerContent }
