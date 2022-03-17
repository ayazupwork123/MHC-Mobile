// screen 4.1 Medical Professional Profile Creation process step 1
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import DropdownPicker from "../../components/forms/DropdownPicker";
import AppInput from "../../components/forms/FormField";
import Button from "../../components/GradientButton";
import ThreeStepIndicator from "../../components/stepIndicators/threeSteps/ThreeStepIndicator";
import { COLORS, FONT1LIGHT, FONT1MEDIUM, SCREEN_WIDTH } from "../../config";
import i18n from "../../utils/i18n";

interface Props {
  navigation: any;
}

type FormFields = {
  firstName: string;
  lastName: string;
  medicalSpeciality: string;
  education: string;
  gesy: boolean;
};

interface CheckBoxProps {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

function MyCheckbox(props: CheckBoxProps) {
  const { checked, setChecked } = props;
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Ionicons name="checkmark" size={18} color={COLORS.blue} />}
    </Pressable>
  );
}

function CreateDoctorProfile1(props: Props) {
  const { navigation } = props;
  const [checked, setChecked] = useState(true);
  const [education, setEducation] = useState<string>("");
  const [educationOptions, setEducationOptions] = useState([
    { label: "Undergraduated", value: "undergraduated" },
    { label: "Graduated", value: "graduated" },
  ]);

  const [state, setState] = useState<FormFields>({
    firstName: "",
    lastName: "",
    medicalSpeciality: "",
    education: "",
    gesy: true,
  });

  const createRef = {
    firstName: useRef(null),
    lastName: useRef(null),
    medicalSpeciality: useRef(null),
  };

  const handleChange = (name: any, value: any) => {
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const onSubmit = (_ref: any) => {
    _ref.current?.focus();
  };

  useEffect(() => {
    setState((pre) => ({ ...pre, education: education }));
  }, [education]);

  useEffect(() => {
    setState((pre) => ({ ...pre, gesy: checked }));
  }, [checked]);

  return (
    <AppScreenKeyboardHide>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <Text style={styles.heading}>{i18n.t("Personal information")}</Text>
          <ThreeStepIndicator active={1} />
          <View style={styles.form}>
            <View style={styles.row}>
              <View style={styles.halfWidthFields}>
                <AppInput
                  placeholder={i18n.t("First Name")}
                  name={"firstName"}
                  value={state.firstName}
                  onChange={handleChange}
                  returnKeyType="next"
                  refrence={createRef.firstName}
                  onSubmitRef={createRef.lastName}
                  onSubmit={onSubmit}
                />
              </View>
              <View style={styles.halfWidthFields}>
                <AppInput
                  placeholder={i18n.t("Last Name")}
                  name={"lastName"}
                  value={state.lastName}
                  onChange={handleChange}
                  returnKeyType="next"
                  refrence={createRef.lastName}
                  onSubmitRef={createRef.medicalSpeciality}
                  onSubmit={onSubmit}
                />
              </View>
            </View>
            <AppInput
              placeholder={i18n.t("Medical Specialty")}
              name={"medicalSpeciality"}
              value={state.medicalSpeciality}
              onChange={handleChange}
              returnKeyType="done"
              refrence={createRef.medicalSpeciality}
            />
            <DropdownPicker
              placeholder={i18n.t("Education")}
              items={educationOptions}
              value={education}
              setValue={setEducation}
              setItems={setEducationOptions}
            />
            <View style={styles.gesy}>
              <MyCheckbox checked={checked} setChecked={setChecked} />
              <Text
                style={[
                  styles.checkboxText,
                  {
                    color: checked ? COLORS.blue : COLORS.placeholderTextColor,
                  },
                ]}
              >
                {i18n.t("Gesy")}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <Button
            height={54}
            fontSize={18}
            width={"100%"}
            style={{ fontWeight: FONT1MEDIUM }}
            borderRadius={10}
            text={i18n.t("Next")}
            onPress={() => navigation.navigate("CreateDoctorProfile2")}
          />
          <Button
            height={54}
            transparent
            fontSize={18}
            marginTopHide
            width={"100%"}
            borderRadius={10}
            text={i18n.t("Back")}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </AppScreenKeyboardHide>
  );
}

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
  heading: {
    fontSize: 20,
    fontFamily: FONT1MEDIUM,
    color: COLORS.black,
    marginBottom: 40,
  },
  form: {
    marginTop: "15%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidthFields: {
    width: SCREEN_WIDTH * 0.45 - 6,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  checkboxChecked: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  checkboxText: {
    fontSize: 16,
    fontFamily: FONT1LIGHT,
    marginLeft: 10,
  },
  gesy: {
    flexDirection: "row",
    marginTop: 22,
    alignItems: "center",
  },
});

export default CreateDoctorProfile1;

