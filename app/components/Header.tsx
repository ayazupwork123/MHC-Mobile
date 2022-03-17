import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackIcon from "../assets/svg/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import SearchIcon from "../assets/svg/SearchIcon";
import { SCREEN_WIDTH } from "../config";

export default function Header({
  drawer,
  mainHeading,
  title,
  search,
  style,
  mainHeadingColor = "#000",
  rightComponent = null,
}: any) {
  const navigation = useNavigation()

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.viewContainer, { marginTop: drawer ? 40 : 0 }]}>
        {drawer ? (
          <DrawerToggleButton tintColor="white" />
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
        )}

        <View style={[{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', width: drawer ? SCREEN_WIDTH*0.9 - 50 : SCREEN_WIDTH*0.9 - 50.74 }]}>
          <View style={styles.titleContainer}>
            {title && (
              <Text style={[styles.title, { color: drawer ? "#fff" : "#000" }]}>
                {title}
              </Text>
            )}
            {mainHeading && (
              <Text
                style={[
                  styles.mainHeading,
                  { color: drawer ? "#fff" : mainHeadingColor, marginTop: 3 },
                ]}
              >
                {mainHeading}
              </Text>
            )}
          </View>
        <View style={{paddingRight: 10}}>
        {search && <SearchIcon />}
        </View>
        {rightComponent && rightComponent}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  viewContainer: {
    width: "90%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: { alignItems: "flex-start" },
  title: { color: "#000", fontSize: 18, fontFamily: "Rubik-Bold" },
  subHeading: { color: "#fff", opacity: 0.6, fontSize: 14 },
  mainHeading: { color: "#fff", fontSize: 20, fontFamily: "Rubik-Bold" },
});
