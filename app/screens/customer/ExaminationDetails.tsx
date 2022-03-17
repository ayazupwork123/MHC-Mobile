// screen U4.2 Examinations Details screen
import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import AppScreen from "../../components/AppScreen";
import AppointmentCardForUser from "../../components/customer/AppointmentCardForUser";
import ExaminationLogs from "../../components/ExaminationLogs";
import GradientButton from "../../components/GradientButton";
import Header from "../../components/Header";
import Map from "../../components/Map";
import i18n from "../../utils/i18n";

function ExaminationDetails() {
  return (
    <AppScreen>
      <Header title={i18n.t("doctor.ExaminationDetails")} />
      <ScrollView style={styles.scrollView}>
        <AppointmentCardForUser
          gender="male"
          location="Bucharest"
          doctorName="Eduard Marin"
          appointmentDay="Friday"
          status="holiday"
          buttonText="Examination"
        />
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>{i18n.t("Location")}</Text>
          <Map latitude={44.436159} longitude={26.102367} name="home"/>
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
          isIssuer
          personalNotes="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <GradientButton
          text="Update Examination"
          borderRadius={10}
          height={54}
          fontSize={18}
          width={"100%"}
        />
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontFamily: "Rubik-Medium",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 22,
  }
});

export default ExaminationDetails;