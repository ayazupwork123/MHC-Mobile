// screen 4.3 Medical Professional Profile Creation process step 3
import React, { useState } from "react";
import { StyleSheet, View, Text,  TouchableOpacity } from "react-native";
import Button from "../../components/GradientButton";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import CreateDoctorProfileLocation from "./CreateDoctorProfileLocation";
import AddLocation from "../../components/doctor/AddLocation";
import ThreeStepIndicator from "../../components/stepIndicators/threeSteps/ThreeStepIndicator";
import { COLORS, FONT1MEDIUM, SCREEN_WIDTH } from "../../config";
import i18n from "../../utils/i18n";

interface Props {
  navigation: any;
}

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

function CreateDoctorProfile3(props: Props) {
  const { navigation } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentFieldIndex, setCurrentFieldIndex] = useState<number | null>(null);
  const [state, setState] = useState<LocationData[]>([]);

  const data: LocationData = {
    showAvailabilityCalendar: false,
    showTimeDropdowns: false,
    values: {
      place: "",
      fax: "",
      country: "",
      region: "",
      city: "",
      zip: "",
      street: "",
      number: "",
      apartment: "",
      floor: "",
      providedServices: "",
      averageExaminationTime: "",
      availability: "",
      day: "Sunday",
      week: [
        {day: "Sunday", timings: []},
        {day: "Monday", timings: []},
        {day: "Tuesday", timings: []},
        {day: "Wednesday", timings: []},
        {day: "Thursday", timings: []},
        {day: "Friday", timings: []},
        {day: "Saturday", timings: []}
      ],
    },
  };

  const addPressHandler = () => {
    const tempData = { ...data };
    const tempState = [...state];
    tempState.push(tempData);
    setState(tempState);
  };

  const editPressHandler = (value: boolean, index: number | null = null) => {
    setShowModal(value);
    if (index !== null) {
      setCurrentFieldIndex(index);
    }
  };

  const inputChangeHandler = (name: string, value: any) => {
    if (currentFieldIndex !== null) {
      const tempState = [...state];
      const tempCurrentState = {
        ...tempState[currentFieldIndex],
        values: { ...tempState[currentFieldIndex].values, [name]: value },
      };
      tempState[currentFieldIndex] = { ...tempCurrentState };
      setState(tempState);
    }
  };

  const outerChangeHandler = (name: string, value: any) => {
    if (currentFieldIndex !== null) {
      const tempState = [...state];
      const tempCurrentState = {
        ...tempState[currentFieldIndex],
        [name]: value,
      };
      tempState[currentFieldIndex] = { ...tempCurrentState };
      setState(tempState);
    }
  };

  const timingsHandler = ( data: Time) => {
    if (currentFieldIndex !== null) {
      const tempState = [...state];
      const index = tempState[currentFieldIndex].values.week.findIndex(data => data.day === tempState[currentFieldIndex].values.day);
      tempState[currentFieldIndex].values.week[index].timings.push({ ...data });
      setState(tempState);
    }
  };

  const deleteHandler = () => {
    if (currentFieldIndex !== null) {
      const tempState = [...state];
      tempState.splice(currentFieldIndex, 1);
      setState(tempState);
    }
  };

  return (
    <>
      {showModal && currentFieldIndex !== null && state[currentFieldIndex] && (
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.center, styles.modal_root]}
          onPress={() => editPressHandler(false)}>
          <CreateDoctorProfileLocation
            showModal={showModal}
            data={state[currentFieldIndex]}
            currentFieldIndex={currentFieldIndex}
            setCurrentFieldIndex={setCurrentFieldIndex}
            editPressHandler={editPressHandler}
            inputChangeHandler={inputChangeHandler}
            outerChangeHandler={outerChangeHandler}
            timingsHandler={timingsHandler}
            addPressHandler={addPressHandler}
            setShowModal={setShowModal}
            deleteHandler={deleteHandler}
            totalFields={state.length}
          />
        </TouchableOpacity>
      )}
      <AppScreenKeyboardHide>
        <View style={styles.mainView}>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.heading}>{i18n.t("Office locations")}</Text>
              <ThreeStepIndicator active={3} />
            </View>
            <View style={styles.form}>
              <AddLocation 
                name="location" 
                placeholder={i18n.t("Location")} 
                onPress={addPressHandler} 
                onEditPress={editPressHandler}
                locations={state}
              />
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
              onPress={() => navigation.navigate("CreateDoctorProfileSuccess")}
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
    </>
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
  center: {
    justifyContent: "center",
    alignItems: "center",
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
  modal_root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.79)",
    zIndex: 9,
  },
});

export default CreateDoctorProfile3;
