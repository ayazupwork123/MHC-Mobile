import React from "react";
import {
  View,
  GestureResponderEvent,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SwipeRow } from "react-native-swipe-list-view";

import i18n from "../utils/i18n";
import { COLORS } from "../config";

/* The type will indicate to which screen the notification should link to when pressed */
export enum NotificationType {
  Profile,
  AppointmentRequest,
}
interface cardProps {
  text: string;
  icon: any;
  type: NotificationType;
  onDeletePress: (event: GestureResponderEvent) => void;
}

const NotificationCard = ({ text, icon, type, onDeletePress }: cardProps) => {
  const handleNotificationPress = () => {
    //debugging:
    console.log("Notification press handled.");
  };

  return (
    <SwipeRow rightOpenValue={-95}>
      <TouchableOpacity onPress={() => onDeletePress} style={styles.clear}>
        <View style={styles.clearView}>
          <Text style={styles.clearText}>X</Text>
          <Text style={styles.clearText}>{i18n.t("Clear")}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleNotificationPress()}
        style={styles.card}>
        <AntDesign name={icon} size={24} color={COLORS.black} />
        <Text style={styles.cardText}>{text}</Text>
      </TouchableOpacity>
    </SwipeRow>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    width: 360,
    height: 76,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  cardText: {
    fontSize: 17,
    fontWeight: "400",
    letterSpacing: -0.24,
    paddingLeft: 10,
  },
  clear: {
    width: 80,
    height: 76,
    borderRadius: 8,
    marginLeft: "75%",
    //backgroundColor: "#f2f2f2",
    backgroundColor: "#FFDDDD",
  },
  clearView: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    paddingTop: "20%",
  },
  clearText: {
    //color: "#999999",
    color: "#FE5656",
    fontSize: 15,
  },
});

export default NotificationCard;
