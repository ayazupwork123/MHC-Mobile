import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../GradientButton";
import PinIcon from "../../assets/svg/pin";
import { SCREEN_WIDTH } from "../../config";

interface Props {
  image: any;
  name: string;
  reason?: string;
  gender: string;
  location: string;
  buttonText: string;
  navigateTo?: any;
}

const CustomerCard = (props: Props) => {
  const navigation = useNavigation();
  const { navigateTo = "" } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", width: SCREEN_WIDTH * 0.81 }}>
        <Image
          source={{ uri: props.image }}
          style={{
            width: 100,
            borderRadius: 4,
            height: 100,
            marginRight: 10,
            resizeMode: "contain",
          }}
        />
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={[styles.appointmentReason]} numberOfLines={2}>
            {props.reason}
          </Text>
          <Text style={[styles.location, { marginTop: 4 }]}>
            {props.gender[0].toUpperCase() + props.gender.slice(1)}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 5,
            }}>
            <PinIcon />
            <Text style={[styles.location, { marginLeft: 3 }]}>
              {props.location}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "90%",
          marginTop: 20,
        }}>
        <View style={{ width: 150, height: 40 }}>
          <Button
            onPress={() => navigation.navigate(navigateTo)}
            text={props.buttonText}
            marginTopHide
            borderRadius={4}
            height={40}
            fontSize={14}
            width="100%"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    // height: 200,
    width: "99%",
    borderRadius: 6,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 2,
  },
  name: {
    fontFamily: "Rubik-Medium",
    fontSize: 18,
    marginVertical: 5,
  },
  appointmentReason: {
    fontSize: 13,
    fontFamily: "Rubik-Regular",
    color: "#00CCCB",
  },
  location: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: "Rubik-Light",
    color: "#677294",
  },
});

export default CustomerCard;
