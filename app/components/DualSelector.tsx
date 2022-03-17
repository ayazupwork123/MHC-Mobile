import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  SectionList,
} from "react-native";
import { COLORS, FONT1REGULAR } from "../config";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment-timezone";
import AppointmentCardForProfessional from "./doctor/AppointmentCardForProfessional";
import DoctorCard from "./customer/DoctorCard";
import i18n from "../utils/i18n";
import DoctorScheduler from "./doctor/DoctorScheduler";
import CustomerCard from "./doctor/CustomerCard";
import { useNavigation } from "@react-navigation/native";

interface Props {
  leftLabel: string;
  rightLabel: string;
  isExamination: boolean;
}

interface IUser {
  requestId: number;
  name: string;
  location: string;
  date: string;
  time: string;
  status: "pending" | "completed";
  reason: string;
  image: string;
  gender?: string;
}

interface User {
  loading: boolean;
  users: IUser[];
}

function DualSelector({ leftLabel, rightLabel }: Props) {
  const [selected, setSelected] = useState<number>(1);
  const [appointmentsList, setAppointmentsList] = useState<User>({
    loading: false,
    users: [],
  });
  const [examinationList, setExaminationList] = useState<User>({
    loading: false,
    users: [],
  });
  const button1 = selected === 1;
  const button2 = selected === 2;

  const ItemView = ({ item }: { item: any }) => {
    return (
      <>
        {button1 ? (
          <AppointmentCardForProfessional
            name={item.name}
            location={item.location}
            date={item.date}
            time={item.time}
            reason={item.reason}
            image={item.image}
          />
        ) : (
          <CustomerCard image={item.image} name={item.name} gender={item.gender} location={item.location} buttonText={"Examination"} navigateTo={'AddCard'} />
        )}
      </>
    );
  };

  const dummyData = (type: number) => {
    if (type === 1) {
      setAppointmentsList({ loading: true, users: [] });
      setTimeout(() => {
        setAppointmentsList({
          loading: false,
          users: [
            {
              requestId: 1,
              name: "Eduard Popescu",
              location: "Bucharest",
              reason: "tooth",
              date: "24/1/2022",
              time: "18:20",
              status: "pending",
              image:
                "https://i2.wp.com/captureit.photography/wp-content/uploads/2021/01/Ashley-1-2.jpg?resize=500%2C400&ssl=1",
            },
            {
              requestId: 2,
              name: "Rocker Mihaescu",
              location: "Bucharest",
              reason: "tooth",
              date: "25/1/2022",
              time: "17:30",
              status: "pending",
              image:
                "https://i2.wp.com/captureit.photography/wp-content/uploads/2021/01/Ashley-1-2.jpg?resize=500%2C400&ssl=1",
            },
            {
              requestId: 3,
              name: "Andreea Ghenea",
              location: "London",
              reason: "ear",
              date: "23/1/2022",
              time: "20:00",
              status: "completed",
              image:
                "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg",
              
            },
            {
              requestId: 4,
              name: "Georgiana Ciulea",
              location: "Ontario",
              reason: "diabet",
              date: "24/1/2022",
              time: "10:00",
              status: "completed",
              image:
                "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg",
            },
          ],
        });
      }, 1000);
    } else {
      setExaminationList({ loading: true, users: [] });
      setTimeout(() => {
        setExaminationList({
          loading: false,
          users: [
            {
              requestId: 5,
              name: "Mirela Delf",
              gender: 'Male',
              location: "Paris",
              reason: "leg",
              date: "25/1/2022",
              time: "16:20",
              status: "pending",
              image:
                "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497__480.jpg",
            },
            {
              requestId: 6,
              name: "Filip Sterlea",
              gender: 'Male',
              location: "Dubai",
              reason: "eye",
              date: "25/1/2022",
              time: "15:40",
              status: "pending",
              image:
                "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
            },
            {
              requestId: 7,
              name: "James Olaru",
              gender: 'Male',
              location: "New York",
              reason: "brain",
              date: "26/1/2022",
              time: "10:20",
              status: "pending",
              image:
                "https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg",
            },
            {
              requestId: 8,
              name: "Gheorge Moraru",
              gender: 'Female',
              location: "New York",
              reason: "brain",
              date: "23/1/2022",
              time: "12:20",
              status: "completed",
              image:
                "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497__480.jpg",
              
            },
          ],
        });
      }, 1000);
    }
  };

  const refresh = () => dummyData(1);
  const refresh2 = () => dummyData(2);

  useEffect(() => dummyData(selected), [selected]);

  const getRecords = (items: IUser[]) => {
    const yesterdayItems = items
      .filter(
        (rec) =>
          rec.status === "pending" &&
          moment(`${rec.date} ${rec.time}`, "DD/MM/YYYY HH:mm").isSame(
            moment().subtract(1, "days").startOf("day"),
            "day"
          )
      )
      .sort((a, b) =>
        moment(`${a.date} ${a.time}`, "DD/MM/YYYY HH:mm") >
        moment(`${b.date} ${b.time}`, "DD/MM/YYYY HH:mm")
          ? 1
          : -1
      );
    const todayItems = items
      .filter(
        (rec) =>
          rec.status === "pending" &&
          moment(`${rec.date} ${rec.time}`, "DD/MM/YYYY HH:mm").isSame(
            moment(),
            "day"
          )
      )
      .sort((a, b) =>
        moment(`${a.date} ${a.time}`, "DD/MM/YYYY HH:mm") >
        moment(`${b.date} ${b.time}`, "DD/MM/YYYY HH:mm")
          ? 1
          : -1
      );
    const afterItems = items
      .filter((rec) => rec.status === "completed")
      .sort((a, b) =>
        moment(`${a.date} ${a.time}`, "DD/MM/YYYY HH:mm") >
        moment(`${b.date} ${b.time}`, "DD/MM/YYYY HH:mm")
          ? 1
          : -1
      );
    return [
      {
        title: i18n.t("components.DualSelector.yesterdayAppoitments"),
        data: yesterdayItems,
      },
      {
        title: i18n.t("components.DualSelector.todayAppoitments"),
        data: todayItems,
      },
      {
        title: i18n.t("components.DualSelector.concludedAppoitments"),
        data: afterItems,
      },
    ];
  };

  return (
    <View
      style={{
        width: "90%",
        alignSelf: "center",
        flex: 1,
      }}
    >
      <View style={styles.buttonsContainer}>
        <LinearGradient
          colors={
            button1
              ? [COLORS.primaryBlue, COLORS.themeGradientColor]
              : ["white", "white"]
          }
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[styles.linearGradient, button1 && styles.button1Style]}
        >
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={styles.button}
          >
            <Text
              style={[
                styles.text,
                {
                  color: button1 ? COLORS.white : COLORS.blue,
                },
              ]}
            >
              {leftLabel}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={
            button2
              ? [COLORS.primaryBlue, COLORS.themeGradientColor]
              : ["white", "white"]
          }
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[styles.linearGradient, button2 && styles.button2Style]}
        >
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={[styles.button]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: button2 ? COLORS.white : COLORS.blue,
                },
              ]}
            >
              {rightLabel}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.spaceCard}>
        {button1 ? (
          <SectionList
            sections={getRecords(appointmentsList.users) || []}
            keyExtractor={(item) => item.requestId.toString()}
            refreshControl={
              <RefreshControl
                refreshing={appointmentsList.loading}
                onRefresh={refresh}
                tintColor={COLORS.themeGradientColor}
                colors={[COLORS.themeGradientColor]}
              />
            }
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section: { title, data } }) =>
              data.length > 0 ? <Text style={styles.title}>{title}</Text> : null
            }
            renderItem={ItemView}
          />
        ) : (
          <SectionList
            sections={getRecords(examinationList.users) || []}
            keyExtractor={(item) => item.requestId.toString()}
            refreshControl={
              <RefreshControl
                refreshing={examinationList.loading}
                onRefresh={refresh2}
                tintColor={COLORS.themeGradientColor}
                colors={[COLORS.themeGradientColor]}
              />
            }
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section: { title, data } }) =>
              data.length > 0 ? <Text style={styles.title}>{title}</Text> : null
            }
            renderItem={ItemView}
          />
        )}
      </View>
    </View>
  );
}

export default DualSelector;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONT1REGULAR,
  },
  linearGradient: {
    width: "50%",
    borderRadius: 6,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 3,
    borderRadius: 6,
  },
  spaceCard: {
    marginTop: 20,
    flex: 1,
  },
  button1Style: {
    left: 2,
    zIndex: 1,
  },
  button2Style: {
    right: 2,
    zIndex: 1,
  },
  title: {
    fontFamily: "Rubik-Bold",
    marginTop: 0,
    marginBottom: 15,
    fontSize: 16,
  },
});
