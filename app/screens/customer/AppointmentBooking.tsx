// Screen U8.1 to U8.4 Appointment Booking process
// Will be one screen with 4 Tabs - one per step
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AppointmentStepIndicator from "../../components/stepIndicators/fourSteps/AppointmentStepIndicator";
import CheckBox from "@react-native-community/checkbox";
import { Calendar } from "react-native-calendars";
import TimeSelector from "../../components/customer/TimeSelector";
import AppScreen from "../../components/AppScreen";
import GradientButton from "../../components/GradientButton";
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  COLORS,
} from "./../../config/index";
import i18n from "../../utils/i18n";

interface Props {
  navigation: any;
  appointmentCard: string[];
  appointmentDate: string;
  time: string;
  reminder: string;
  reason: string;
  medication: string;
  pregnancy: boolean;
}

const AppointmentBooking = ({
  navigation,
  appointmentCard,
  appointmentDate,
  time,
  reminder,
  reason,
  medication,
  pregnancy,
}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [activeStep, setActiveStep] = useState<number>(1);
  const onChange = (event: any, selectedDate: any) => {
    let currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const Step1 = () => (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backIcon}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{i18n.t("BookAppointment")}</Text>
          </View>
          <View style={styles.stepIndicator}>
            <AppointmentStepIndicator active={1} />
          </View>
        </View>
        <View style={styles.btnView}>
          <GradientButton
            text={i18n.t("Next")}
            onPress={() => setActiveStep(2)}
          />
        </View>
      </View>
    </AppScreen>
  );

  const Step2 = () => (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => setActiveStep(1)}
              style={styles.backIcon}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{i18n.t("Appointment")}</Text>
          </View>
          <ScrollView>
            <View style={styles.stepIndicator}>
              <AppointmentStepIndicator active={2} />
            </View>
            <Calendar
              style={styles.calendar}
              theme={theme}
              hideArrows={false}
              renderArrow={(direction: "left" | "right") =>
                direction === "left" ? (
                  <AntDesign name="left" size={17} color={COLORS.white} />
                ) : (
                  <AntDesign name="right" size={17} color={COLORS.white} />
                )
              }
              enableSwipeMonths={true}
            />
            <TimeSelector hours={["1200 PM", "1300PM"]} />
          </ScrollView>
        </View>
        <View style={styles.btnView}>
          <GradientButton
            text={i18n.t("Next")}
            onPress={() => setActiveStep(3)}
          />
        </View>
      </View>
    </AppScreen>
  );

  const Step3 = () => (
    <AppScreen>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => setActiveStep(2)}
                style={styles.backIcon}>
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerText}>{i18n.t("BookAppointment")}</Text>
            </View>
            <View style={styles.stepIndicator}>
              <AppointmentStepIndicator active={3} />
            </View>
            <View style={styles.question}>
              <Text style={styles.questionText}>
                {i18n.t("AppointmentReason")}
              </Text>
            </View>
            <View>
              <TextInput
                value={reason}
                multiline={true}
                blurOnSubmit
                numberOfLines={12}
                placeholder={i18n.t("AppointmentReason")}
                style={[styles.inputStyles, { marginTop: -40 }]}
              />
            </View>
          </View>
          <View style={styles.btnView}>
            <GradientButton
              text={i18n.t("Next")}
              onPress={() => setActiveStep(4)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </AppScreen>
  );

  const Step4 = () => (
    <AppScreen>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => setActiveStep(3)}
                style={styles.backIcon}>
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerText}>{i18n.t("BookAppointment")}</Text>
            </View>
            <View style={styles.stepIndicator}>
              <AppointmentStepIndicator active={4} />
            </View>
            <View
              style={[
                styles.question,
                { flexDirection: "row", paddingLeft: 8 },
              ]}>
              <CheckBox
                value={toggleCheckBox}
                onValueChange={(pregnancy: boolean) =>
                  setToggleCheckBox(pregnancy)
                }
              />
              <Text style={styles.checkboxText}>{i18n.t("Pregnancy")}</Text>
            </View>
            <TextInput
              value={medication}
              multiline={true}
              blurOnSubmit
              numberOfLines={12}
              placeholder={i18n.t("CurrentMedication")}
              style={styles.inputStyles}
            />
          </View>
          <View style={[styles.btnView, { paddingBottom: 96 }]}>
            <GradientButton
              text={i18n.t("Next")}
              onPress={() => navigation.navigate("AppointmentBookingSuccess")}
            />
            <View>
              <TouchableOpacity>
                <Text onPress={() => setActiveStep(1)} style={styles.skip}>
                  {i18n.t("Skip")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </AppScreen>
  );

  return activeStep === 1 ? (
    <Step1 />
  ) : activeStep === 2 ? (
    <Step2 />
  ) : activeStep === 3 ? (
    <Step3 />
  ) : (
    <Step4 />
  );
};

const theme = {
  "stylesheet.calendar.header": {
    header: {
      width: "102%",
      backgroundColor: COLORS.primaryBlue,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 5,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      marginLeft: -5,
    },
    monthText: {
      color: COLORS.white,
      fontWeight: "700",
      fontSize: 19,
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 30,
      textAlign: "center",
      fontSize: 14,
      color: COLORS.black,
      fontWeight: "bold",
    },
  },
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT,
  },
  containerCalendar: {
    width: "100%",
    height: "100%",
    paddingTop: "10%",
    paddingLeft: 20,
  },
  headerView: {
    flex: 0.85,
    width: SCREEN_WIDTH,
    height: 34,
    paddingHorizontal: SCREEN_WIDTH * 0.053,
    paddingTop: 36,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    bottom: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingLeft: 3,
    paddingTop: 2,
    marginRight: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    top: 2,
  },
  stepIndicator: {
    left: -10,
    top: 20,
  },
  question: {
    top: 50,
    marginBottom: 40,
  },
  questionText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  checkboxText: {
    top: 3,
    fontSize: 17,
    fontWeight: "500",
    color: COLORS.blue,
  },
  inputStyles: {
    top: 70,
    paddingHorizontal: 20,
    paddingTop: 10,
    textAlignVertical: "top",
    borderRadius: 12,
    borderColor: "#67729429",
    borderWidth: 1,
    fontSize: 15,
    backgroundColor: COLORS.white,
  },
  btnView: {
    flex: 0.15,
    width: SCREEN_WIDTH,
    color: "#ffffff",
    paddingBottom: 50,
  },
  btnStyles: {
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    borderWidth: 1,
    backgroundColor: COLORS.primaryBlue,
    borderColor: COLORS.primaryBlue,
    borderRadius: 12,
    marginBottom: 15,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  skip: {
    fontSize: 15,
    fontWeight: "700",
    color: "#999999",
    marginTop: 18,
    textAlign: "center",
  },
  datePicker: {
    marginTop: 30,
    height: 330,
  },
  timeSelector: {
    zIndex: -1,
    top: "8%",
    left: -20,
  },
  calendar: {
    height: 320,
    marginTop: 40,
    borderRadius: 8,
  },
});

export default AppointmentBooking;
