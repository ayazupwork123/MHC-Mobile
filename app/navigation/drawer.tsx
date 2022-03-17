import React from 'react';
import { View, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllSubscriptionPlan from "../screens/doctor/AllSubscriptionPlan"
import TermsCondition from '../screens/auth/TermsAndConditions';
import StackNavigation from './bottomNav';
import { NavigationContainer } from '@react-navigation/native';
import { CustomDrawerContent } from './customDrawer';
import { LinearGradient } from "expo-linear-gradient";
import AnimatedDrawer from '../components/AnimatedDrawer';
import { COLORS } from '../config';
const Drawer = createDrawerNavigator();

function DrawerStack() {

  return (
    <LinearGradient
      colors={[COLORS.skyBlue,COLORS.darkBlue]}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.transparentView}>
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="StackNavigation"
            screenOptions={{ 
              headerShown : false,
              drawerType: "slide",
              overlayColor: "transparent", 
              sceneContainerStyle: styles.sceneContainerStyle,
              drawerStyle: styles.drawerStyle
            }}
            drawerContent={(props) => <CustomDrawerContent {...props}  />}
          >
            <Drawer.Screen name="AllSubscriptionPlan" component={AnimatedDrawer(AllSubscriptionPlan)} />
            <Drawer.Screen name="TermsCondition" component={AnimatedDrawer(TermsCondition)} />
            <Drawer.Screen name="StackNavigation" component={AnimatedDrawer(StackNavigation)} options={{ headerShown: false }}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },

  transparentView: {
    ...StyleSheet.absoluteFill,
  },
  container :  {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  drawerStyle: {
    backgroundColor: 'transparent'
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent'
  }
});

export { DrawerStack };