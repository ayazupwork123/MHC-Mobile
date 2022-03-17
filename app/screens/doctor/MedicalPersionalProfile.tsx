import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../components/AppScreen";
import ProfileTopSection from "../../components/ProfileTopSection";
import i18n from "../../utils/i18n";
import { fs, h, w } from "../../config/customSize";
import AppInput from "../../components/forms/FormField";
import DualSelector from "../../components/DualSelector";
import DropdownPicker from "../../components/forms/DropdownPicker";
import GradientButton from "../../components/GradientButton";
import SheduleSet from "../../components/doctor/ScheduleSet";

const MedicalProfessionalProfile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [education, setEducation] = useState<string>("");
  const [educationOptions, setEducationOptions] = useState([
    { label: "Undergraduated", value: "undergraduated" },
    { label: "Graduated", value: "graduated" },
  ]);

  const save = () => {
    console.log("Save");
    setEdit(false);
  };

  const editAction = () => (edit ? save() : setEdit(true));
  return (
    <AppScreen>
      <ScrollView>
        <ProfileTopSection
          image={image}
          setImage={setImage}
          isEdit={edit}
          editAction={editAction}
        />
        
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: fs(18) }}>
            {i18n.t("doctor.Medical.SetUpYourProfile")}
          </Text>
          <Text>{i18n.t("doctor.Medical.UpdateYourProfile")}</Text>
          <Text>{i18n.t("doctor.Medical.BetterImpression")}</Text>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: w(40) }}>
                <AppInput
                  placeholder={i18n.t("doctor.FormData.FirstName")}
                  name={"cName"}
                />
              </View>
              <View style={{ width: w(40) }}>
                <AppInput
                  placeholder={i18n.t("doctor.FormData.LastName")}
                  name={"cName"}
                />
              </View>
            </View>
            <View style={{ width: w(82) }}>
              <DropdownPicker
                placeholder={i18n.t("doctor.FormData.MedicalSpeciality")}
                items={educationOptions}
                value={education}
                setValue={setEducation}
                setItems={setEducationOptions}
              />
            </View>
            <AppInput
              placeholder={i18n.t("doctor.FormData.Education")}
              name={"cName"}
            />
            <AppInput
              placeholder={i18n.t("doctor.FormData.Us")}
              name={"cName"}
            />

            <AppInput
              placeholderPadding={h(5.5)}
              placeholder={i18n.t("doctor.FormData.Introduction")}
              name={"cName"}
              textAreaHeight={h(14)}
            />
          </View>
          <View style={{ width: w(90), marginVertical: h(2) }}>
            <DualSelector
              isCard={false}
              leftLabel={"Locations"}
              rightLabel={"Availability"}
              navigation={undefined}
            />
          </View>
        </View>
    

      
        <View style={styles.submitBtn}>
          <GradientButton
            text="Submit"
            borderRadius={10}
            height={54}
            fontSize={18}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default MedicalProfessionalProfile;

const styles = StyleSheet.create({
  submitBtn: { marginBottom: 33, paddingHorizontal: w(5) },
});
