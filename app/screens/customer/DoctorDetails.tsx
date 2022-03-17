// screen U1.3 Doctor details screen
// (also screen U2.2)
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import i18n from "../../utils/i18n";
import DoctorCard from "../../components/customer/DoctorCard";
import AppScreen from "../../components/AppScreen";
import Header from "../../components/Header";
import Map from "../../components/Map";

const imageDR1 = require("./../../assets/drlist.png");

const list = [
  {
    id: 0,
    title: i18n.t("Dr Fillerup Grab"),
    status: i18n.t("Medicine Specialist"),
    image: imageDR1,
    isFavorite: false,
  },
];

function DoctorDetails() {
  const [doctorDetails, setDoctorDetails] = useState<any>(null);
  
  useEffect(() => {
    setDoctorDetails(list);
  }, []);
  
  const favouriteToggleHandler = (id: number) => {
    // call api here for favourite toggle!

    // Updating data
    const tempList = doctorDetails.map((element: any) => {
      if (element.id === id) {
        element.isFavorite = !element.isFavorite;
      }
      return element;
    });
    setDoctorDetails(tempList);
  };

  const renderDoctors = (item: any) => {
    return <DoctorCard {...item}  key={item.id} buttonText={i18n.t("Book Now")} favouriteToggleHandler={favouriteToggleHandler}/>;
  };

  return (
    <View style={styles.container}>
      <AppScreen>
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Header title={"Doctor Details"}  />
          <View style={{ marginBottom: 10, marginTop: 20, width: "90%" }}>
            {doctorDetails && doctorDetails.map((item: any)  => renderDoctors(item))}
          </View>
          
          <View
            style={{
              backgroundColor: "#fff",
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 5,
              borderRadius: 10,
              width: "90%",
              height: 100,
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(203, 203, 203, 0.12)",
                borderRadius: 10,
                width: "25%",
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "Rubik-Medium", fontSize: 16 }}>
                100
              </Text>
              <Text style={{ fontFamily: "Rubik-Light", fontSize: 14 }}>
                {i18n.t("Runing")}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "rgba(203, 203, 203, 0.12)",
                borderRadius: 10,
                width: "25%",
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "Rubik-Medium", fontSize: 16 }}>
                500
              </Text>
              <Text style={{ fontFamily: "Rubik-Light", fontSize: 14 }}>
                {i18n.t("Ongoing")}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "rgba(203, 203, 203, 0.12)",
                borderRadius: 10,
                width: "25%",
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "Rubik-Medium", fontSize: 16 }}>
                700
              </Text>
              <Text style={{ fontFamily: "Rubik-Light", fontSize: 14 }}>
                {i18n.t("Patient")}
              </Text>
            </View>
          </View>
          <View style={styles.featureView}>
            <Text style={styles.featureText}>Services</Text>
          </View>
          <View style={{ marginTop: 10, width: "90%" }}>
            <Text
              style={{
                fontFamily: "Rubik-Medium",
                color: "#00CCCB",
                fontSize: 14,
              }}
            >
              1.
              <Text
                style={{
                  fontFamily: "Rubik-Light",
                  color: "#677294E5",
                  fontSize: 14,
                }}
              >
                {" "}
                {i18n.t("Patient care should be the number one priority")}
              </Text>
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              borderTopColor: "rgba(103, 114, 148, 0.1)",
              borderTopWidth: 1,
              borderBottomColor: "rgba(103, 114, 148, 0.1)",
              borderBottomWidth: 1,
              paddingVertical: 10,
              width: "90%",
            }}
          >
            <Text
              style={{
                fontFamily: "Rubik-Medium",
                color: "#00CCCB",
                fontSize: 14,
              }}
            >
              2.
              <Text
                style={{
                  fontFamily: "Rubik-Light",
                  color: "#677294E5",
                  fontSize: 14,
                }}
              >
                {" "}
                {i18n.t("If you run your practiceyou know how frustrating")}
              </Text>
            </Text>
          </View>
          <View style={{ marginTop: 10, width: "90%" }}>
            <Text
              style={{
                fontFamily: "Rubik-Medium",
                color: "#00CCCB",
                fontSize: 14,
              }}
            >
              3.
              <Text
                style={{
                  fontFamily: "Rubik-Light",
                  color: "#677294E5",
                  fontSize: 14,
                }}
              >
                {" "}
                {i18n.t("That’s why some of appointment reminder system")}
              </Text>
            </Text>
          </View>
          <View
            style={[styles.featureView, { marginTop: 20, marginBottom: 20 }]}
          >
            <Text style={styles.featureText}>About Doctor</Text>
          </View>
          <Text
            style={{
              fontFamily: "Rubik-Light",
              color: "#677294E5",
              width: "90%",
              fontSize: 14,
            }}
          >
            {i18n.t("Lorem ipsum")}
          </Text>
          <View
            style={[styles.featureView, { marginTop: 20, marginBottom: 20 }]}
          >
            <Text style={styles.featureText}>{i18n.t("Location")}</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 5,
              borderRadius: 10,
              width: "90%",
              height: 210,
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Map />
          </View>
        </ScrollView>
      </AppScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    backgroundColor: "#fff",
    height: 200,
    width: "98%",
    marginRight: 10,
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
  hlistContainer: {
    backgroundColor: "#fff",
    height: 130,
    width: 100,
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
    marginRight: 10,
  },
  heartView: {
    alignItems: "flex-end",
    width: "90%",
    marginTop: 5,
  },
  hheartView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 8,
  },
  listTitle: {
    fontFamily: "Rubik-Medium",
    marginVertical: 5,
  },
  listStatus: {
    fontSize: 12,
    fontFamily: "Rubik-Regular",
    color: "#00CCCB",
  },
  listDesignation: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: "Rubik-Light",
    color: "#677294",
  },
  featureView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  featureText: {
    fontSize: 18,
    fontFamily: "Rubik-Regular",
  },
  seeall: {
    fontFamily: "Rubik-Regular",
    fontSize: 12,
    color: "#677294",
    marginRight: 3,
    marginBottom: 2,
  },
  listAmount: {
    color: "rgba(0,0,0,0.4)",
    fontSize: 11,
    fontFamily: "Rubik-Regular",
  },
});

export default DoctorDetails;