// Component 7
import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import AppInput from "../forms/FormField";

type Time = {
  to: string;
  from: string;
};

type Week = {
  day: string;
  timings: Time[];
};

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

interface Props {
  placeholder: string;
  value?: string;
  name: string;
  locations?: LocationData[];
  onPress: (event: any) => void;
  onEditPress: (value: boolean, index: number) => void;
}

type LocationData = {
  showAvailabilityCalendar: boolean;
  showTimeDropdowns: boolean;
  values: State;
};

const AddLocation = ({
  locations,
  value,
  name,
  placeholder,
  onPress,
  onEditPress,
}: Props) => {
  return (
    <>
      <AppInput
        editable={false}
        placeholder={placeholder}
        name={name}
        value={value}
        returnKeyType="next"
        icon={
          <TouchableOpacity onPress={onPress}>
            <Image
              style={styles.add}
              source={require("./../../assets/add-grey.png")}
            />
          </TouchableOpacity>
        }
      />
      <View style={{ marginBottom: 20 }}>
        {locations &&
          locations.length > 0 &&
          locations.map((currentlocation: LocationData, index: number) => (
            <AppInput
              key={index + 1}
              editable={false}
              placeholder={`${placeholder} ${index + 1}`}
              name={`${name}${index + 1}`}
              value={currentlocation.values.place}
              returnKeyType="next"
              icon={
                <TouchableOpacity onPress={() => onEditPress(true, index)}>
                  <Image
                    style={styles.add}
                    source={require("./../../assets/edit-grey.png")}
                  />
                </TouchableOpacity>
              }
            />
          ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  add: {
    width: 19,
    height: 19,
  },
});

export default AddLocation;
