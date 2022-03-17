// screen U5 Profile screen
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import DropdownPicker from "../../components/forms/DropdownPicker";
import AppInput from "../../components/forms/FormField";
import ProfileTopSection from "../../components/ProfileTopSection";
import { COLORS, FONT1MEDIUM, FONT1REGULAR, SCREEN_WIDTH } from "../../config";
import i18n from "../../utils/i18n";

type FormFields = {
  firstName: string;
  lastName: string;
  gender: string;
  securityNumber: string;
  country: string;
  region: string;
  city: string;
  zip: string;
  street: string;
  number: string;
  apartment: string;
  floor: string;
};

function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [genderOptions, setGenderOptions] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);
  const [gender, setGender] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const [state, setState] = useState<FormFields>({
    firstName: "",
    lastName: "",
    gender: "",
    securityNumber: "",
    country: "",
    region: "",
    city: "",
    zip: "",
    street: "",
    number: "",
    apartment: "",
    floor: "",
  });
  const createRef = {
    firstName: useRef(null),
    lastName: useRef(null),
    securityNumber: useRef(null),
    country: useRef(null),
    region: useRef(null),
    city: useRef(null),
    zip: useRef(null),
    street: useRef(null),
    number: useRef(null),
    apartment: useRef(null),
    floor: useRef(null),
  };

  useEffect(() => {
    setState((pre) => ({ ...pre, gender: gender }));
  }, [gender]);

  const handleChange = (name: any, value: any) => {
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const onSubmit = (_ref: any) => {
    _ref.current?.focus();
  };

  const save = () => {
    console.log("Save")
    setEdit(false)
  }

  const editAction = () =>  edit ?  save() : setEdit(true)

  return (
    <AppScreenKeyboardHide
      isTransparent={false}
      linearColor={[COLORS.primaryBlue, COLORS.themeGradientColor]}
      barStyle="light-content"
      backgroundColor={COLORS.themeGradientColor}
    >
      <ScrollView
        bounces={false}
        style={styles.height_100}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <ProfileTopSection image={image} setImage={setImage} isEdit={edit} editAction={editAction}/>
        <View style={styles.mainContainer}>
          <View style={styles.center}>
            <Text style={styles.setProfile}>
              {i18n.t("customer.Profile.setProfile")}
            </Text>
            <Text style={styles.title}>
              {i18n.t("customer.Profile.updateProfileInfo")}
            </Text>
          </View>
          <View style={styles.form}>
            <View style={styles.row}>
              <View style={styles.halfWidthFields}>
                <AppInput
                  placeholder={i18n.t("common.FirstName")}
                  editable={edit}
                  name={"firstName"}
                  value={state.firstName}
                  onChange={handleChange}
                  returnKeyType="next"
                  refrence={createRef.firstName}
                  onSubmitRef={createRef.lastName}
                  onSubmit={onSubmit}
                  borderColor={edit ? COLORS.themeGradientColor : undefined}
                />
              </View>
              <View style={styles.halfWidthFields}>
                <AppInput
                  placeholder={i18n.t("common.LastName")}
                  editable={edit}
                  name={"lastName"}
                  value={state.lastName}
                  onChange={handleChange}
                  returnKeyType="done"
                  refrence={createRef.lastName}
                  borderColor={edit ? COLORS.themeGradientColor : undefined}
                />
              </View>
            </View>
            <View>
              <DropdownPicker
                borderColor={edit ? COLORS.themeGradientColor : undefined}
                editable={edit}
                placeholder={i18n.t("common.Gender")}
                items={genderOptions}
                setItems={setGenderOptions}
                value={gender}
                setValue={setGender}
              />
              <AppInput
                placeholder={i18n.t("customer.Profile.socialNumber")}
                editable={edit}
                name={"securityNumber"}
                value={state.securityNumber}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.securityNumber}
                onSubmitRef={createRef.country}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.Country")}
                editable={edit}
                name={"country"}
                value={state.country}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.country}
                onSubmitRef={createRef.region}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.Region")}
                editable={edit}
                name={"region"}
                value={state.region}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.region}
                onSubmitRef={createRef.city}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.City")}
                editable={edit}
                name={"city"}
                value={state.city}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.city}
                onSubmitRef={createRef.zip}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.Zip")}
                editable={edit}
                name={"zip"}
                value={state.zip}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.zip}
                onSubmitRef={createRef.street}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.Street")}
                editable={edit}
                name={"street"}
                value={state.street}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.street}
                onSubmitRef={createRef.number}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.Number")}
                editable={edit}
                name={"number"}
                value={state.number}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.number}
                onSubmitRef={createRef.apartment}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.Apartment")}
                editable={edit}
                name={"apartment"}
                value={state.apartment}
                onChange={handleChange}
                returnKeyType="next"
                refrence={createRef.apartment}
                onSubmitRef={createRef.floor}
                onSubmit={onSubmit}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
              <AppInput
                placeholder={i18n.t("common.Floor")}
                editable={edit}
                name={"floor"}
                value={state.floor}
                onChange={handleChange}
                returnKeyType="done"
                refrence={createRef.floor}
                borderColor={edit ? COLORS.themeGradientColor : undefined}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </AppScreenKeyboardHide>
  );
}

const styles = StyleSheet.create({
  height_100: {
    flex:1
  },
  scroll: {
    alignItems: "center",
    flexGrow: 1
  },
  mainContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  setProfile: {
    marginBottom: 10,
    fontSize: 16,
    fontFamily: FONT1MEDIUM,
    color: COLORS.blue,
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: FONT1REGULAR,
    color: COLORS.blue,
    lineHeight: 20,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  form: {
    marginVertical: 20,
    width: "100%",
  },
  halfWidthFields: {
    width: SCREEN_WIDTH * 0.45 - 6,
  },
});

export default Profile;
