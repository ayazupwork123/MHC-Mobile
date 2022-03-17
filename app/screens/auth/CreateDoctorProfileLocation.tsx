// screen 4.4 Medical Professional Profile
import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import Modal from "react-native-modal";
import AppInput from "../../components/forms/FormField";
import Button from "../../components/GradientButton";
import { Ionicons } from "@expo/vector-icons";
import SheduleSet from "../../components/doctor/ScheduleSet";
import { COLORS, FONT1MEDIUM, SCREEN_WIDTH } from "../../config";
import i18n from "../../utils/i18n";

type Time = {
  to: string;
  from: string;
};

type Week = {
  day: string;
  timings: Time[]
}

type State = {
  place: string;
  fax: string;
  country: string;
  region: string;
  city: string;
  zip: string;
  street: string;
  number: string;
  apartment: string;
  floor: string;
  providedServices: string;
  averageExaminationTime: string;
  availability: string;
  day: string;
  week: Week[];
};

type LocationData = {
  showAvailabilityCalendar: boolean;
  showTimeDropdowns: boolean;
  values: State;
};

interface Props {
  currentFieldIndex: number;
  data: LocationData;
  totalFields: number;
  showModal: boolean;
  editPressHandler: (value: boolean) => void;
  inputChangeHandler: (name: string, value: any) => void;
  outerChangeHandler: (name: string, value: any) => void;
  timingsHandler: (data: Time) => void;
  setShowModal: (value: boolean) => void;
  setCurrentFieldIndex: (index: number) => void;
  addPressHandler: () => void;
  deleteHandler: () => void;
}  

function CreateDoctorProfileLocation(props: Props) {
  const {
    totalFields,
    currentFieldIndex,
    data,
    setCurrentFieldIndex,
    inputChangeHandler,
    outerChangeHandler,
    timingsHandler,
    addPressHandler,
    setShowModal,
    deleteHandler,
  } = props;

  const createRef = {
    place: useRef(null),
    fax: useRef(null),
    country: useRef(null),
    region: useRef(null),
    city: useRef(null),
    zip: useRef(null),
    street: useRef(null),
    apartment: useRef(null),
    floor: useRef(null),
    providedServices: useRef(null),
    averageExaminationTime: useRef(null),
  };

  const onSubmit = (_ref: any) => {
    _ref.current?.focus();
  };

  return (
    <Modal
      backdropColor="transparent"
      hasBackdrop={true}
      style={{flex: 1}}
      onBackdropPress={() => setShowModal(false)}
      isVisible={props.showModal}
    > 
      <View style={styles.modalContent}>
        <ImageBackground source={require("../../assets/background.png")} style={styles.modalBackground} >
          <View style={styles.content_box}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text style={styles.heading}>{`${i18n.t("Location")} ${
                currentFieldIndex + 1
              }`}</Text>
              <TouchableOpacity
                disabled={currentFieldIndex + 1 >= totalFields}
                onPress={() => {
                  if (currentFieldIndex <= totalFields) {
                    setCurrentFieldIndex(currentFieldIndex + 1);
                  }
                }}>
                <Ionicons
                  name="chevron-forward-sharp"
                  size={20}
                  color={COLORS.blue}
                />
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Place")}
                    name={"place"}
                    value={data.values.place}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.place}
                    onSubmitRef={createRef.fax}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Fax Number")}
                    name={"fax"}
                    value={data.values.fax}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.fax}
                    onSubmitRef={createRef.country}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Country")}
                    name={"country"}
                    value={data.values.country}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.country}
                    onSubmitRef={createRef.region}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Region")}
                    name={"region"}
                    value={data.values.region}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.region}
                    onSubmitRef={createRef.city}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("City")}
                    name={"city"}
                    value={data.values.city}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.city}
                    onSubmitRef={createRef.zip}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Zip")}
                    name={"zip"}
                    value={data.values.zip}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.zip}
                    onSubmitRef={createRef.street}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Street")}
                    name={"street"}
                    value={data.values.street}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.street}
                    onSubmitRef={createRef.apartment}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Apartment")}
                    name={"apartment"}
                    value={data.values.apartment}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.apartment}
                    onSubmitRef={createRef.floor}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Floor")}
                    name={"floor"}
                    value={data.values.floor}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.floor}
                    onSubmitRef={createRef.providedServices}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("Provided Services")}
                    name={"providedServices"}
                    value={data.values.providedServices}
                    onChange={inputChangeHandler}
                    returnKeyType="next"
                    refrence={createRef.providedServices}
                    onSubmitRef={createRef.averageExaminationTime}
                    onSubmit={onSubmit}
                  />
                </View>
                <View style={styles.marVer3}>
                  <AppInput
                    placeholder={i18n.t("AvgExamination")}
                    name={"averageExaminationTime"}
                    value={data.values.averageExaminationTime}
                    onChange={inputChangeHandler}
                    refrence={createRef.averageExaminationTime}
                    keyboardType="numeric"
                    returnKeyType="done"
                  />
                </View>
                <View>
                  <SheduleSet  
                    values={data.values}
                    showAvailabilityCalendar={data.showAvailabilityCalendar}
                    showTimeDropdowns={data.showTimeDropdowns}
                    outerChangeHandler={outerChangeHandler}
                    timingsHandler={timingsHandler}
                    onPress={inputChangeHandler}
                  />
                </View>
              </ScrollView>
              <View style={{ marginTop: 14, marginBottom: 25 }}>
                <Button
                  height={54}
                  fontSize={18}
                  width={"100%"}
                  transparent
                  backgroundColor="#858EA9"
                  textColor="white"
                  style={{ fontWeight: FONT1MEDIUM }}
                  borderRadius={10}
                  text={i18n.t("Delete")}
                  onPress={() => {
                    console.log(`data`, data);
                    deleteHandler();
                    setShowModal(false);
                  }}
                  marginTopHide
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false);
                  addPressHandler();
                }}
                style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles.addLocation}>{i18n.t("Add Location")}</Text>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    marginTop: 4,
                    marginLeft: 10,
                    marginBottom: 15,
                  }}
                  source={require("./../../assets/green-add.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: "90%",
    marginHorizontal: "5%",
    height: "70%",
    borderRadius: 12,
    minHeight: 450
  },
  modalBackground: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingTop: 5,
    paddingBottom: 15,
    borderRadius: 12,
    overflow: "hidden"
  },
  content_box: {
    borderRadius: 12,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontFamily: FONT1MEDIUM,
    color: COLORS.black,
    marginBottom: 6,
    marginTop: 8,
    marginRight: 5,
  },
  marVer3: {
    marginVertical: 2,
  },
  addLocation: {
    fontFamily: FONT1MEDIUM,
    fontSize: 18,
    color: COLORS.themeGradientColor,
  }
});

export default CreateDoctorProfileLocation;
