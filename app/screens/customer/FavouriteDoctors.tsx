// screen U2.1 Favourites screen
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import i18n from "../../utils/i18n";
import Right from "../../assets/svg/right";
import HeartFill from "../../assets/svg/heartfill";
import Heart from "../../assets/svg/heart";
import StarIcon from "../../assets/svg/star";
import DoctorCard from "../../components/customer/DoctorCard";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import { TAB_BAR_HEIGHT, COLORS } from '../../config';

const imageDR2 = require("./../../assets/imageDR.png") ;
const image1 = require("../../assets/image1.png") ;
const image2 = require("./../../assets/image2.png") ;
const image3 = require("./../../assets/image3.png") ;
const image4 = require("./../../assets/image4.png") ;

const list = [
  {
    id: 1,
    title: i18n.t("Dr Fillerup Grab"),
    status: i18n.t("Medicine Specialist"),
    image: imageDR2,
    isFavorite: true,
  },
  {
    id: 2,
    title: i18n.t("Dr Blessing"),
    status: i18n.t("Dentist Specialist"),
    image: imageDR2,
    isFavorite: true,
  },
  {
    id: 3,
    title: i18n.t("Dr Blessing"),
    status: i18n.t("Dentist Specialist"),
    image: imageDR2,
    isFavorite: true,
  },
  {
    id: 4,
    title: i18n.t("Dr Blessing"),
    status: i18n.t("Dentist Specialist"),
    image: imageDR2,
    isFavorite: true,
  },
  {
    id: 5,
    title: i18n.t("Dr Blessing"),
    status: i18n.t("Dentist Specialist"),
    image: imageDR2,
    isFavorite: true,
  },
];

const list1 = [
  {
    id: 1,
    title: i18n.t("Dr Crick"),
    status: i18n.t("2500/ hours"),
    rating: "3.7",
    image: image1,
    isFavorite: false,
  },
  {
    id: 2,
    title: i18n.t("Dr Strain"),
    status: i18n.t("2200/ hours"),
    rating: "3.0",
    image: image2,
    isFavorite: true,
  },
  {
    id: 3,
    title: i18n.t("Dr Lachinet"),
    status: i18n.t("2900/ hours"),
    rating: "2.9",
    image: image3,
    isFavorite: true,
  },
  {
    id: 4,
    title: i18n.t("Dr Shouey"),
    status: i18n.t("2500/ hours"),
    rating: "3.7",
    image: image4,
    isFavorite: false,
  },
];

function FavoriteDoctors() {
  const [doctors, setDoctors] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setDoctors(list);
  }, [list]);

  useEffect(() => {
    setSearchResults(list);
    return () => {
      setSearchText("");
    };
  }, []);

  const cancelSearch = () => {
    setSearchText("");
    setSearchResults(null);
  };

  const searchHandler = (text: string | null = null) => {
    const searchResultList = doctors.filter((item: any) => {
      return item.title.toLowerCase() === text?.toLowerCase();
    });
    setSearchResults(searchResultList);
  };

  const renderSearchList = ((item: any)  => {
    return (
      <DoctorCard
        {...item}
        key={item.id}
        buttonText={i18n.t("BookNow")}
        navigateTo="FavoriteDoctorDetails"
      />
    );
  })

  return (
    <AppScreenKeyboardHide isTransparent={false}>
      <View style={styles.container}>
        <Header title={i18n.t("FavouriteDoctors")} />
        <View style={styles.search}>
          <Searchbar
            leftIcon
            searchText={searchText}
            setSearchText={setSearchText}
            searchHandler={searchHandler}
            cancelSearch={cancelSearch}
            isAtSearchScreen={true}
          />
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.items}>
            {searchText === "" && doctors && doctors.length !== 0 && doctors.map((item: any)  => renderSearchList(item))}
          </View>
          {searchText !== "" && (
            <>
              {searchResults && searchResults.length !== 0 ? (
                <FlatList
                  data={searchResults}
                  keyExtractor={(item: any) => item.id.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderSearchList}
                />
              ) : (
                <Text style={styles.noResults}>No result found.</Text>
              )}
            </>
          )}
          <View style={styles.featureView}>
            <Text style={styles.featureText}>{i18n.t("Feature Doctor")}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.seeall}>{i18n.t("SeeAll")}</Text>
              <Right />
            </View>
          </View>
          <FlatList
            data={list1}
            horizontal
            style={{  marginBottom: insets.bottom + TAB_BAR_HEIGHT, marginTop: 20, width: "90%", flex: 1 }}
            keyExtractor={(item: any) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={(item: any) => (
              <View key={item.id} style={[styles.hlistContainer]}>
                <View style={styles.heartView}>
                  {item.item.isFavorite ? (
                    <HeartFill width={10} height={10} />
                  ) : (
                    <Heart width={10} height={10} />
                  )}
                  <View style={styles.listStar}>
                    <StarIcon />
                    <Text style={{ fontSize: 11 }}>{item.item.rating}</Text>
                  </View>
                </View>
                <Image source={item.item.image} style={styles.listImage} />
                <Text style={styles.listTitle}>{item.item.title}</Text>
                <Text style={[styles.listAmount]}>
                  <Text style={styles.listText}>
                    ${" "}
                  </Text>
                  {item.item.status}
                </Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </AppScreenKeyboardHide>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    flex: 1
  },
  search: {
    width: "90%",  
    marginBottom: 10
  },
  items: {
    marginBottom: 10, 
    width: "93%" 
  },
  scroll: {
    width: '100%' 
  },
  noResults: {
    marginTop: 25, 
    marginBottom: 25
  },
  listImage: {
    width: 80, 
    height: 50, 
    resizeMode: "contain" 
  },
  listText: {
    color: "#03CDCD", 
    fontFamily: "Rubik-Medium" 
  },
  listStar: {
    flexDirection: "row", 
    alignItems: "center" 
  },
  hlistContainer: {
    backgroundColor: COLORS.white,
    height: 130,
    width: 100,
    borderRadius: 6,
    shadowColor: COLORS.black,
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 8,
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
    color: COLORS.blue,
    marginRight: 3,
    marginBottom: 2,
  },
  listAmount: {
    color: "rgba(0,0,0,0.4)",
    fontSize: 11,
    fontFamily: "Rubik-Regular",
  },
  listTitle: {
    fontFamily: "Rubik-Medium",
    marginVertical: 5,
  },
});

export default FavoriteDoctors;
