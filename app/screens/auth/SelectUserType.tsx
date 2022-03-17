// screen 2.2 Select User Type
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import UserType1 from "../../assets/svg/UserType1";
import UserType2 from "../../assets/svg/UserType2";
import AppScreen from "../../components/AppScreen";
import Button from "../../components/GradientButton";
import i18n from "../../utils/i18n";
import { SCREEN_WIDTH, FONT1REGULAR, COLORS } from "../../config";

interface State {
  selectedType: String;
}

interface OwnProps {
  navigation: any;
}

function UserType({ navigation }: OwnProps) {
  const [state, setState] = useState<State>({
    selectedType: "",
  });

  return (
    <AppScreen>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <View style={styles.featureView}>
            <Text style={styles.featureText}>
              {i18n.t('DescribesYou')}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              setState((pre) => ({ ...pre, selectedType: "user" }))
            }
            style={{
              height: 45,
              width: "100%",
              marginTop: 20,
              backgroundColor: COLORS.white,
              borderRadius: 12,
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderWidth: state.selectedType === "user" ? 1 : 0,
              borderColor: "#4DC6FD",
            }}
          >
            <UserType1
              fill={state.selectedType === "user" ? "#4DC6FD" : "#DADADA"}
            />
            <Text
              style={{
                fontFamily: FONT1REGULAR,
                color: state.selectedType === "user" ? "#4DC6FD" : "#DADADA",
                width: "70%",
                marginLeft: 20,
              }}
            >
              {i18n.t("User")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setState((pre) => ({ ...pre, selectedType: "medical" }))
            }
            style={{
              height: 45,
              width: "100%",
              marginTop: 20,
              backgroundColor: COLORS.black,
              borderRadius: 12,
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderWidth: state.selectedType === "medical" ? 1 : 0,
              borderColor: "#4DC6FD",
            }}
          >
            <UserType2
              fill={state.selectedType === "medical" ? "#4DC6FD" : "#DADADA"}
            />
            <Text
              style={{
                fontFamily: FONT1REGULAR,
                color:
                  state.selectedType === "medical" ? "#4DC6FD" : "#DADADA",
                width: "70%",
                marginLeft: 20,
              }}
            >
              {i18n.t("Medical Professional")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', marginBottom: Platform.OS === 'ios' ? 20 : 0}}>
          <Button
            text={i18n.t("Next")}
            onPress={() => navigation.navigate("Signup")}
            marginTopHide
            borderRadius={4}
            height={40}
            fontSize={14}
          />
        
          <Button
            text={i18n.t("Back")}
            onPress={() => navigation.goBack()}
            marginTopHide
            borderRadius={4}
            transparent
            height={40}
            fontSize={14}
          />
        </View>
      </View>
    </AppScreen>
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
  featureView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "40%",
  },
  featureText: {
    fontSize: 18,
    fontFamily: FONT1REGULAR,
    textAlign: "center",
  }
});
export default UserType;
