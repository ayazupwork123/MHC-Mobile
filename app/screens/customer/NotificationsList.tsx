// screen U6.1 Notifications List
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import NotificationCard from "../../components/NotificationCard";
import AppScreen from "../../components/AppScreen";
import { SCREEN_WIDTH, FONT1REGULAR } from "../../config";
import i18n from '../../utils/i18n';

enum NotificationType {
	Profile,
	AppointmentRequest,
}
interface notificationCardProps {
	navigation: any;
}

interface NotifyData {
  id: number;
  text: string;
  icon: string;
  status: string
}

const NotificationsList = ({ navigation }: notificationCardProps) => {

  const [initialData, setInitialData] = useState<NotifyData[]>([
    { id: 1, text: "You added Dr. Umar in your favourite list", icon: "hearto", status: "read" },
    { id: 2, text: "You changed your profile information", icon: "user", status: "read" },
    { id: 3, text: "Joen sent an appointment", icon: "book", status: "read" },
    { id: 4, text: "You added Dr. Mario in your favourite list", icon: "hearto", status: "uread" },
    { id: 5, text: "You changed your profile information", icon: "user", status: "unread" },
    { id: 6, text: "Joen sent an appointment", icon: "book", status: "read" },
    { id: 7, text: "You added Dr. Mario in your favourite list", icon: "hearto", status: "read" },
    { id: 8, text: "You changed your profile information", icon: "user", status: "unread" },
    { id: 9, text: "Joen sent an appointment", icon: "book", status: "read" },
    { id: 10, text: "You changed your profile information", icon: "user", status: "unread" },
    { id: 11, text: "Joen sent an appointment", icon: "book", status: "read" },
    { id: 12, text: "You added Dr. Mario in your favourite list", icon: "hearto", status: "read" },
    { id: 13, text: "You changed your profile information", icon: "user", status: "read" },
    { id: 14, text: "Joen sent an appointment", icon: "book", status: "unread" },
  ]);

	const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<NotifyData[]>(initialData)
	const [notificationFilter, setNotificationFilter] = useState("all");

	const [items, setItems] = useState([
		{ label:  i18n.t("All"), value: "all" },
		{ label: i18n.t("Read"), value: "read" },
		{ label: i18n.t("Unread"), value: "unread" },
	]);

  const deleteItem = (item: any) => {
    var newData = JSON.parse(JSON.stringify(initialData));
    newData = [...newData].filter(notify => notify.id !== item.id)
    setData(newData)
    setInitialData(newData)
  }

  useEffect(() => {
    filterNotification(notificationFilter)
  },[initialData])

  const filterNotification = (value: any) => {
    var newData = value !== 'all' ? [...initialData].filter(notify => notify.status === value) : initialData
    setData(newData) 
  }

	return (
		<AppScreen>
			<View style={styles.mainView}>
        <View style={styles.contentView}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{i18n.t("Notifications")}</Text>
        </View>
        <View style={[styles.filterView, Platform.OS !== "android" ? { zIndex:1} : null]} >
          <View>
            <DropDownPicker
              open={open}
              value={notificationFilter}
              items={items}
              setOpen={setOpen}
              containerStyle={{height: 700}}
              setValue={setNotificationFilter}
              onChangeValue={filterNotification}
              setItems={setItems}
              style={styles.dropdownStyles}
              labelStyle={{ fontWeight: "bold" }}
              arrowIconStyle={{
                left: notificationFilter === "all" ? -35 : notificationFilter === "read" ? -20 : -10,
              }}
              dropDownContainerStyle={{
                position: "relative",
                top: 0,
                height: 130,
                backgroundColor: "#fff",
                borderColor: "#fff",
              }}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.markAllText}>{i18n.t("Mark all as Read")}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.notificationContainer}>
          {data.map((item, index) => (
            <View style={styles.notificationCard} key={item.id}>
              <NotificationCard text={item.text} icon={item.icon} type={NotificationType.Profile} onDeletePress={() => deleteItem(item)} />
            </View>
          ))}
        </ScrollView>
      </View>
		</AppScreen>
	);
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginBottom: 5,
    width: SCREEN_WIDTH,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentView: {
    width: "90%",
    flexDirection: 'row',
    textAlignVertical: 'center'
  },
  filterView: {
    width: '90%',
		flexDirection: "row",
    flex: 1,
    zIndex: 1,
    marginTop: 20,
		justifyContent: "space-between",
	},
	container: {
		width: "100%",
		height: "100%",
		paddingTop: "16%",
		paddingLeft: 20,
	},
	header: {
    width: '90%',
    backgroundColor: 'red',
		flexDirection: "row",
    justifyContent: 'center',
		bottom: 20,
	},
	backIcon: {
		width: 30,
		height: 30,
		backgroundColor: "#fff",
		borderRadius: 10,
		paddingLeft: 3,
		paddingTop: 2,
		marginRight: 15
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
    textAlignVertical: 'center'
	},
	dropdownStyles: {
		width: 100,
		backgroundColor: "transparent",
		height: 20,
		left: -7,
		borderColor: "transparent",
	},
	markAllText: {
    fontFamily: FONT1REGULAR,
		fontSize: 14,
		color: "#677294",
	},
	notificationContainer: {
    width: "90%",
    height: '100%',
		marginTop: 20
	},
	notificationCard: {
		marginTop: 15,
	},
});

export default NotificationsList;