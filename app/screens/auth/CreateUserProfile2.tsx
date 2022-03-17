// screen 3.2 User Profile Creation process step 2
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FourStepIndicator from "../../components/stepIndicators/fourSteps/FourStepIndicator";
import { COLORS } from "../../config";
import i18n from "../../utils/i18n";

const CreateUserProfile2 = ({ navigation }: any) => {
  // states
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");

  // refs
  const ref_region: any = useRef();
  const ref_city: any = useRef();
  const ref_zipcode: any = useRef();
  const ref_street: any = useRef();
  const ref_number: any = useRef();
  const ref_floor: any = useRef();
  const ref_apartment: any = useRef();

  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={["#d4eefa", "transparent", "#e2f4f4"]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 1 }}>
        <Text style={styles.heading}>Personal Information</Text>
        <View style={styles.stepIndicator}>
          <FourStepIndicator active={2} />
        </View>
        <View style={styles.form}>
          <TextInput
            value={country}
            onChangeText={setCountry}
            style={styles.inputStyles}
            placeholder={i18n.t("Country")}
            onSubmitEditing={() => ref_region.current.focus()}
          />
          <TextInput
            value={region}
            onChangeText={setRegion}
            style={styles.inputStyles}
            placeholder={i18n.t("Region")}
            ref={ref_region}
            onSubmitEditing={() => ref_city.current.focus()}
          />
          <TextInput
            value={city}
            onChangeText={setCity}
            style={styles.inputStyles}
            placeholder={i18n.t("City")}
            ref={ref_city}
            onSubmitEditing={() => ref_zipcode.current.focus()}
          />
          <TextInput
            value={zipcode}
            onChangeText={setZipcode}
            style={styles.inputStyles}
            placeholder={i18n.t("Zipcode")}
            ref={ref_zipcode}
            onSubmitEditing={() => ref_street.current.focus()}
          />
          <TextInput
            value={street}
            onChangeText={setStreet}
            style={styles.inputStyles}
            placeholder={i18n.t("Street")}
            ref={ref_street}
            onSubmitEditing={() => ref_number.current.focus()}
          />
          <TextInput
            value={number}
            onChangeText={setNumber}
            style={styles.inputStyles}
            placeholder={i18n.t("Number")}
            ref={ref_number}
            onSubmitEditing={() => ref_floor.current.focus()}
          />
          <TextInput
            value={floor}
            onChangeText={setFloor}
            style={styles.inputStyles}
            placeholder={i18n.t("Floor")}
            ref={ref_floor}
            onSubmitEditing={() => ref_apartment.current.focus()}
          />
          <TextInput
            value={apartment}
            onChangeText={setApartment}
            style={styles.inputStyles}
            placeholder={i18n.t("Apartment")}
            ref={ref_apartment}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btnStyles}
            onPress={() => navigation.navigate("CreateUserProfile3")}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateUserProfile1")}>
            <Text style={styles.skip}>Back</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: "25%",
    paddingLeft: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  stepIndicator: {
    top: 35,
    left: -20,
    bottom: 30,
  },
  form: {
    top: "12%",
    width: "98%",
  },
  scrollView: {
    width: "100%",
  },
  inputStyles: {
    width: "95%",
    height: 54,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRightColor: COLORS.white,
    borderColor: "#67729429",
    borderRadius: 12,
    paddingLeft: 20,
    marginBottom: 20,
    fontSize: 15,
  },
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.white,
    top: 20,
    width: "93%",
    height: 350,
  },
  btnStyles: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    color: COLORS.white,
  },
  skip: {
    fontSize: 15,
    fontWeight: "700",
    color: "#999999",
  },
  text: {
    fontSize: 42,
  },
});

export default CreateUserProfile2;
