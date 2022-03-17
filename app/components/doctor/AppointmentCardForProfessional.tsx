// 33. AppointmentCardForProfessional
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment-timezone";
import PinIcon from "../../assets/svg/pin";
import { SCREEN_WIDTH, COLORS } from "../../config";
import i18n from "../../utils/i18n"; 

interface Props {
  image: any;
  name: string;
  reason?: string;
  location: string;
  navigateTo?: any;
  date: string;
  time: string;
}

const CustomerCard = (props: Props) => {
  const navigation = useNavigation();
  const { navigateTo = "" } = props;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[{ fontFamily: "Rubik-Bold" }, styles.card_heading]}>
          {i18n.t("components.AppointmentRequestCard.patientName") + " "}
          <Text style={{ color: COLORS.themeGradientColor }}>
            {props.name}
          </Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", width: SCREEN_WIDTH * 0.81 }}>
        <Image
          source={{ uri: props.image }}
          style={{
            width: 100,
            borderRadius: 7,
            height: 100,
            marginRight: 10,
            resizeMode: "cover"
          }}
        />
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.reasonHeading}>
            {i18n.t("components.AppointmentRequestCard.appointmentReason")}
          </Text>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Text numberOfLines={3} style={styles.reasonText}>
              {props.reason}
            </Text>
          </View>
          <Text style={styles.timing}>
            <Text
              style={{
                fontWeight: "bold",
                color: COLORS.themeGradientColor,
                flexShrink: 1,
              }}>
                
              {i18n.t("common.Time") + ":"}
            </Text>
            <Text
              style={{
                color: COLORS.blue,
                fontWeight: "bold",
                fontSize: 12,
              }}>
              {" " + props.time}
            </Text>
            <Text style={{ fontFamily: "Rubik-Light", fontSize: 12 }}>
              {` (${moment(`${props.date} ${props.time}`, 'DD/MM/YYYY HH:mm').fromNow()})`}
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 5,
            }}>
            <PinIcon />
            <Text style={[styles.location, { marginLeft: 3 }]}>
              {props.location}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    width: "99%",
    borderRadius: 6,
    shadowColor: "black",
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
  title: {
    width: "100%",
    marginBottom: 20
  },
  card_heading: {
    fontSize: 18,
    color: COLORS.black
  },
  reasonHeading: {
    fontFamily: "Rubik-Bold",
    fontSize: 20,
  },
  reasonText: {
    fontFamily: "Rubik-Regular",
    fontSize: 20,
    marginTop: 4,
  },
  timing: {
    marginTop: 4,
  },
  location: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: "Rubik-Light",
    color: "#677294",
  },
});

export default CustomerCard;
