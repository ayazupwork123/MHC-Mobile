// screen U3.1 Appointments List screen
// (also screen U4.1 same screen different Tab)
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../../components/AppScreen";
import AppointmentCardForUser from "../../components/customer/AppointmentCardForUser";
import ExaminationCardForUser from "../../components/customer/ExaminationCardForUser";
import Header from "../../components/Header";
import { COLORS, FONT1MEDIUM } from "../../config";
import i18n from "../../utils/i18n";
import moment from 'moment';
interface ExaminationProps {
  id: number;
  appointementFor: string;
  appointementWith: string;
  doctorDesignation: string;
  diagnosis: string;
  medicines: string;
}
interface AppointmentProps {
  id: number;
  appointementWith: string;
  doctorDesignation: string;
  location?: string;
  time: string;
  day?: string;
  date: string;
}

const customerAppointementList = [
  {
    id: 1,
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    location: i18n.t("Upasana Dental Clinic, salt lake"),
    time: i18n.t("10:00"),
    day: i18n.t("AM yesterday"),
    date: "2021-12-01",
  },
  {
    id: 2,
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    location: i18n.t("Upasana Dental Clinic, salt lake"),
    time: i18n.t("10:00"),
    day: i18n.t("AM yesterday"),
    date: "2021-12-02",
  },
  {
    id: 3,
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    location: i18n.t("Upasana Dental Clinic, salt lake"),
    time: i18n.t("10:00"),
    day: i18n.t("AM yesterday"),
    date: "2021-12-03",
  },
  {
    id: 4,
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    location: i18n.t("Upasana Dental Clinic, salt lake"),
    time: i18n.t("10:00"),
    day: i18n.t("AM yesterday"),
    date: "2021-12-04",
  },
  {
    id: 5,
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    location: i18n.t("Upasana Dental Clinic, salt lake"),
    time: i18n.t("10:00"),
    day: i18n.t("AM yesterday"),
    date: "2021-12-05",
  },
  {
    id: 6,
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    location: i18n.t("Upasana Dental Clinic, salt lake"),
    time: i18n.t("10:00"),
    day: i18n.t("AM yesterday"),
    date: "2021-12-06",
  },
  {
    id: 7,
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    location: i18n.t("Upasana Dental Clinic, salt lake"),
    time: i18n.t("10:00"),
    day: i18n.t("AM yesterday"),
    date: "2021-12-03",
  },
];

const examinationList = [
  {
    id:1,
    appointementFor: i18n.t("My Self"),
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    diagnosis: i18n.t("Diabetes"),
    medicines: `${i18n.t("Last Refill")}\n${i18n.t("PRINIVIL TABS")}`,
  },
  {
    id:2,
    appointementFor: i18n.t("My Mom"),
    appointementWith: i18n.t("Dr Shruti Kedia"),
    doctorDesignation: i18n.t("Tooths Dentist"),
    diagnosis: i18n.t("Diabetes"),
    medicines: `${i18n.t("Last Refill")}\n${i18n.t("PRINIVIL TABS")}`,
  },
];

function AppointmentList() {
  const [futureAppointment, setFutureAppointment] = useState<AppointmentProps[] | null>(null);
  const [todaysAppointment, setTodaysAppointment] = useState<AppointmentProps[] | null>(null);
  const [yesterdaysAppointment, setYesterdaysAppointment] = useState<AppointmentProps[] | null>(null);
  const [olderAppointment, setOlderAppointment] = useState<AppointmentProps[] | null>(null);
  const [customerExaminations, setCustomerExaminations] = useState<ExaminationProps[] | null>(null);
  const [isAppointmentList, setIsAppointmentList] = useState<boolean>(true);

  useEffect(() => {
    const todaysDate = moment().format('YYYY-MM-DD');
    const yerterdayDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const tempfuture:AppointmentProps[]  = [];
    const temptoday:AppointmentProps[] = [];
    const tempyesterday:AppointmentProps[] = [];
    const tempolder:AppointmentProps[] = [];
    if (customerAppointementList && customerAppointementList.length !== 0) {
      customerAppointementList.forEach(appointment => {
        if(moment(appointment.date).isSame(yerterdayDate)) {
          tempyesterday.push(appointment);
        }
        else if(moment(appointment.date).isBefore(todaysDate)) {
          tempolder.push(appointment);
        } else if(moment(appointment.date).isSame(todaysDate)) {
          temptoday.push(appointment);            
        } else if (moment(appointment.date).isAfter(todaysDate)){
          tempfuture.push(appointment);            
        }
      });
    }
    setFutureAppointment(tempfuture);
    setTodaysAppointment(temptoday);
    setYesterdaysAppointment(tempyesterday);
    setOlderAppointment(tempolder);
  }, [customerAppointementList]);
  
  useEffect(() => {
    setCustomerExaminations(examinationList);
  }, [examinationList]);

  const renderAppointmentCardForUser = (item: AppointmentProps) => {
    return <AppointmentCardForUser {...item} key={item.id} />;
  };

  const renderExaminationCardForUser = (item: ExaminationProps) => {
    return <ExaminationCardForUser {...item} key={item.id}  />;
  };

  return (
    <AppScreen
      isTransparent={true}
      backgroundColor={COLORS.themeGradientColor}
    >
      <View
        style={[styles.height_100, styles.alignItemsCenter]}
      >
        <Header
            title={
              isAppointmentList
                ? i18n.t("customer.AppointmentsList.title")
                : i18n.t("doctor.ExaminationList.title")
            }
          />
        <View
          style={{
            width: "90%",
            padding: 2,
            marginBottom: 20,
            backgroundColor: "#fff",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={{ width: "48%" }}>
            <LinearGradient
              colors={
                !isAppointmentList
                  ? ["transparent", "transparent"]
                  : [COLORS.primaryBlue, COLORS.themeGradientColor]
              }
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[
                {
                  width: "100%",
                  borderRadius: 5,
                  alignSelf: "center",
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => setIsAppointmentList(true)}
                style={[styles.button]}
              >
                <Text
                  style={{
                    color: !isAppointmentList ? COLORS.blue : COLORS.white,
                  }}
                >
                  {i18n.t("customer.AppointmentsList.title")}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "48%" }}>
            <LinearGradient
              colors={
                isAppointmentList
                  ? ["transparent", "transparent"]
                  : [COLORS.primaryBlue, COLORS.themeGradientColor]
              }
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[
                {
                  width: "100%",
                  borderRadius: 5,
                  alignSelf: "center",
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => setIsAppointmentList(false)}
                style={[styles.button]}
              >
                <Text
                  style={{
                    color: isAppointmentList ? COLORS.blue : COLORS.white,
                  }}
                >
                  {i18n.t("customer.ExaminationList.title")}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={styles.alignItemsCenter}
          showsVerticalScrollIndicator={false}
        >
          {isAppointmentList ? (
            <>
              <Text style={styles.header}>
                {i18n.t("Upcoming Appointments")}
              </Text>
              {futureAppointment && futureAppointment.length !== 0 && (
                <View style={styles.customers}>
                  {futureAppointment && futureAppointment.map((item: AppointmentProps) => renderAppointmentCardForUser(item))}
                </View>
              )}
              <Text style={styles.header}>
                {i18n.t("Today's Appointments")}
              </Text>
              {todaysAppointment && todaysAppointment.length !== 0 && (
                <View style={styles.customers}>
                  {todaysAppointment && todaysAppointment.map((item: AppointmentProps) => renderAppointmentCardForUser(item))}
                </View>
              )}
              <Text style={styles.header}>
                {i18n.t("Yesterday’s Appointments")}
              </Text>
              {yesterdaysAppointment && yesterdaysAppointment.length !== 0 && (
                <View style={styles.customers}>
                  {yesterdaysAppointment && yesterdaysAppointment.map((item: AppointmentProps) => renderAppointmentCardForUser(item))}
                </View>
              )}
              <Text style={styles.header}>
                {i18n.t("Older Appointments")}
              </Text>
              {olderAppointment && olderAppointment.length !== 0 && (
                <View style={styles.customers}>
                  {olderAppointment && olderAppointment.map((item: AppointmentProps) => renderAppointmentCardForUser(item))}
                </View>
              )}
            </>
          ) : (
            <>
              <Text style={styles.header}>
                {i18n.t("Examination")}
              </Text>
              {customerExaminations && customerExaminations.length !== 0 && (
                <View style={styles.customers}>
                  {customerExaminations && customerExaminations.map((item: any) => renderExaminationCardForUser(item))}
                </View>
              )}
            </>
          )}
          
        </ScrollView>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  height_100: {
    height: "100%",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  customers: {
    marginBottom: 10,
    marginTop: 20,
    width: "90%",
  },
  button: {
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  header: {
    width: "90%",
    fontSize: 16,
    marginBottom: -10,
    fontFamily: FONT1MEDIUM,
    marginTop: 10,
  },
});

export default AppointmentList;