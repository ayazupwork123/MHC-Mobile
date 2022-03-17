import React, { useState } from "react";
import { Linking, Platform, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import GradientButton from "./GradientButton";

import { SCREEN_WIDTH } from "../config";
import i18n from "../utils/i18n";

interface Props {
  latitude: number;
  longitude: number;
  name?: string;
}

const deltas = {
  /* latitude: 35.136957,
  longitude: 33.350905, */
  latitudeDelta: 0.015,
  longitudeDelta: 0.015,
};
const zoomLevel = 13;

const Map = ({ latitude, longitude, name }: Props) => {
  //const [location] = useState<Props>({latitude,longitude,address});
  /* const [destination] = useState({
    latitude: 31.341797,
    longitude: 71.696999,
    address: "Hyderabad",
  }); */

  const buttonPressHandler = () => {
    name = name || `loc:${latitude}+${longitude}`;
    const url: any = Platform.select({
      ios: `maps:${latitude},${longitude}?q=${name}`,
      android: `geo:${latitude},${longitude}?z=${zoomLevel}&q=${name}`,
    });
    Linking.canOpenURL(url).then((supported) => {
      console.log(supported);
      if (supported) {
        return Linking.openURL(url);
      } else {
        const browserUrl = `https://www.google.de/maps/@${latitude},${longitude}?q=${name}`;
        return Linking.openURL(browserUrl);
      }
    });
  };

  const mapStyle = [
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{ ...deltas, latitude, longitude }}
        region={{ ...deltas, latitude, longitude }}
        zoomEnabled={true}
        scrollEnabled={true}
        loadingEnabled>
        <Marker
          coordinate={{ latitude, longitude }}
          title={name}
          //image={require("../assets/start-marker.png")}
        />
        {/* <Polyline
          coordinates={[start, destination]}
          fillColor="rgba(255,0,0,0.5)"
          strokeWidth={2}
          lineDashPattern={[1]}
          strokeColor={COLORS.themeGradientColor}
        /> */}
        {/* <Marker
          coordinate={destination}
          title={destination.name}
          image={require("../assets/destination-marker.png")}
        /> */}
      </MapView>
      <GradientButton
        textStyle={{ paddingHorizontal: 20 }}
        text={i18n.t("OpenMap")}
        onPress={buttonPressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  map: {
    width: SCREEN_WIDTH * 0.9 - 20,
    height: 190,
  },
});

export default Map;
