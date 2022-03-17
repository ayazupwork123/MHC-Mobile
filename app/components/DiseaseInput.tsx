import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CloseIcon from "../assets/svg/CloseIcon";
import SearchIcon from "../assets/svg/SearchIcon";
import { COLORS, FONT1LIGHT, SCREEN_WIDTH } from "../config";
import i18n from "../utils/i18n";

interface Props {}

type Disease = {
  id: number | string | null;
  code: string;
  label: string;
  value: string;
};

type Icd = {
  Id: number;
  Classification: string;
  GreekName: string;
  LatinName: string;
};

const listItems = [
  {
    id: 1,
    label: "Diabetes mellitus",
    code: "E-11",
    value: "Diabetes mellitus",
  },
  {
    id: 2,
    label: "Diabetes mellitus",
    code: "E-11",
    value: "Diabetes mellitus",
  },
  {
    id: 3,
    label: "F",
    code: "F-11",
    value: "F",
  },
  {
    id: 4,
    label: "G",
    code: "G-11",
    value: "G",
  },
  {
    id: 5,
    label: "H",
    code: "H-11",
    value: "H",
  },
  {
    id: 6,
    label: "H",
    code: "H-11",
    value: "H",
  },
  {
    id: 7,
    label: "H",
    code: "H-11",
    value: "H",
  },
  {
    id: 8,
    label: "H",
    code: "H-11",
    value: "H",
  },
];

type State = {
  searchText: string;
  showAddButton: boolean;
  showDescription: boolean;
  searchResults: Disease[];
  //selectedDisease: Disease;
  selectedDisease: Icd;
};

function DiseaseInput(props: Props) {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [diseaseReccords, setDiseaseReccords] = useState<State[]>([]);
  let data: State = {
    searchText: "",
    showAddButton: false,
    showDescription: false,
    searchResults: [],
    selectedDisease: {
      /* id: null,
      label: "",
      code: "",
      value: "", */
      Id: 0,
      Classification: "",
      GreekName: "",
      LatinName: "",
    },
  };

  useEffect(() => {
    setDiseases(listItems);
  }, [listItems]);

  useEffect(() => {
    const tempDataForDiseaseReccords = [...diseaseReccords];
    tempDataForDiseaseReccords[0] = { ...data };
    setDiseaseReccords(tempDataForDiseaseReccords);
  }, []);

  const clearSearch = (index: number) => {
    const tempDataForDiseaseReccords = [...diseaseReccords];
    if (
      diseaseReccords.length !== index &&
      index !== 0 &&
      !diseaseReccords[diseaseReccords.length - 1].showAddButton
    ) {
      tempDataForDiseaseReccords.splice(index, 1);
    } else {
      tempDataForDiseaseReccords[index].showAddButton = false;
      tempDataForDiseaseReccords[index].searchText = "";
      tempDataForDiseaseReccords[index].showDescription = false;
      tempDataForDiseaseReccords[index].searchResults = [];
      tempDataForDiseaseReccords[index].selectedDisease.GreekName = "";
      tempDataForDiseaseReccords[index].selectedDisease.GreekName = "";
      tempDataForDiseaseReccords[index].selectedDisease.Classification = "";
    }
    setDiseaseReccords(tempDataForDiseaseReccords);
  };

  const picker = (item: Disease, index: number) => {
    const tempDataForDiseaseReccords = [...diseaseReccords];
    tempDataForDiseaseReccords[index].searchText = item.label;
    tempDataForDiseaseReccords[index].selectedDisease.GreekName = item.label;
    tempDataForDiseaseReccords[index].selectedDisease.GreekName = item.value;
    tempDataForDiseaseReccords[index].selectedDisease.Classification =
      item.code;
    tempDataForDiseaseReccords[index].showAddButton = true;
    tempDataForDiseaseReccords[index].showDescription = true;
    tempDataForDiseaseReccords[index].searchResults = [];
    setDiseaseReccords(tempDataForDiseaseReccords);
  };

  const addPressHandler = (index: number) => {
    const tempDataForDiseaseReccords = [...diseaseReccords];
    tempDataForDiseaseReccords[index].showAddButton = false;
    tempDataForDiseaseReccords[index].showDescription = false;
    if (diseaseReccords.length === index + 1) {
      tempDataForDiseaseReccords.push(data);
    }
    setDiseaseReccords(tempDataForDiseaseReccords);
  };

  const onchangeHandler = (text: string, index: number) => {
    const tempDataForDiseaseReccords = [...diseaseReccords];
    tempDataForDiseaseReccords[index].searchText = text;
    tempDataForDiseaseReccords[index].showAddButton = false;
    tempDataForDiseaseReccords[index].showDescription = false;
    if (text === "") {
      tempDataForDiseaseReccords[index].searchResults = [];
    } else {
      tempDataForDiseaseReccords[index].searchResults = diseases.filter(
        (item: any) => {
          return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
        }
      );
    }
    setDiseaseReccords(tempDataForDiseaseReccords);
  };

  const codePressHandler = (index: number) => {
    const tempDataForDiseaseReccords = [...diseaseReccords];
    tempDataForDiseaseReccords[index].showDescription =
      !tempDataForDiseaseReccords[index].showDescription;
    setDiseaseReccords(tempDataForDiseaseReccords);
  };

  return (
    <>
      {diseaseReccords &&
        diseaseReccords.length !== 0 &&
        diseaseReccords.map((currentRecord, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}>
              <View
                style={[
                  styles.searchView,
                  {
                    width: currentRecord.showAddButton
                      ? SCREEN_WIDTH * 0.9 - 55
                      : "100%",
                  },
                ]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => codePressHandler(index)}
                    activeOpacity={
                      currentRecord.selectedDisease.Classification ? 0.2 : 1
                    }>
                    <Text
                      style={{
                        marginRight: 10,
                        color: COLORS.blue,
                        fontFamily: FONT1LIGHT,
                        fontSize: 16,
                        width: 40,
                      }}>
                      {currentRecord.selectedDisease.Classification
                        ? currentRecord.selectedDisease.Classification
                        : i18n.t("Code")}
                    </Text>
                  </TouchableOpacity>
                  <TextInput
                    value={currentRecord.searchText}
                    onChangeText={(text: string) =>
                      onchangeHandler(text, index)
                    }
                    placeholder={i18n.t("ChronicDiseases")}
                    placeholderTextColor={COLORS.blue}
                    style={styles.input}
                  />
                </View>
                {currentRecord.searchText === "" ? (
                  <SearchIcon />
                ) : (
                  <TouchableOpacity onPress={() => clearSearch(index)}>
                    <CloseIcon />
                  </TouchableOpacity>
                )}
              </View>
              {currentRecord.showAddButton && (
                <TouchableOpacity
                  onPress={() => addPressHandler(index)}
                  style={{
                    backgroundColor: COLORS.themeGradientColor,
                    width: 49,
                    height: 54,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 12,
                  }}>
                  <Image
                    source={require("./../assets/add.png")}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              )}
            </View>

            {currentRecord.searchResults.length !== 0 && (
              <View
                style={{
                  marginTop: 1,
                  backgroundColor: "white", //COLORS.dropdownModalBackground,
                  borderColor: "rgba(103, 114, 148, 0.16)",
                  borderWidth: 0.5,
                  borderRadius: 12,
                  paddingBottom: 8,
                  paddingHorizontal: 8,
                }}>
                {currentRecord.searchResults.map((item, ind) => (
                  <TouchableOpacity
                    key={ind}
                    onPress={() => picker(item, index)}
                    style={[
                      {
                        flexDirection: "row",
                        marginTop: 8,
                        borderRadius: 6,
                        height: 23,
                      },
                      ind === 0 && {
                        //--------------- MONO INDEX 0 EXEI ALLO XRWMA. GENIKA DEN EXEI NOHMA NA EXEI ALLO XRWMA AFOU KLEINEI OTAN TO PATHSEIS!!!
                        backgroundColor: "#C7EFEF", //COLORS.dropdownSelectedBackground,
                      },
                    ]}>
                    <Text
                      style={{
                        color: COLORS.blue,
                        fontFamily: FONT1LIGHT,
                        fontSize: 13,
                        paddingLeft: 12,
                        width: SCREEN_WIDTH * 0.13,
                        marginTop: 4,
                        textAlign: "right",
                      }}>
                      {item.code}
                    </Text>
                    <View
                      style={{
                        width: 1,
                        marginVertical: 4,
                        marginHorizontal: 10,
                        backgroundColor: "rgba(103, 114, 148, 0.35)",
                      }}
                    />
                    <Text
                      style={{
                        color: COLORS.blue,
                        fontFamily: FONT1LIGHT,
                        fontSize: 13,
                        paddingRight: 12,
                        width: SCREEN_WIDTH - 150,
                        marginTop: 4,
                      }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {currentRecord.showDescription && (
              <View
                style={{
                  marginTop: 1,
                  width: currentRecord.showAddButton
                    ? SCREEN_WIDTH * 0.9 - 55
                    : SCREEN_WIDTH * 0.9,
                  backgroundColor: "white", //COLORS.dropdownModalBackground,
                  borderColor: "rgba(103, 114, 148, 0.16)",
                  borderWidth: 0.5,
                  borderRadius: 12,
                  padding: 12,
                }}>
                <Text>
                  Description text of Diabetes melitius. This text will also
                  come from a backend.random text random text random text random
                  text random text random text random text random text random
                  text random text random text random text random text random
                  text random text random text random text random text.
                </Text>
              </View>
            )}
          </View>
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 54,
    borderRadius: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "rgba(103, 114, 148, 0.16)",
    backgroundColor: COLORS.white,
  },
  input: {
    color: COLORS.blue,
    fontFamily: FONT1LIGHT,
    fontSize: 16,
    paddingLeft: 10,
    borderLeftWidth: 0.7,
    borderLeftColor: "rgba(103, 114, 148, 0.35)",
    height: 25,
    width: SCREEN_WIDTH - 190,
  },
});

export default DiseaseInput;
