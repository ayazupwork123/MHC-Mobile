import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import i18n from "../utils/i18n";
import { FONT1LIGHT, FONT1MEDIUM, FONT1BOLD, COLORS } from "../config/index";

interface Props {
  medicalHistory?: string;
  requiredExaminations?: string[];
  diagnosis?: string[];
  treatment?: string[];
  raportImage?: string[];
  personalNotes?: string;
  isIssuer?: boolean;
}

const ExaminationLogs = ({
  medicalHistory,
  requiredExaminations,
  diagnosis,
  treatment,
  raportImage,
  personalNotes,
  isIssuer,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("Examination")}</Text>
      {medicalHistory && (
        <>
          <Text style={styles.title}>{i18n.t("MedicalHistory")}</Text>
          <Text style={styles.text}>{medicalHistory}</Text>
        </>
      )}
      {requiredExaminations && (
        <>
          <Text style={styles.title}>{i18n.t("RequiredExaminations")}</Text>
          <View style={styles.containerBox}>
            {requiredExaminations.map((i, key) => {
              return (
                <View key={key} style={styles.listContainer}>
                  <Text style={styles.numberText}>{key + 1}.</Text>
                  <Text numberOfLines={2} style={styles.secondaryText}>
                    {i}
                  </Text>
                </View>
              );
            })}
          </View>
        </>
      )}
      {diagnosis && (
        <>
          <Text style={styles.title}>{i18n.t("Diagnosis")}</Text>
          <View style={styles.containerBox}>
            {diagnosis.map((i, key) => {
              return (
                <View key={key} style={styles.listContainer}>
                  <Text style={styles.numberText}>{key + 1}.</Text>
                  <Text numberOfLines={1} style={styles.secondaryText}>
                    {i}
                  </Text>
                </View>
              );
            })}
          </View>
        </>
      )}
      {treatment && (
        <>
          <Text style={styles.title}>{i18n.t("Treatment")}</Text>
          <View style={styles.treatmentContainer}>
            {treatment.map((i, key) => {
              return (
                <View key={key} style={styles.treatmentItemView}>
                  <Text style={styles.numberText}>{key + 1}.</Text>
                  <Text numberOfLines={1} style={styles.secondaryText}>
                    {i}
                  </Text>
                </View>
              );
            })}
          </View>
        </>
      )}
      {raportImage && (
        <>
          <Text style={styles.title}>{i18n.t("ReportImage")}</Text>
          <View style={styles.containerBox2}>
            {raportImage.map((i, key) => {
              return (
                <View key={key} style={styles.containerImages}>
                  <View style={styles.imageBox}>
                    <Image
                      source={{
                        uri: i,
                      }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </>
      )}
      {isIssuer && personalNotes && (
        <View>
          <Text style={styles.title}>{i18n.t("PersonalNotes")}</Text>
          <Text style={styles.personalNotesText}>
            {personalNotes && personalNotes}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ExaminationLogs;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  title: {
    fontFamily: FONT1MEDIUM,
    letterSpacing: -0.3,
    lineHeight: 22,
    fontSize: 18,
    color: COLORS.darkerGrey,
    marginTop: 20,
  },
  text: {
    fontFamily: FONT1LIGHT,
    letterSpacing: -0.3,
    lineHeight: 15.41,
    fontSize: 13,
    marginTop: 6,
    color: COLORS.blue,
  },
  secondaryText: {
    color: COLORS.blue,
    marginLeft: 5,
    fontFamily: FONT1LIGHT,
    fontSize: 14,
    marginRight: 15,
  },
  personalNotesText: {
    fontFamily: FONT1LIGHT,
    letterSpacing: -0.3,
    lineHeight: 15.41,
    fontSize: 13,
    marginTop: 6,
    color: COLORS.blue,
  },
  containerImages: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  imageBox: {
    borderWidth: 2,
    borderColor: COLORS.blue,
    borderRadius: 10,
    height: 90,
    width: 90,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
  listContainer: {
    width: "50%",
    overflow: "hidden",
    flexDirection: "row",
    paddingVertical: 5,
  },
  containerBox: {
    width: Dimensions.get("screen").width / 1.4,
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 6,
  },
  numberText: {
    color: COLORS.themeGradientColor,
    fontFamily: FONT1BOLD,
    fontSize: 14,
  },
  containerBox2: {
    width: Dimensions.get("screen").width / 1.8,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  treatmentItemView: {
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  treatmentContainer: {
    width: Dimensions.get("screen").width / 1.4,
    marginTop: 6,
  },
});
