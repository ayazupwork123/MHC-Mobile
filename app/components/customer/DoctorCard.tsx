import React, { FunctionComponent } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientButton from "../GradientButton";
import Heart from "../../assets/svg/heart";
import HeartFill from "../../assets/svg/heartfill";
import PinIcon from "../../assets/svg/pin";
import i18n from "../../utils/i18n";
import {
  COLORS,
  FONT1BOLD,
  FONT1LIGHT,
  FONT1MEDIUM,
  FONT1REGULAR,
  SCREEN_WIDTH,
} from "../../config";

interface Props {
  id: number;
  title: string;
  specialty?: string;
  image: any;
  isFavorite: boolean;
  buttonText: string;
  location?: string;
  education?: string;
  time?: string;
  date?: string;
  navigateTo?: any;
  favouriteToggleHandler?: (id: number) => void;
}

const DoctorCard: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const { navigateTo = "", favouriteToggleHandler } = props;
  return (
    <View style={styles.listContainer}>
      <View style={styles.main}>
        <Image source={props.image} style={styles.image} />
        <View style={styles.rightBox}>
          <View style={styles.center}>
            <Text style={styles.listTitle}>{props.title}</Text>
            <TouchableOpacity
              onPress={() =>
                favouriteToggleHandler && favouriteToggleHandler(props.id)
              }
              style={styles.marginLeft}>
              {props.isFavorite ? <HeartFill /> : <Heart />}
            </TouchableOpacity>
          </View>
          <Text style={styles.listStatus}>{props.specialty}</Text>
          <Text style={styles.listDesignation}>{props.education}</Text>
          <View style={styles.locationView}>
            <View style={styles.padTop2}>
              <PinIcon />
            </View>
            <Text style={styles.location}>{props.location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.available}>{i18n.t("Next Available")}</Text>
          <Text style={styles.listDesignation}>
            <Text style={styles.time}>{`${props.time}  `}</Text>
            {props.date}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <GradientButton
            onPress={() => navigation.navigate(navigateTo)}
            text={props.buttonText}
            marginTopHide
            borderRadius={4}
            height={40}
            fontSize={14}
            width={"100%"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: COLORS.white,
    paddingBottom: 15,
    width: "98%",
    borderRadius: 6,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 2,
  },
  listTitle: {
    fontFamily: FONT1MEDIUM,
    marginVertical: 5,
    width: SCREEN_WIDTH * 0.9 - 175,
  },
  listStatus: {
    fontSize: 12,
    fontFamily: FONT1REGULAR,
    color: COLORS.themeGradientColor,
    width: "90%",
  },
  listDesignation: {
    fontSize: 12,
    fontFamily: FONT1LIGHT,
    color: COLORS.blue,
    marginTop: 3,
    width: "100%",
  },
  location: {
    width: "90%",
    fontSize: 12,
    marginTop: 3,
    fontFamily: FONT1LIGHT,
    color: COLORS.blue,
  },
  marginLeft: {
    //marginLeft: 4,
    position: "absolute",
    top: 7,
    right: 10,
  },
  main: {
    flexDirection: "row",
    width: "90%",
    marginTop: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginRight: 10,
    resizeMode: "contain",
  },
  rightBox: {
    width: SCREEN_WIDTH * 0.9 - 150,
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  available: {
    fontSize: 16,
    fontFamily: FONT1REGULAR,
    color: COLORS.themeGradientColor,
  },
  locationView: {
    flexDirection: "row",
    width: "100%",
    marginTop: 3,
  },
  padTop2: {
    paddingTop: 2,
    paddingRight: 5,
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20,
  },
  time: {
    fontFamily: FONT1BOLD,
    marginHorizontal: 5,
  },
  buttonView: {
    width: 150,
    height: 40,
  },
});

export default DoctorCard;
