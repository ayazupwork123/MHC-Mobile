import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import TimeButtonRound from "./TimeButtonRound";
import i18n from "../../utils/i18n";
import { COLORS, FONT1MEDIUM } from "../../config";

const TimeSelector = ({ hours }: { hours: string[] }) => {
  // dummy data for now
  const availableTime: string[] = [
    "09:00 AM",
    "11:15 AM",
    "12:00 AM",
    "02:00 PM",
    "02:30 PM",
    "03:15 PM",
    "04:00 PM",
    "05:45 PM",
  ];

  const reminderHours: number[] = [1, 2, 3, 6, 12, 24, 48];

  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedReminder, setSelectedReminder] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  /* text should be formatted in a way the backend likes it */
  const handleTimePress = (index: number, text: string) => {
    if (selectedTime === index) setSelectedTime(null);
    else setSelectedTime(index);
    //debugging:
    console.log("index:", selectedTime, "   ", "text:", text);
  };
  const handleReminderPress = (index: number, text: string) => {
    if (selectedReminder === index) setSelectedReminder(null);
    else setSelectedReminder(index);
    // debugging:
    console.log("index:", index, selectedReminder, "   ", "text:", text);
  };

  // Will be added in later version
  const renderModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        console.log("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

  // Will be added in later version
  const renderOtherReminder = () =>
    selectedReminder === reminderHours.length ? (
      <TimeButtonRound
        key={reminderHours.length}
        text={`+ ${i18n.t("Other")}`}
        buttonColor="#24C9E2"
        textStyle={{ color: "white", fontFamily: FONT1MEDIUM }}
        onPress={() => {
          handleReminderPress(reminderHours.length, "other");
          setModalVisible(true);
        }}
      />
    ) : (
      <TimeButtonRound
        key={reminderHours.length}
        text={`+ ${i18n.t("Other")}`}
        onPress={() => {
          handleReminderPress(reminderHours.length, "other");
          setModalVisible(true);
        }}
      />
    );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{i18n.t("AvailableTime")}</Text>
        <ScrollView
          style={styles.scrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {availableTime.map((item: string, index: number) => {
            if (index === selectedTime)
              return (
                <TimeButtonRound
                  key={index}
                  text={item}
                  buttonColor="#24C9E2"
                  textStyle={{ color: "white", fontFamily: FONT1MEDIUM }}
                  onPress={() => handleTimePress(index, item)}
                />
              );
            else
              return (
                <TimeButtonRound
                  key={index}
                  text={item}
                  onPress={() => handleTimePress(index, item)}
                />
              );
          })}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.heading}>{i18n.t("RemindMeBefore")}</Text>
        <ScrollView
          style={styles.scrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {reminderHours.map((item: number, index: number) => {
            if (index === selectedReminder)
              return (
                <TimeButtonRound
                  key={index}
                  text={`${item} ${i18n.t("Hours")}`}
                  buttonColor="#24C9E2"
                  textStyle={{ color: "white", fontFamily: FONT1MEDIUM }}
                  onPress={() => handleReminderPress(index, item.toString())}
                />
              );
            else
              return (
                <TimeButtonRound
                  key={index}
                  text={`${item} ${i18n.t("Hours")}`}
                  onPress={() => handleReminderPress(index, item.toString())}
                />
              );
          })}
          {/* renderOtherReminder() */}
        </ScrollView>
        {/* renderModal() */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 398,
    padding: 25,
    paddingTop: 40,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  scrollView: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontFamily: FONT1MEDIUM,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TimeSelector;
