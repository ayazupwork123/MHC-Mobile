// screen U2.2 Favourites Details screen
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import i18n from '../../utils/i18n';
import DoctorCard from '../../components/customer/DoctorCard';
import AppScreenKeyboardHide from '../../components/AppScreenKeyboardHide';
import Header from '../../components/Header';
import Map from '../../components/Map';
import { TAB_BAR_HEIGHT } from '../../config';

const imageDR1 = require("./../../assets/drlist.png") ;

function FavoriteDoctorsDetails() {
  const list = { id: 0, title: i18n.t('Dr Fillerup Grab'), status: i18n.t('Medicine Specialist'), image: imageDR1, isFavorite: true }
  
  const renderDoctors = () => {
    return <DoctorCard {...list} buttonText={i18n.t("BookNow")}/>;
  }
  const insets = useSafeAreaInsets();

  return (
    <AppScreenKeyboardHide> 
      <Header title={i18n.t("Doctor Details")} search style={styles.height40}/>
      <ScrollView style={styles.height100} contentContainerStyle={styles.alignCenter}>
        <View style={styles.header}>
          {renderDoctors()}
        </View>
        <View style={styles.container}>
          <View style={styles.bar}>
            <Text style={styles.barNum}>100</Text>
            <Text style={styles.barText}>{i18n.t("Runing")}</Text>
          </View>
          <View style={styles.bar}>
            <Text style={styles.barNum}>500</Text>
            <Text style={styles.barText}>{i18n.t("Ongoing")}</Text>
          </View>
          <View style={styles.bar}>
            <Text style={styles.barNum}>700</Text>
            <Text style={styles.barText}>{i18n.t("Patient")}</Text>
          </View>
        </View>
        <View style={styles.featureView}>
          <Text style={styles.featureText}>Services</Text>
        </View>
        <View style={styles.listOneThree}>
          <Text style={styles.list}>1.<Text style={styles.subList}> {i18n.t("Patient care should be the number one priority")}</Text></Text>
        </View>
        <View style={styles.listTwo}>
          <Text style={styles.list}>2.<Text style={styles.subList}> {i18n.t("If you run your practiceyou know how frustrating")}</Text></Text>
        </View>
        <View style={styles.listOneThree}>
          <Text style={styles.list}>3.<Text style={styles.subList}> {i18n.t("That’s why some of appointment reminder system")}</Text></Text>
        </View>
        <View style={[styles.featureView, { marginTop: 20, marginBottom: 20 }]}>
          <Text style={styles.featureText}>{i18n.t("About Doctor")}</Text>
        </View>
        <Text style={styles.details}>{i18n.t("Lorem ipsum")}</Text>
        <View style={[styles.featureView, { marginTop: 20, marginBottom: 20 }]}>
          <Text style={styles.featureText}>{i18n.t("Location")}</Text>
        </View>
        <View style={[styles.map, { marginBottom: insets.bottom + TAB_BAR_HEIGHT + 20 }]}>
          <Map />
        </View>
      </ScrollView>
    </AppScreenKeyboardHide>
  );
}

const styles = StyleSheet.create({
  height40: {
    height: 40
  },
  height100: {
    height: '100%'
  },
  alignCenter: {
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    width: '90%',
    height: 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  map: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    width: '90%',
    height: 210,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    marginBottom: 10, 
    marginTop: 20, 
    width: '90%'
  },
  bar: {
    backgroundColor: 'rgba(203, 203, 203, 0.12)',
    borderRadius: 10, width: '25%', height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  barNum: {
    fontFamily: "Rubik-Medium", 
    fontSize: 16 
  },
  barText: {
    fontFamily: "Rubik-Light", 
    fontSize: 14 
  },
  listOneThree: {
    marginTop: 10, 
    width: '90%'
  },
  listTwo: {
    marginTop: 10, 
    borderTopColor: 'rgba(103, 114, 148, 0.1)', 
    borderTopWidth: 1, 
    borderBottomColor: 'rgba(103, 114, 148, 0.1)', 
    borderBottomWidth: 1, 
    paddingVertical: 10, 
    width: '90%'
  },
  list: {
    fontFamily: "Rubik-Medium", 
    color: '#00CCCB', 
    fontSize: 14
  },
  subList: {
    fontFamily: "Rubik-Light", 
    color: '#677294E5', 
    fontSize: 14 
  },
  details: {
    fontFamily: "Rubik-Light", 
    color: '#677294E5', 
    width: '90%', 
    fontSize: 14
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
  }
});

export default FavoriteDoctorsDetails;