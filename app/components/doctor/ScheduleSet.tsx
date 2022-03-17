// Component 8
import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONT1MEDIUM, FONT1REGULAR, SCREEN_WIDTH } from "../../config";
import TimePicker from "../../components/TimePicker";
import AppInput from "../forms/FormField";
import i18n from "../../utils/i18n";

type Time = {
  from: string;
  to: string;
};

type Week = {
  day: string;
  timings: Time[];
};

type State = {
  day: string;
  week: Week[];
};

interface Props {
  values: State;
  showTimeDropdowns: Boolean;
  showAvailabilityCalendar: Boolean;
  timingsHandler: (data: Time) => void;
  outerChangeHandler: (name: string, value: any) => void;
  onPress: (name: string, value: any) => void;
}

const Timmings = ({ day, week }: { day: string; week: Week[] }) => {
  var data = week.filter((wDay) => wDay.day === day);

  if (data && data[0].timings && data[0].timings.length > 0) {
    return (
      <>
        {data[0].timings.map((item, index) => (
          <LinearGradient
            key={index}
            colors={[COLORS.primaryBlue, COLORS.themeGradientColor]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.timeItem}>
            <Text style={[styles.timeItemText, { marginBottom: 1 }]}>
              {item.from}
            </Text>
            <Text style={styles.timeItemText}>{item.to}</Text>
          </LinearGradient>
        ))}
      </>
    );
  } else {
    return <></>;
  }
};

const SheduleSet = ({
  values,
  onPress,
  timingsHandler,
  outerChangeHandler,
  showTimeDropdowns,
  showAvailabilityCalendar,
}: Props) => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  return (
    <>
      <AppInput
        editable={false}
        placeholder={i18n.t("Availability")}
        name={"availability"}
        icon={
          <TouchableOpacity
            style={{ margin: -11 }}
            onPress={() =>
              outerChangeHandler(
                "showAvailabilityCalendar",
                !showAvailabilityCalendar
              )
            }>
            {showAvailabilityCalendar ? (
              <Ionicons
                name="chevron-down-sharp"
                size={20}
                color={COLORS.blue}
              />
            ) : (
              <Image
                style={styles.add}
                source={require("./../../assets/add-grey.png")}
              />
            )}
          </TouchableOpacity>
        }
      />
      {showAvailabilityCalendar && (
        <View style={{ marginTop: 12, marginBottom: 10 }}>
          <Text style={styles.week}>{i18n.t("Week")}</Text>
          <View style={styles.weekDays}>
            {values.week.length > 0 &&
              values.week.map((item) => (
                <View key={item.day} style={styles.daysView}>
                  <TouchableOpacity onPress={() => onPress("day", item.day)}>
                    <Text
                      style={[
                        styles.day,
                        values.day === item.day && styles.selectedDay,
                      ]}>
                      {i18n.t(`${item.day}FirstLetter`)}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              flexWrap: "wrap",
              marginTop: 20,
            }}>
            <Timmings day={values.day} week={values.week} />
            <TouchableOpacity
              disabled={showTimeDropdowns ? !to || !from : false}
              style={{ width: "28%" }}
              onPress={() => {
                if (showTimeDropdowns) {
                  if (to && from) {
                    timingsHandler({ from, to });
                    outerChangeHandler("showTimeDropdowns", false);
                    setTo("");
                    setFrom("");
                  }
                } else {
                  outerChangeHandler("showTimeDropdowns", true);
                }
              }}>
              <LinearGradient
                colors={[COLORS.primaryBlue, COLORS.themeGradientColor]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={[styles.timeItem, { width: "100%" }]}>
                <Image
                  style={styles.timeItemIcon}
                  source={require("./../../assets/add.png")}
                />
                <Text style={styles.timeItemText}>
                  {" "}
                  {showTimeDropdowns ? "Add" : "Time"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {showTimeDropdowns && (
            <View style={{ marginBottom: 100 }}>
              <TimePicker
                value={from}
                name="from"
                placeholder="From"
                setValue={setFrom}
              />
              <TimePicker
                value={to}
                name="to"
                placeholder="To"
                setValue={setTo}
              />
            </View>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  add: {
    width: 17,
    height: 17,
  },
  week: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONT1MEDIUM,
    marginVertical: 10,
  },
  weekDays: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  daysView: {
    width: (SCREEN_WIDTH * 0.8) / 8,
  },
  day: {
    textAlign: "center",
    paddingVertical: 9,
    color: COLORS.blue,
    fontSize: 16,
  },
  selectedDay: {
    backgroundColor: "#00CCCB26",
    borderRadius: 5,
  },
  timeItem: {
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginRight: 12,
    marginBottom: 12,
    alignItems: "center",
    width: "28%",
    height: 51,
  },
  timeItemText: {
    fontSize: 16,
    fontFamily: FONT1REGULAR,
    color: COLORS.white,
    textAlign: "center",
    width: "100%",
  },
  timeItemIcon: {
    height: 15,
    width: 15,
    marginBottom: 3,
    marginTop: 2,
  },
});

export default SheduleSet;
