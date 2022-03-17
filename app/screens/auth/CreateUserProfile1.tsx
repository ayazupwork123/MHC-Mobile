// screen 3.1 User Profile Creation process step 1
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FourStepIndicator from "../../components/stepIndicators/fourSteps/FourStepIndicator";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/GradientButton";
import i18n from "../../utils/i18n";
import { SCREEN_WIDTH, FONT1MEDIUM, COLORS } from "../../config";

enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}

const CreateUserProfile1 = ({ navigation }: any) => {
  // states
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [dob, setDob] = useState<string>("");
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);

  // gender dropdown options
  const [items, setItems] = useState([
    { label: Gender.Male, value: Gender.Male },
    { label: Gender.Female, value: Gender.Female },
    { label: Gender.Others, value: Gender.Others },
  ]);

  // refs
  const ref_lastname: any = useRef();
  const ref_socailsecurity: any = useRef();

  const onChange = (event: any, selectedDate: any) => {
    let currentDate = selectedDate || date;
    setDate(currentDate);
    setDob(currentDate.toDateString());
    setOpenDatePicker(false);
  };

  const checkEmptyFields = () => {
    return (
      firstName !== "" &&
      lastName !== "" &&
      gender !== "" &&
      socialSecurityNumber !== "" &&
      dob !== ""
    );
  };

  return (
    <AppScreenKeyboardHide>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <Text style={styles.heading}>{i18n.t("auth.CreateDoctorProfile1.PersonalInformation")}</Text>
          <FourStepIndicator active={1} />
          <View style={styles.firstLastName}>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              style={styles.input}
              placeholder={i18n.t("FirstName")}
              onSubmitEditing={() => ref_lastname.current.focus()}
            />
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={styles.input}
              placeholder={i18n.t("LastName")}
              ref={ref_lastname}
              onSubmitEditing={() => ref_socailsecurity.current.focus()}
            />
          </View>
          <View style={styles.otherInputs}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={items}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={i18n.t("SelectItem")}
              value={gender}
              onChange={(item: any) => setGender(item.value)}
            />
            <TextInput
              value={socialSecurityNumber}
              onChangeText={setSocialSecurityNumber}
              style={[styles.dropdownStyles, styles.socialSecurity]}
              placeholder={i18n.t("SocialSecurityNumber")}
              ref={ref_socailsecurity}
            />
            <TouchableOpacity
              style={styles.dateStyles}
              onPress={() => setOpenDatePicker(true)}>
              <TextInput
                pointerEvents="none"
                editable={false}
                value={dob}
                style={styles.inputStyles}
                placeholder={i18n.t("DateOfBirth")}
              />
              <View style={styles.iconStyles}>
                <MaterialIcons name="date-range" size={24} color="#999999" />
              </View>
            </TouchableOpacity>
            {openDatePicker === true && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <Button
            height={54}
            fontSize={18}
            btnDisabled={checkEmptyFields() === true ? false : true}
            width={"100%"}
            style={{ fontWeight: FONT1MEDIUM }}
            borderRadius={10}
            text={i18n.t("Next")}
            onPress={() => navigation.navigate("CreateUserProfile2")}
            marginTopHide
          />
          <Button
            height={54}
            transparent
            fontSize={18}
            marginTopHide
            width={"100%"}
            borderRadius={10}
            text={i18n.t("Back")}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </AppScreenKeyboardHide>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: "10%",
    marginBottom: 20,
    width: SCREEN_WIDTH,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentView: {
    width: "90%",
  },
  dropdown: {
    height: 54,
    width: "100%",
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: COLORS.inputBorderColor,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.placeholderTextColor,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Rubik-Light",
    color: COLORS.blue,
  },
  container: {
    width: "100%",
    height: "100%",
    paddingTop: "25%",
    paddingLeft: 20,
  },
  heading: {
    fontSize: 20,
    fontFamily: FONT1MEDIUM,
    color: COLORS.black,
    marginBottom: 40,
  },
  stepIndicator: {
    top: 35,
    left: -20,
    bottom: 40,
  },
  firstLastName: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: "20%",
  },
  input: {
    width: "48%",
    paddingLeft: 20,
    height: 54,
    marginRight: 16,
    borderRadius: 12,
    borderColor: "#67729429",
    borderWidth: 1,
    fontSize: 15,
    backgroundColor: COLORS.white,
  },
  otherInputs: {
    width: "100%",
    top: 10,
  },
  dropdownStyles: {
    height: 54,
    borderRadius: 12,
    borderColor: "#67729429",
    borderWidth: 1,
    fontSize: 15,
  },
  placeholderStyles: {
    color: "#999999",
    fontSize: 15,
    paddingLeft: 10,
  },
  socialSecurity: {
    top: 20,
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
  dateStyles: {
    display: "flex",
    flexDirection: "row",
    width: "101%",
    height: 54,
    top: 40,
  },
  inputStyles: {
    backgroundColor: "#fff",
    width: "90%",
    borderWidth: 1,
    borderRightColor: "#fff",
    borderColor: "#67729429",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingLeft: 20,
  },
  iconStyles: {
    backgroundColor: COLORS.white,
    width: "10%",
    borderWidth: 1,
    // borderColor: "#67729429 #67729429 #67729429 #fff",
    borderLeftColor: COLORS.white,
    borderRightColor: "#67729429",
    borderTopColor: "#67729429",
    borderBottomColor: "#67729429",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    paddingTop: 15,
    marginLeft: -2,
  },
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.white,
    top: 160,
    width: "95%",
  },
  btnStyles: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 54,
    borderWidth: 1,
    backgroundColor: "#D4EEFA",
    borderColor: "#D4EEFA",
    borderRadius: 12,
    marginBottom: 15,
  },
  activeBtn: {
    backgroundColor: COLORS.primaryBlue,
    borderColor: COLORS.primaryBlue,
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
});

export default CreateUserProfile1;
