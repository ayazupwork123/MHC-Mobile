// screen U1.1 User's Main App Screen
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  RefreshControl
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Right from '../../assets/svg/right';
import { Rating } from 'react-native-ratings';
import i18n from '../../utils/i18n'
import { LinearGradient } from 'expo-linear-gradient';
import HeartFill from '../../assets/svg/heartfill';
import StarIcon from '../../assets/svg/star';
import Heart from '../../assets/svg/heart';
import AppScreenKeyboardHide from '../../components/AppScreenKeyboardHide';
import Header from '../../components/Header';
import Searchbar from '../../components/Searchbar';
import { COLORS, TAB_BAR_HEIGHT } from '../../config';

const imageDR1 = require('../../assets/imageDR.png');
const imageDR2 = require('../../assets/imageDR.png');
const image1 = require('../../assets/image1.png');
const image2 = require('../../assets/image2.png');
const image3 = require('../../assets/image3.png');
const image4 = require('../../assets/image4.png');
const imageBG1 = require('../../assets/imageBG1.png');
const imageBG2 = require('../../assets/imageBG2.png');
const imageBG3 = require('../../assets/imageBG3.png');
const imageBG4 = require('../../assets/imageBG4.png');

const list = [
  { id: 0, title: i18n.t('Dr Fillerup Grab'), status: i18n.t('Medicine Specialist'), image: imageDR1, isFavorite: false },
  { id: 1, title: i18n.t('Dr Blessing'), status: i18n.t('Dentist Specialist'), image: imageDR2, isFavorite: false },
  { id: 2, title: i18n.t('Dr Blessing'), status: i18n.t('Dentist Specialist'), image: imageDR2, isFavorite: true },
  { id: 3, title: i18n.t('Dr Blessing'), status: i18n.t('Dentist Specialist'), image: imageDR2, isFavorite: false },
  { id: 4, title: i18n.t('Dr Blessing'), status: i18n.t('Dentist Specialist'), image: imageDR2, isFavorite: false },
];

const types = [
  { id: 0, title: i18n.t('Dental'), image: imageBG1 },
  { id: 1, title: i18n.t('Skin Specialist'), image: imageBG4 },
  { id: 2, title: i18n.t('Cardiologist'), image: imageBG2 },
  { id: 3, title: i18n.t('Eye Specialist'), image: imageBG3 },
  { id: 4, title: i18n.t('Cardiologist'), image: imageBG2 },
  { id: 5, title: i18n.t('Eye Specialist'), image: imageBG3 },
  { id: 6, title: i18n.t('Skin Specialist'), image: imageBG4 },
];

const list1 = [
  { id: 0, title: i18n.t('Dr Crick'), status: i18n.t('2500/ hours'), rating: "3.7", image: image1, isFavorite: false },
  { id: 1, title: i18n.t('Dr Strain'), status: i18n.t('2200/ hours'), rating: "3.0", image: image2, isFavorite: true },
  { id: 2, title: i18n.t('Dr Lachinet'), status: i18n.t('2900/ hours'), rating: "2.9", image: image3, isFavorite: true },
  { id: 3, title: i18n.t('Dr Shouey'), status: i18n.t('2500/ hours'), rating: "3.7", image: image4, isFavorite: false },
];

interface OwnProps {
  navigation: any;
}

function SearchDoctors({ navigation }: OwnProps) {
  const [doctors, setDoctors] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>('Dr Blessing');
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setDoctors(list);
  }, [list]);

  const searchHandler = () => {
    const searchResultList = doctors.filter((item: any) => {
      return item.title.toLowerCase() === searchText.toLowerCase();
    });
    const data = {
      searchText,
      searchResultList,
      doctors
    }
    navigation.navigate("DoctorList", data);
  }

  const cancelSearch = () => {
    setSearchText('');
  }

  return (
    <AppScreenKeyboardHide 
      isTransparent={false}
      backgroundColor={COLORS.themeGradientColor}
      linearColor={[COLORS.primaryBlue, COLORS.themeGradientColor]}
      barStyle="light-content"
    >
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={styles.imageContainerIOS}>
          <LinearGradient
            colors={[COLORS.primaryBlue, COLORS.themeGradientColor]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.linear}
          >
            <View style={styles.title}>
              <Header drawer title={i18n.t("Hi Handwerker! ")} mainHeading={i18n.t("Find Your Doctor")} />
            </View>
          </LinearGradient>
        </View>
        
        <View style={styles.searchContainer}>
          <Searchbar leftIcon searchText={searchText} setSearchText={setSearchText} searchHandler={searchHandler} cancelSearch={cancelSearch} />
        </View>
      
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollItem}>
            {
              types.map((item: any) => (
                <View key={item.id} style={{ alignItems: 'center' }}>
                  <Image style={styles.typesImage} source={item.image} />
                  <Text style={styles.typesText}>{item.title}</Text>
                </View>
              ))
            }
          </ScrollView>

          <View style={styles.featureView}>
            <Text style={styles.featureText}>{i18n.t("Popular Doctor")}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.seeall}>{i18n.t("See all")}</Text>
              <Right />
            </View>
          </View>
          <FlatList
            data={doctors}
            horizontal
            style={styles.doctorsList}
            keyExtractor={(item: any) => item.id.toString()}
            refreshControl={
              <RefreshControl
                colors={["#9Bd35A", "#689F38"]}
                refreshing={!doctors}
              />
            }
            showsHorizontalScrollIndicator={false}
            renderItem={(item: any) => (
              <View key={item.id} style={[styles.listContainer]}>
                <Image source={item.item.image} style={{ width: '100%', resizeMode: 'contain' }} />
                <Text style={styles.listTitle}>{item.item.title}</Text>
                <Text style={[styles.listStatus]}>{item.item.status}</Text>
                <Rating
                  imageSize={15}
                  fractions={1}
                  startingValue={0}
                  style={styles.rating}
                />
              </View>
            )}
          />
          <View style={styles.featureView}>
            <Text style={styles.featureText}>{i18n.t("Feature Doctor")}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.seeall}>{i18n.t("See all")}</Text>
              <Right />
            </View>
          </View>
          <FlatList
            data={list1}
            horizontal
            style={{ marginBottom: insets.bottom + TAB_BAR_HEIGHT + 20, marginTop: 20, marginLeft: 15 }}
            keyExtractor={(item: any) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={(item: any) => (
              <View key={item.id} style={[styles.hlistContainer]}>
                <View style={styles.heartView}>
                  {item.item.isFavorite ? <HeartFill width={10} height={10} /> : <Heart width={10} height={10} />}
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <StarIcon />
                    <Text style={{ fontSize: 11 }}>{item.item.rating}</Text>
                  </View>
                </View>
                <Image source={item.item.image} style={styles.listImage} />
                <Text style={styles.listTitle}>{item.item.title}</Text>
                <Text style={[styles.listAmount]}><Text style={styles.listAmount}>$ </Text>{item.item.status}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </AppScreenKeyboardHide>
  );
}

export default SearchDoctors;

const styles = StyleSheet.create({
  linear: {
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    alignSelf: 'center'
  },
  title: {
    width: '100%', 
    height: 140 
  },
  searchContainer: {
    marginTop: -30, 
    width: '90%', 
    zIndex: 20
  },
  scroll: {
    width: '100%', 
    marginTop: -32, 
    paddingTop: 30 
  },
  scrollContainer: {
    alignItems: 'center', 
    zIndex: 10
  },
  scrollItem: {
    marginVertical: 20, 
    marginLeft: 15
  },
  typesImage: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain'
  },
  typesText: {
    fontSize: 13, 
    marginTop: 5
  },
  doctorsList: {
    marginBottom: 10, 
    marginTop: 20,
    marginLeft: 15 
  },
  rating: {
    paddingBottom: 10, 
    width: '100%'
  },
  listImage: {
    width: 80, 
    height: 50, 
    resizeMode: 'contain' 
  },
  imageContainerIOS: {
    zIndex: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: "100%",
    overflow: 'hidden'
  },
  listContainer: {
    backgroundColor: COLORS.white, height: 250, width: 170, marginRight: 10, borderRadius: 6,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 2
  },
  hlistContainer: {
    backgroundColor: COLORS.white, height: 130, width: 100, borderRadius: 6,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 2,
    marginRight: 10
  },
  heartView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 8
  },
  listTitle: {
    fontFamily: "Rubik-Medium",
    marginVertical: 5
  },
  listStatus: {
    fontSize: 12,
    fontFamily: "Rubik-Regular",
    color: '#677294CC'
  },
  featureView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },
  featureText: {
    fontSize: 18,
    fontFamily: "Rubik-Regular"
  },
  seeall: {
    fontFamily: "Rubik-Regular",
    fontSize: 12,
    color: COLORS.blue,
    marginRight: 3,
    marginBottom: 2
  },
  listAmount: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 11,
    fontFamily: 'Rubik-Medium'
  },
});
