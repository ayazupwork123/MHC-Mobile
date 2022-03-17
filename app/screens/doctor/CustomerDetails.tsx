// screen M2.2 Customer Details screen
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AppScreen from "../../components/AppScreen";
import CustomerCard from "../../components/doctor/CustomerCard";
import ExaminationLogs from "../../components/ExaminationLogs";
import Header from "../../components/Header";
import i18n from "../../utils/i18n";

function CustomersDetails() {
  return (
    <AppScreen>
      <Header title={i18n.t("doctor.CustomersDetails.title")} />
      <ScrollView style={styles.scrollView}>
        <CustomerCard
          gender="male"
          image="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
          location="Bucharest"
          name="Eduard Marin"
          reason="holiday"
          buttonText={i18n.t("Examination")}
        />
        <ExaminationLogs
          medicalHistory={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
          requiredExaminations={["X-Ray", "X-Ray", "Blood Test", "Blood Test"]}
          diagnosis={["Back pain", "Diabetes", "Anxiety", "Allergic rhinitis"]}
          treatment={[
            "PRINIVIL TABS 20 MG (LISINOPRIL) 1 po qd",
            "Last Refill: #30 x 2 : Carl Savem MD",
          ]}
          raportImage={[
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
          ]}
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
});

export default CustomersDetails;
