import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View, Text, Image, Modal, Pressable } from "react-native";
import moment from "moment-timezone";
import Button from "./../../components/GradientButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SCREEN_WIDTH } from "../../config";
import i18n from "../../utils/i18n";

interface Props {
  name: string;
  reason: string;
  date: string;
  time: string;
  imageUri: string;
  requestId: number;
  resschedule?: boolean;
}

const AppointmentRequestCard: FunctionComponent<Props> = (props) => {
  //if (!props.navigation) props.navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  function acceptHandler(requestId: number): void {
    //Send reuest for props.requestId
  }

  function declineHandler(requestId: number): void {
    //Send request for props.requestId
  }

  const reshedule = () => {
    navigation.navigate("RescheduleAppointmentRequest" as never, { requestId: props.requestId} as never)
    setModalVisible(false)
  }

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.padding_18}>
          <Text style={[{ fontFamily: "Rubik-Bold" }, styles.card_heading]}>
            {i18n.t("components.AppointmentRequestCard.patientName") + " "}
            <Text style={{ color: COLORS.themeGradientColor }}>
              {props.name}
            </Text>
          </Text>
          <View style={styles.row}>
            <Image
              source={{ uri: props.imageUri }}
              style={styles.customer_icon}
            />
            <View>
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
            </View>
          </View>
        </View>
        
        <View style={styles.padding_18}>
          {!props.resschedule ? (
            <>
              <View style={styles.separator} />
              <View style={styles.buttonRow}>
                <Button
                  fontSize={13}
                  height={50}
                  text={i18n.t("common.Accept")}
                  borderRadius={9}
                  marginTopHide
                  width={SCREEN_WIDTH / 3 - SCREEN_WIDTH * 0.05 - 11}
                  onPress={() => acceptHandler(props.requestId)}
                  icon={
                    <Image
                      style={{ width: 16.7, height: 13, marginBottom: 4 }}
                      source={require("./../../assets/tick-icon.png")}
                    />
                  }
                />
                <Button
                  textColor="#FE5656" //{COLORS.redButtonText}
                  fontSize={13}
                  height={50}
                  text={i18n.t("common.Decline")}
                  transparent
                  borderRadius={9}
                  backgroundColor="#FEF2F4" //{COLORS.lightRed}
                  marginTopHide
                  width={SCREEN_WIDTH / 3 - SCREEN_WIDTH * 0.05 - 11}
                  onPress={() => setModalVisible(true)}
                  icon={
                    <Image
                      style={{ width: 14, height: 14, marginBottom: 4 }}
                      source={require("./../../assets/cancel-icon.png")}
                    />
                  }
                />
                <Button
                  fontSize={13}
                  textColor={COLORS.blue}
                  height={50}
                  text={i18n.t("common.Schedule")}
                  transparent
                  borderRadius={9}
                  backgroundColor="#FBEAB8" //{COLORS.lightOrange}
                  marginTopHide
                  width={SCREEN_WIDTH / 3 - SCREEN_WIDTH * 0.05 - 11}
                  onPress={() => navigation.navigate("RescheduleAppointmentRequest" as never, { requestId: props.requestId} as never)}
                  icon={
                    <Image
                      style={{ width: 15.88, height: 15, marginBottom: 4 }}
                      source={require("./../../assets/calender-icon.png")}
                    />
                  }
                />
              </View>
            </>
          ) : (
            <View style={[styles.buttonRow, styles.reschedule]}>
              <Button
                fontSize={13}
                height={50}
                text={i18n.t("common.reSchedule")}
                borderRadius={9}
                marginTopHide
                width={SCREEN_WIDTH * 0.40}
                onPress={() => navigation.navigate("RescheduleAppointmentRequest" as never, { requestId: props.requestId} as never)}
              />
            </View>
          )}
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <Text style={styles.modalText}>
              {i18n.t("components.AppointmentCardForUser.DeclineAppointmentMessage")}
              <Text style={{ color: COLORS.themeGradientColor }}>
                {props.name}
              </Text>
              <Text>{" " + i18n.t("common.QuestionMark")}</Text>
            </Text>
            <View style={styles.modalButtons}>
              <Button
                fontSize={13}
                height={50}
                text={i18n.t("common.Accept")}
                borderRadius={9}
                marginTopHide
                width={(SCREEN_WIDTH * 0.85) / 3 - SCREEN_WIDTH * 0.05 - 11}
                onPress={() => acceptHandler(props.requestId)}
                icon={
                  <Image
                    style={{ width: 16.7, height: 13, marginBottom: 4 }}
                    source={require("./../../assets/tick-icon.png")}
                  />
                }
              />
              <Button
                textColor="#FE5656" //{COLORS.redButtonText}
                fontSize={13}
                height={50}
                text={i18n.t("common.Decline")}
                transparent
                borderRadius={9}
                backgroundColor="#FEF2F4" //{COLORS.lightRed}
                marginTopHide
                width={(SCREEN_WIDTH * 0.85) / 3 - SCREEN_WIDTH * 0.05 - 11}
                onPress={() => declineHandler(props.requestId)}
                icon={
                  <Image
                    style={{ width: 14, height: 14, marginBottom: 4 }}
                    source={require("./../../assets/cancel-icon.png")}
                  />
                }
              />
              <Button
                fontSize={13}
                textColor={COLORS.blue}
                height={50}
                text={i18n.t("common.Schedule")}
                transparent
                borderRadius={9}
                backgroundColor="#FBEAB8" //{COLORS.lightOrange}
                marginTopHide
                width={(SCREEN_WIDTH * 0.85) / 3 - SCREEN_WIDTH * 0.05 - 11}
                onPress={reshedule}
                icon={
                  <Image
                    style={{ width: 15.88, height: 15, marginBottom: 4 }}
                    source={require("./../../assets/calender-icon.png")}
                  />
                }
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

AppointmentRequestCard.defaultProps = {
  resschedule: false
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
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
    marginBottom: 2,
    marginHorizontal: 2,
  },
  button: {
    borderRadius: 25,
    marginRight: -20,
    padding: 5,
    width: 25,
    height: 25,
    elevation: 2,
    alignSelf: 'flex-end',
  },
  buttonClose: {
    backgroundColor: "lightgrey",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  reasonHeading: {
    fontFamily: "Rubik-Bold",
    fontSize: 16,
  },
  reasonText: {
    fontFamily: "Rubik-Regular",
    marginTop: 4,
  },
  card_heading: {
    fontSize: 18,
    color: COLORS.black, 
    marginBottom: 20,
  },
  customer_icon: {
    width: 71,
    height: 68.1,
    borderRadius: 4,
    marginRight: 14,
  },
  row: {
    flexDirection: "row",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reschedule: {
    alignSelf: "flex-end"
  },
  timing: {
    marginTop: 4,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#E1E1E2",
  },
  padding_18: {
    padding: 18,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
    width: SCREEN_WIDTH,
  },
  modalView: {
    margin: 20,
    paddingTop: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "100%",
    elevation: 5,
  },
  modalText: {
    alignSelf: "center",
    fontSize: 18,
    color: COLORS.black, 
    marginBottom: 35,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AppointmentRequestCard;
