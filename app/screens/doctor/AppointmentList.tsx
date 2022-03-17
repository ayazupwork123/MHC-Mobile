// screen M5 Appointment List
import React from "react";
import { View } from "react-native";
import AppScreen from "../../components/AppScreen";
import DualSelector from "../../components/DualSelector";
import Header from "../../components/Header";
import i18n from "../../utils/i18n";

const AppointmentsList = ({ navigation }: any) => {
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <Header title={i18n.t("doctor.AppointmentsList")} />
        <DualSelector
          leftLabel="Appointments List"
          rightLabel="Examination List"
        />
      </View>
    </AppScreen>
  );
};

export default AppointmentsList;