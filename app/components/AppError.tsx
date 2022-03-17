import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { COLORS, FONT1REGULAR } from "../config";

interface ModalProps {
  modalVisible: boolean;
  closeModalVisible: any;
  headerTitle: String;
  content: any;
  buttonTitle: String;
  handleClick: any;
}

export default function AppError({
  modalVisible,
  closeModalVisible,
  headerTitle,
  content,
  buttonTitle,
  handleClick,
}: ModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onDismiss={closeModalVisible}
      onRequestClose={() => {
        closeModalVisible();
      }}>
      <View style={styles.container}>
        <View style={styles.modalView}>{content}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    backgroundColor: COLORS.white,
    width: "90%",
    height: 300,
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonClose: { backgroundColor: "#2196F3" },
  textStyle: { color: COLORS.white, fontWeight: "bold", textAlign: "center" },
  headerTitle: {
    textAlign: "center",
    fontSize: 18,
    color: COLORS.white,
    fontFamily: FONT1REGULAR,
  },
  content: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.white,
    fontFamily: FONT1REGULAR,
    opacity: 0.7,
    lineHeight: 21,
  },
});
