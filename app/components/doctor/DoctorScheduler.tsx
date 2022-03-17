import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { COLORS, SCREEN_WIDTH } from "../../config";
import i18n from "../../utils/i18n";
import Button from "../GradientButton";
import { useNavigation } from "@react-navigation/native";

interface Customer {
  id: number;
  title: string;
  reason: string;
  gender: string;
  image: string;
}

interface DoctorSchedules {
  time: string;
  customers: Customer[];
}

interface Props {
  doctorSchedules: DoctorSchedules[];
}

const DoctorScheduler: FunctionComponent<Props> = (props) => {
  const { doctorSchedules } = props;
  const navigation = useNavigation();

  function handlePress(id: number) {
    //NAVIGATE TO EXAMINATION PROCESS FOR SPECIFIC CUSTOMER
    //navigation.navigate()
  }
  const renderDoctorSchedules = ({
    item,
    index,
  }: {
    item: DoctorSchedules;
    index: number;
  }) => {
    const { time, customers } = item;
    return (
      <View style={styles.continer}>
        <View style={[styles.center, styles.leftBox]}>
          <View style={styles.columnHeadingView}>
            {index === 0 && (
              <Text style={styles.columnHeading}>{i18n.t("Time")}</Text>
            )}
            <Text style={[styles.time, styles.time1]}>{time}</Text>
            <Text style={[styles.time, styles.time2]}>
              {doctorSchedules[index + 1]?.time}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.verticalSeparator,
            index === 0 && { marginTop: 34 },
            index + 1 === doctorSchedules.length && { marginBottom: 10 },
          ]}
        />
        <View style={styles.rightBox}>
          {index === 0 && (
            <Text style={styles.columnHeading}>{i18n.t("Schedule")}</Text>
          )}
          {customers &&
            customers.length !== 0 &&
            customers.map((customer: Customer, index: number) => (
              <View style={styles.scheduleCard} key={index.toString()}>
                <View style={{ flexDirection: "row", width: "60%" }}>
                  <Image
                    source={{ uri: customer.image }}
                    style={{
                      width: 90,
                      borderRadius: 4,
                      height: 90,
                    }}
                  />
                  <View style={{ marginLeft: 7 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                      <Text style={styles.name}>{customer.title}</Text>
                    </View>
                    <Text style={[styles.reason]}>{customer.reason}</Text>
                    <Text style={[styles.gender, { marginTop: 2 }]}>
                      {customer.gender[0].toUpperCase() +
                        customer.gender.slice(1)}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <View style={{ width: "80%", marginTop: 14 }}>
                    <Button
                      onPress={() => handlePress(customer.id)}
                      text={i18n.t("StartExamination")}
                      marginTopHide
                      borderRadius={4}
                      height={34}
                      fontSize={12}
                    />
                  </View>
                </View>
              </View>
            ))}
        </View>
      </View>
    );
  };
  return (
    <View style={{ width: "90%", marginTop: 25, alignSelf: "center" }}>
      <Text style={styles.mainHeading}>{i18n.t("ScheduleToday")}</Text>
      {doctorSchedules && doctorSchedules.length !== 0 && (
        <FlatList
          data={doctorSchedules}
          style={{ marginTop: 20, width: "100%" }}
          keyExtractor={(item: any, i: any) => i}
          showsVerticalScrollIndicator={false}
          renderItem={renderDoctorSchedules}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 16,
    color: COLORS.darkerGrey,
    fontFamily: "Rubik-Medium",
  },
  columnHeading: {
    fontSize: 18,
    color: COLORS.darkerGrey,
    fontFamily: "Rubik-Medium",
    marginBottom: 12,
  },
  continer: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: "Rubik-Medium",
    color: COLORS.darkerGrey,
    fontSize: 18,
  },
  leftBox: {
    width: SCREEN_WIDTH * 0.2,
    justifyContent: "flex-start",
  },
  rightBox: {
    width: SCREEN_WIDTH * 0.75 - SCREEN_WIDTH * 0.05 - 27,
    marginLeft: 16,
  },
  verticalSeparator: {
    width: 2,
    backgroundColor: "rgba(103, 114, 148, 0.25)",
  },
  scheduleCard: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: SCREEN_WIDTH * 0.75 - SCREEN_WIDTH * 0.05 - 25,
    flexDirection: "column",
  },
  reason: {
    fontSize: 12,
    fontFamily: "Rubik-Light",
    color: "#00CCCB",
  },
  gender: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: "Rubik-Light",
    color: "#677294",
  },
  time: {
    fontFamily: "Rubik-Regular",
    fontSize: 14,
  },
  time1: {
    color: COLORS.themeGradientColor,
  },
  time2: {
    color: COLORS.blue,
    marginTop: 4,
  },
  columnHeadingView: {
    width: "100%",
  },
});

export default DoctorScheduler;
