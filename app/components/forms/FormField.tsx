import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../config";

interface Props {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (name: string, text: string) => void;
  onBlur?: () => void;
  error?: boolean | string;
  errorText?: string;
  icon?: any;
  secureTextEntry?: boolean;
  borderColor?: string;
  keyboardType?: any;
  maxLength?: any;
  refrence?: any;
  onSubmitRef?: any;
  returnKeyType?: "done" | "search" | "default" | "go" | "next" | "send";
  onSubmit?: (value: any) => void;
  editable?: boolean;
  selectTextOnFocus?: boolean;
}

function FormField(props: Props) {
  const {
    placeholder,
    name,
    value,
    error,
    errorText,
    icon,
    secureTextEntry,
    keyboardType,
    maxLength,
    refrence,
    onSubmitRef,
    returnKeyType,
    onSubmit,
    onChange,
    onBlur,
    borderColor,
    editable = true,
    selectTextOnFocus = false,
  } = props;
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: error ? "#B90000" :  borderColor ? borderColor :  "#67729429" },
      ]}>
      <TextInput
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        returnKeyType={returnKeyType ? returnKeyType : "done"}
        secureTextEntry={errorText ? false : secureTextEntry}
        value={errorText ? errorText : value}
        maxLength={maxLength || null}
        keyboardType={keyboardType || "default"}
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
      {icon && icon}
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

export default FormField;
