// screen M6 Appointment Requests List
import React, { Component } from "react"
import {  View, Text, StyleSheet, SectionList } from "react-native";
import moment from "moment-timezone";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide"
import Header from "../../components/Header"
import AppointmentRequestCard from "../../components/doctor/AppointmentRequestCard";
import i18n from "../../utils/i18n";

const ItemView = ({ item }: { item: any }) => (
  <AppointmentRequestCard 
    name={item.name}
    reason={item.reasson}
    date={item.date}
    time={item.time}
    imageUri={item.imageUri}
    requestId={item.requestId}
  />
);

class AppoitmentRequestList extends Component {

  state = {
    items: [
      { requestId: 1, name: "Handwerker", reason: 'test card', date: '22/1/2022', time: "10:15", imageUri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" },
      { requestId: 2, name: "Test User", reason: 'test card', date: '22/1/2022', time: "10:30", imageUri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" },
      { requestId: 3, name: "Test User2", reason: 'test card', date: '24/1/2022', time: "14:00", imageUri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" },
      { requestId: 4, name: "Test User3", reason: 'test card', date: '2/2/2022', time: "13:00", imageUri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" },
      { requestId: 5, name: "Test User4", reason: 'test card', date: '23/1/2022', time: "11:40", imageUri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" },
      { requestId: 6, name: "Test User5", reason: 'test card', date: '23/1/2022', time: "09:30", imageUri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" }
    ]
  }

  headerView = (title: string) => {
    return (
      <View>
        <Text style={styles.title}>{i18n.t("doctor.AppointmentRequestList.todayRequests")}</Text>
      </View>
    );
  };

  getRecords = (items: any) => {
    const todayItems = items.filter(rec => moment(`${rec.date} ${rec.time}`, "DD/MM/YYYY HH:mm").isSame(moment(),  "day")).sort((a,b) => (moment(`${a.date} ${a.time}`, "DD/MM/YYYY HH:mm") > moment(`${b.date} ${b.time}`, "DD/MM/YYYY HH:mm")) ? 1 : -1)
    const afterItems = items.filter(rec => moment(`${rec.date} ${rec.time}`, "DD/MM/YYYY HH:mm").isAfter(moment(),  "day")).sort((a,b) => (moment(`${a.date} ${a.time}`, "DD/MM/YYYY HH:mm") > moment(`${b.date} ${b.time}`, "DD/MM/YYYY HH:mm")) ? 1 : -1)
    return [
      {
        title: i18n.t("doctor.AppointmentRequestList.todayRequests"),
        data: todayItems
      },
      {
        title: i18n.t("doctor.AppointmentRequestList.futureRequests"),
        data: afterItems
      }
    ]
  }

  render() {

    const { items } = this.state

    return (
      <AppScreenKeyboardHide>
        <Header style={{height: 'auto'}} title={i18n.t("doctor.AppointmentRequestList.title")} />
        <View style={styles.container}>
          <SectionList 
            sections={this.getRecords(items) || []}
            keyExtractor={(item) => item.requestId.toString()}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.title}>{title}</Text>
            )}
            renderItem={ItemView}
          />
        </View>
      </AppScreenKeyboardHide>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  title: {
    fontFamily: "Rubik-Bold",
    paddingTop: 20,
    paddingHorizontal: 5,
    fontSize: 16
  }
})

export default AppoitmentRequestList