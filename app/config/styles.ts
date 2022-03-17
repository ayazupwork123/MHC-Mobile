//Contains styles for text etc.
//Contains styles for text etc.
import { StyleSheet } from "react-native";
import { COLORS } from ".";

export const dropdownStyles = StyleSheet.create({
  dropdown: {
    height: 54,
    width: '100%',
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor:  COLORS.inputBorderColor,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.placeholderTextColor
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Rubik-Light",
    color: "#677294" 
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  }
})