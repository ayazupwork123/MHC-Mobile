// screen U8.5 Appointment Booking successful screen
// screen U8.5 Appointment Booking successful screen
import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, StatusBar, Image } from "react-native";
import moment, { Moment } from "moment-timezone";
import Group from "../../assets/Group.png";
import GradientButton from "../../components/GradientButton";
import { COLORS } from "../../config";
import i18n from "../../utils/i18n";

interface SuccessProps {
  navigation: any;
  doctor: string;
  date: Moment;
}

const AppointmentBookingSuccess = ({
  navigation,
  doctor = "Dr. Pediatrician Purpeison",
  date = moment(),
}: SuccessProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <StatusBar translucent backgroundColor="#212121" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Image source={Group} style={{ width: 156, height: 156 }} />
            </View>
            <Text style={styles.modalText}>{i18n.t("ThankYou")}</Text>
            <Text style={styles.subText}>
              {i18n.t("AppointmentRequestSent")}
            </Text>
            <Text style={styles.lastText}>
              {i18n.t("AppointmentThankYouMessage", {
                doctor: doctor,
                date: date.format("MMM,D"),
                time: date.format("LT"),
              })}
            </Text>
            <View style={styles.btnView}>
              <GradientButton
                text={i18n.t("Done")}
                onPress={() => navigation.navigate("AppointmentBookingProcess")}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212121",
  },
  modalView: {
    height: 520,
    width: 335,
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.blue,
    marginBottom: 25,
  },
  lastText: {
    width: 267,
    textAlign: "center",
    color: COLORS.blue,
    fontSize: 15,
    lineHeight: 21,
  },
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    marginBottom: 30,
    width: "100%",
  },
});

export default AppointmentBookingSuccess;
