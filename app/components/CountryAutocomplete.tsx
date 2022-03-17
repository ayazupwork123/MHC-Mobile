import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, TextInput } from "react-native";
import i18n from "../utils/i18n";

const CountryAutocomplete = () => {
  const countries = [
    { label: i18n.t("Cyprus") },
    { label: i18n.t("Greece") },
    { label: i18n.t("Denmark") },
  ];

  const [country, setCountry] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(countries);
  const [showList, setShowList] = useState(false);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = countries.filter(function (item) {
        const itemData = item.label
          ? item.label.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);
    } else setFilteredDataSource(countries);
    setCountry(text);
  };

  const chooseCountry = (countryName: string) => {
    setCountry(countryName);
    setShowList(false);
  };

  const ItemView = ({ item }: { item: any }) => {
    return (
      <Text
        style={styles.itemStyle}
        onPress={() => {
          console.log(item.label);
          chooseCountry(item.label);
        }}>
        {item.label}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={country}
        underlineColorAndroid="transparent"
        placeholder={i18n.t("Country")}
        onFocus={() => setShowList(true)}
      />

      {showList && (
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});

export default CountryAutocomplete;
