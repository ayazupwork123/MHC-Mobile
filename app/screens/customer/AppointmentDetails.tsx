// screen U3.2 Appointments Details screen
import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import AppScreen from "../../components/AppScreen";
import AppointmentCardForUser from "../../components/customer/AppointmentCardForUser";
import ExaminationLogs from "../../components/ExaminationLogs";
import Header from "../../components/Header";
import Map from "../../components/Map";
import i18n from "../../utils/i18n";

function AppointmentDetails() {
  return (
    <AppScreen>
      <Header title={i18n.t("doctor.AppointmentDetails")} />
      <ScrollView style={styles.scrollView}>
        <AppointmentCardForUser
          appointmentHour="16"
          status="available"
          location="Bucharest"
          doctorName="Eduard Marin"
          doctorSpecialization="Brain Surgery"
        />
        <View style={{ marginTop: 20}}>
          <Text style={styles.text}>{i18n.t("Location")}</Text>
          <Map latitude={44.436159} longitude={26.102367} />
        </View>
        <ExaminationLogs
          medicalHistory={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
          requiredExaminations={[
            "X-Ray",
            "X-Ray",
            "Blood Test",
            "Blood Test",
          ]}
          diagnosis={[
            "Back pain",
            "Diabetes",
            "Anxiety",
            "Allergic rhinitis",
          ]}
          treatment={[
            "PRINIVIL TABS 20 MG (LISINOPRIL) 1 po qd",
            "Last Refill: #30 x 2 : Carl Savem MD",
          ]}
          raportImage={[
            "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
            "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg",
          ]}
        />
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 22,
  }
});

export default AppointmentDetails;