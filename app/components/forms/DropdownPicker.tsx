import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS, FONT1LIGHT } from "../../config";

type Data = {
  label: string;
  value: string;
};

interface Props {
  items: Data[];
  value: string;
  editable?: boolean;
  setItems: any;
  setValue?: any;
  searchable?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  searchTextInputStyle?: any
  searchContainerStyle?: any;
  searchTextInputProps?: any;
  borderColor?: string;
}

function DropdownPicker(props: Props) {
  const { items, value, setValue, setItems, placeholder, searchable=false, editable=false, borderColor } = props;
  const [open, setOpen] = useState(false);
  const { searchPlaceholder, searchTextInputStyle=null, searchContainerStyle=null, searchTextInputProps={} } = props;


  return (
    <DropDownPicker
      searchable={searchable && searchable}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      disabled={!editable}
      setValue={setValue && setValue}
      setItems={setItems}
      style={[styles.picker, {borderColor: borderColor  || COLORS.inputBorderColor}]}
      textStyle={styles.pickerText}
      disableBorderRadius={true}
      placeholder={placeholder && placeholder}
      placeholderStyle={{ color: COLORS.placeholderTextColor }}
      dropDownContainerStyle={styles.dropDownContainerStyle}
      listMode={"SCROLLVIEW"}
      searchPlaceholder={searchPlaceholder && searchPlaceholder}
      searchTextInputStyle={searchTextInputStyle && searchTextInputStyle}
      searchContainerStyle={searchContainerStyle && searchContainerStyle}
      searchTextInputProps={searchTextInputProps && searchTextInputProps}
    />
  );
}

const styles = StyleSheet.create({
  picker: {
    borderColor: COLORS.inputBorderColor,
    paddingLeft: 20,
    height: 50,
    marginTop: 10,
  },
  pickerText: {
    color: COLORS.blue,
    fontSize: 16,
    fontFamily: FONT1LIGHT,
  },
  dropDownContainerStyle: {
    borderColor: COLORS.lightGrey,
    marginTop: 10,
    maxHeight: 200,
    zIndex: 9999
  },
});

export default DropdownPicker;