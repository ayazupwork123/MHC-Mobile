import React, { FunctionComponent, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { COLORS } from "../config";

interface Props {
  value: string;
  autoFocus?: boolean;
  setValue: any;
  verificationError: boolean;
  _text?: object;
}

const PINCode: FunctionComponent<Props> = (props) => {
  const { value, autoFocus = true, setValue, verificationError, _text } = props;
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [_props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (autoFocus && ref) ref.current!.focus();
  }, []);
  return (
    <CodeField
      ref={ref}
      autoFocus={autoFocus}
      {..._props}
      cellCount={4}
      value={value}
      onChangeText={setValue}
      rootStyle={styles.codeFiledRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => {
        return (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[
              styles.cellRoot,
              styles.cellBorderGrey,
              verificationError ? styles.cellBorderRed : styles.cellBorderGrey,
            ]}>
            <Text style={{ ...styles.cellText, ...(_text && _text) }}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  codeFiledRoot: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  cellRoot: {
    width: 51,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 9,
    borderWidth: 1,
  },
  cellBorderGrey: {
    borderColor: "rgba(103, 114, 148, 0.16)",
  },
  cellBorderRed: {
    borderColor: "#B90000",
  },
  cellText: {
    color: "#00CCCB",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
  },
  focusCell: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.black,
  },
  filledCell: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.black,
  },
});

export default PINCode;
