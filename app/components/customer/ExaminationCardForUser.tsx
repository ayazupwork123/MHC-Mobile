import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS, FONT1LIGHT, FONT1MEDIUM, FONT1REGULAR } from "../../config";
import i18n from "../../utils/i18n";

interface Props {
  id: number;
  appointementFor: string;
  appointementWith: string;
  doctorDesignation: string;
  diagnosis: string;
  medicines: string;
}


const ExaminationCardForUser: FunctionComponent<Props> = (props) => {
  const {
    appointementFor,
    appointementWith,
    doctorDesignation,
    diagnosis,
    medicines,
  } = props;

  return (
    <View style={styles.listContainer}>
      <View style={styles.padding_18}>
        <Text style={styles.card_heading}>
          {i18n.t("Appointment For") + " "}
          <Text style={{ color: COLORS.themeGradientColor }}>
            {appointementFor}
          </Text>
        </Text>
        <View style={styles.row}>
          <Image
            source={require("./../../assets/drlist.png")}
            style={styles.customer_icon}
          />
          <View>
            <Text style={styles.appointmentWith}>
              {i18n.t("Appointment with")}
            </Text>
            <Text style={styles.appointmentWithName}>{appointementWith}</Text>
            <Text style={[styles.drName, { color: COLORS.themeGradientColor }]}>
              {doctorDesignation}
            </Text>
          </View>
        </View>
        <View style={styles.marginTop12}>
          <Text style={styles.drName}>
            <Text style={styles.title}>{i18n.t("Diagnosis") + ": "}</Text>
            <Text style={styles.lightText}>{diagnosis}</Text>
          </Text>
        </View>
        <View style={[styles.drName, styles.row]}>
          <Text style={styles.title}>{i18n.t("Medicines") + ": "}</Text>
          <Text style={styles.lightText}>{medicines}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 10,
    backgroundColor: "#fff",
    width: "98%",
    borderRadius: 6,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginHorizontal: 2,
  },
  appointmentWith: {
    fontFamily: FONT1MEDIUM,
    fontSize: 16,
  },
  appointmentWithName: {
    fontSize: 16,
    fontFamily: FONT1REGULAR,
    marginTop: 4,
  },
  card_heading: {
    fontSize: 18,
    color: COLORS.blackText,
    marginBottom: 20,
    fontFamily: FONT1MEDIUM,
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
  drName: {
    marginTop: 4,
  },
  padding_18: {
    padding: 18,
  },
  marginTop12: {
    marginTop: 12,
  },
  title: {
    color: COLORS.themeGradientColor,
    fontFamily: FONT1MEDIUM,
    fontSize: 13,
  },
  lightText: {
    color: COLORS.blue,
    fontFamily: FONT1LIGHT,
    fontSize: 12,
  },
});

export default ExaminationCardForUser;