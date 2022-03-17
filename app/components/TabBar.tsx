import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookIcon from "../assets/svg/BookIcon"
import BookActive from "../assets/svg/BookActive"
import HeartIcon from "../assets/svg/HeartIcon"
import HeartActive from "../assets/svg/HeartActive"
import HomeIcon from "../assets/svg/HomeIcon"
import HomeActive from "../assets/svg/HomeActive"
import Bell from '../assets/svg/Bell';
import { TAB_BAR_HEIGHT } from "../config"

function TabBar({ state, descriptors, navigation, doctor=false, customer=false }: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      height: TAB_BAR_HEIGHT,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      shadowColor: 'white',
      overflow: 'hidden',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.25,
      shadowRadius: 16,
      elevation: 12,
    }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            // canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const _getIconForCustomer = () => {
          switch (label) {
            case 'Home':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><HomeActive /></View> : <HomeIcon />
            case 'Favorite':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><HeartActive /></View> : <HeartIcon />
            case 'Book':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><BookActive /></View> : <BookIcon />
            case 'Bell':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><Bell /></View> : <Bell />
            default:
              return <Image source={require("../assets/user.png")} />
          }
        }

        const _getIconForDoctor = () => {
          switch (label) {
            case 'Home':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><HomeActive /></View> : <HomeIcon />
            case 'Customers':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><Image style={{width: 24.55, height: 20}} source={require('./../assets/group-active.png')}/></View> : <Image style={{width: 24.55, height: 20}} source={require('./../assets/group2.png')}/>
            case 'Book':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><BookActive /></View> : <BookIcon />
            case 'Schedule':
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><Image style={{width: 21.18, height: 20}} source={require('./../assets/calendar-active.png')}/></View> : <Image style={{width: 21.18, height: 20}} source={require('./../assets/calender-icon.png')}/>
            default:
              return isFocused ? <View style={{ backgroundColor: '#03CDCD', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}><Bell /></View> : <Bell />
          }
        }

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            activeOpacity={0.75}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {doctor && _getIconForDoctor()}
            {customer && _getIconForCustomer()}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBar