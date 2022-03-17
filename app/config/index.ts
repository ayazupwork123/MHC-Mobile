import Constants from "expo-constants";
import { Dimensions } from "react-native";

// App Fonts
export const FONT1LIGHT = "Rubik-Light";
export const FONT1REGULAR = "Rubik-Regular";
export const FONT1MEDIUM = "Rubik-Medium";
export const FONT1BOLD = "Rubik-Bold";
export const FONT1BOLDITALIC = "Rubik-BoldItalic";

// App dimensions
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const TAB_BAR_HEIGHT = 60;


// Regex for email
export const regex =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;

// App Colors
export const COLORS = {
  //primary: "#191B25",
  //secondary: "#16A5EF",
  white: "white",
  lightGrey: "#D3D3D3",
  grey: "#8D8D8D",
  darkerGrey: "#333333",
  black: "black",
  //greyButton: "#474951",
  //inactiveTab: "#24252F",
  //paypal: "#FFC43A",
  //imageBG: "#22242E",
  //imageBGBorder: "#30313A",
  //imageText: "#BABABD",
  //alertButon: "#FF3434",
  alertColor: "#B90000",
  //borderColor: "rgba(255,255,255,0.1)",
  //success: "#83D333",
  themeGradientColor: "#00CCCB",
  primaryBlue: "#4DC6FD",
  blue: "#677294",
  placeholderTextColor: "#ABAFB3",
  separatorColor: "#E5E5E5",
  inputBorderColor: "#E5E5E5",
  shadow: "rgba(0, 0, 0, 0.08)",
  availableTimeBackground: "#D3E3E3",
  availableTimeText: "#0AB986",
  unavailableTimeBackground: "#EAC8C8",
  unavailableTimetext: "#FE5656",
  skyBlue : "#4DC6FD",
  transparent : "transparent",
  darkBlue : "#677294"
};

// Google Api Key
export const GOOGLE_API_KEY = "AIzaSyC-1dUdU_nJ8N4Zh3ijPzLF7MANu6sIkKQ";
