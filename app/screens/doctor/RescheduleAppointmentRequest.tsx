// M6.1 Reschedule Appointment Request
import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AppScreenKeyboardHide from '../../components/AppScreenKeyboardHide'
import Header from '../../components/Header'
import AppointmentRequestCard from '../../components/doctor/AppointmentRequestCard';
import TimeButtonRound from '../../components/customer/TimeButtonRound';
import i18n from "../../utils/i18n";
import { FONT1MEDIUM } from '../../config';
import GradientButton from '../../components/GradientButton';
import DatePicker from '../../components/DatePicker';

class RescheduleAppointmentRequest extends Component {

  item = {
    requestId: 1, 
    name: "Handwerker", 
    reason: 'test card', 
    date: '2022-01-22', 
    time: "10:15", 
    imageUri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" 
  }

  state = {
    selectedTime: 2,
    newTime: null,
    date: this.item.date,
    enabled: true
  }

  availableTime: string[] = [
    "09:00 AM",
    "10:15 AM",
    "12:00 AM",
    "02:00 PM",
    "02:30 PM",
    "03:15 PM",
    "04:00 PM",
    "05:45 PM",
  ];

  setNewTime = (index: number) => {
    if (this.state.newTime === index) this.setState({newTime: null});
    else this.setState({newTime: index});
  };

  setDate = (value: string) => this.setState({date: value})

  saveChanges = () => console.log({ newTime: this.state.newTime !== null ? this.availableTime[this.state.newTime] : null, newDate: this.state.date })

  render(): React.ReactNode {

    const { selectedTime, newTime, enabled } = this.state

    return (
      <AppScreenKeyboardHide>
        <Header style={{height: 'auto'}} title={i18n.t("doctor.RescheduleAppointmentRequest.title")} />
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.container} scrollEnabled={enabled}>
          <AppointmentRequestCard 
            resschedule
            name={this.item.name}
            reason={this.item.reason}
            date={this.item.date}
            time={this.item.time}
            imageUri={this.item.imageUri}
            requestId={this.item.requestId}
          />
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <View>
              <Text style={styles.dividerText}>{i18n.t("common.or")}</Text>
            </View>
            <View style={styles.dividerLine} />
          </View>
          <View>
            <Text style={styles.subtitle}>{i18n.t("doctor.RescheduleAppointmentRequest.setDate")}</Text>
          </View>
          <ScrollView 
            horizontal 
            onTouchEndCapture={(e) => { this.setState({ enabled:true })}} 	
            onTouchStart={(e) => {  this.setState({enabled:false })}}
            onTouchEnd={(e) => { this.setState({ enabled:true })}} 
            style={{flexGrow: 1}}
          >
            <DatePicker value={this.state.date} setValue={this.setDate} />
          </ScrollView>
          <View>
            <Text style={styles.subtitle}>{i18n.t("doctor.RescheduleAppointmentRequest.setTime")}</Text>
          </View>
          <ScrollView
            style={styles.scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {this.availableTime.map((item: string, index: number) => (
              <TimeButtonRound
                key={index}
                text={item}
                {...(index === selectedTime) && {
                  buttonColor: "#24C9E2",
                  textStyle: { color: "white", fontFamily: FONT1MEDIUM }
                }}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
          <View>
            <Text style={styles.subtitle}>{i18n.t("common.to")}</Text>
          </View>
          <ScrollView
            style={styles.scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {this.availableTime.map((item: string, index: number) => (
              <TimeButtonRound
                key={index}
                text={item}
                {...(index === newTime) && {
                  buttonColor: "#24C9E2",
                  textStyle: { color: "white", fontFamily: FONT1MEDIUM }
                }}
                onPress={() => this.setNewTime(index, item)}
              />
            ))}
          </ScrollView>
        </ScrollView>
        <GradientButton text={i18n.t("common.Confirm")} onPress={this.saveChanges} />
        <GradientButton
          height={54}
          transparent
          fontSize={18}
          marginTopHide
          width={"100%"}
          borderRadius={10}
          text={i18n.t("Back")}
          onPress={() => this.props.navigation.goBack()}
        />
      </AppScreenKeyboardHide>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  divider: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 30 ,
    marginBottom: 10
  },
  dividerLine: {
    flex: 1, 
    height: 1, 
    backgroundColor: '#677294'
  },
  dividerText: {
    width: 50, 
    textAlign: 'center',
    color: "#677294"
  },
  subtitle: {
    fontFamily: "Rubik-Bold",
    fontSize: 16,
    paddingVertical: 10
  },
  scrollView: {
    paddingVertical: 20
  }
})

export default  RescheduleAppointmentRequest;

