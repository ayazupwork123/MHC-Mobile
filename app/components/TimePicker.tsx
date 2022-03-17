import React, { Component } from "react";
import moment from "moment-timezone";
import { TouchableOpacity, View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import AppInput from "./forms/FormField";

interface Props {
  value: string;
  name: string;
  placeholder: string;
  setValue: (time: string) => void;
}

class TimePickerInput extends Component<Props> {
  state = {
    isDatePickerVisible: false,
    loaded: false,
    hours: [],
    minutes: [],
    selection: {
      hour: moment().format("HH"),
      minute: moment().format("mm"),
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        selection: {
          hour: this.props.value.split(":")[0],
          minute: this.props.value.split(":")[1],
        },
      });
    }
  }

  componentDidMount() {
    const hours = this.getHours();
    const minutes = this.getMinutes();
    this.setState({ loaded: true, hours, minutes });
  }

  hideDatePicker = () => {
    const { hour, minute } = this.state.selection;
    this.setState({ isDatePickerVisible: false }, () =>
      this.props.setValue(`${hour}:${minute}`)
    );
  };

  setHour = (value: string) =>
    this.setState({
      selection: { hour: value, minute: this.state.selection.minute },
    });
  setMinutes = (value: string) =>
    this.setState({
      selection: { hour: this.state.selection.hour, minute: value },
    });

  getHours = () => {
    const items = Array();
    new Array(24).fill(0).forEach((acc, index) => {
      items.push(moment({ hour: index }).format("HH"));
    });
    return items;
  };

  getMinutes = () => {
    const items = Array();
    new Array(60).fill(0).forEach((acc, index) => {
      items.push(moment({ minute: index }).format("mm"));
    });
    return items;
  };

  render() {
    const { loaded, isDatePickerVisible, hours, minutes, selection } =
      this.state;
    const { name, placeholder, value } = this.props;
    if (!loaded) return <></>;

    return (
      <>
        <TouchableOpacity
          onPress={() => this.setState({ isDatePickerVisible: true })}>
          <AppInput
            name={name}
            onTouchEnd={() => this.setState({ isDatePickerVisible: true })}
            placeholder={placeholder}
            value={value}
            editable={false}
          />
        </TouchableOpacity>
        <Modal
          backdropColor="black"
          hasBackdrop={true}
          onBackdropPress={this.hideDatePicker}
          isVisible={isDatePickerVisible}>
          <View
            style={[
              styles.container,
              Platform.OS === "android" && styles.androidContainer,
            ]}>
            <View style={styles.picker}>
              <Picker
                selectedValue={selection.hour}
                onValueChange={(itemValue) => this.setHour(itemValue)}>
                {hours.map((value) => (
                  <Picker.Item key={value} label={value} value={value} />
                ))}
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker
                selectedValue={selection.minute}
                onValueChange={(itemValue) => this.setMinutes(itemValue)}>
                {minutes.map((value) => (
                  <Picker.Item key={value} label={value} value={value} />
                ))}
              </Picker>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
  },
  androidContainer: {
    paddingVertical: 40,
  },
  picker: {
    flex: 1,
  },
});

export default TimePickerInput;
