import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../config";

interface Props {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (name: string, text: string) => void;
  onBlur?: () => void;
  error?: boolean | string;
  errorText?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  maxLength?: any;
  refrence?: any;
  onSubmitRef?: any;
  returnKeyType?: "done" | "search" | "default" | "go" | "next" | "send";
  onSubmit?: (value: any) => void;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  iconSize?: number;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

function PasswordField(props: Props) {
  const {
    placeholder,
    name,
    value,
    error,
    errorText,
    secureTextEntry,
    keyboardType,
    maxLength,
    refrence,
    onSubmitRef,
    returnKeyType,
    onSubmit,
    onChange,
    onBlur,
    editable = true,
    selectTextOnFocus = false,
    iconSize,
    autoCapitalize,
  } = props;
  const [focused, setFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: error ? "#B90000" : "#67729429" },
      ]}>
      <TextInput
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        returnKeyType={returnKeyType ? returnKeyType : "done"}
        secureTextEntry={errorText ? false : hidePassword}
        value={errorText ? errorText : value}
        maxLength={maxLength || null}
        keyboardType={keyboardType || "default"}
        autoCapitalize={autoCapitalize || "none"}
        onChangeText={(text) => onChange && onChange(name, text)}
        placeholderTextColor={COLORS.placeholderTextColor}
        style={[styles.textInput, { color: errorText ? "#B90000" : "#677294" }]}
        ref={refrence && refrence}
        onSubmitEditing={() => {
          onSubmit && onSubmit(onSubmitRef);
        }}
        onBlur={() => {
          setFocused(false);
          onBlur && onBlur();
        }}
      />
      <TouchableWithoutFeedback onPress={() => setHidePassword(!hidePassword)}>
        <Ionicons
          name={hidePassword ? "eye-sharp" : "eye-off-sharp"}
          size={iconSize ? iconSize : 24}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    height: 50,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  textInput: {
    fontFamily: "Rubik-Light",
    color: "white",
    width: "80%",
    fontSize: 16,
  },
});

export default PasswordField;
