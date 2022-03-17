import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS, FONT1REGULAR, FONT1MEDIUM, SCREEN_WIDTH } from "../../config";
import i18n from "../../utils/i18n";
import DoctorAvatar from "../../assets/DoctorAvatar.png";
import Location from "../../assets/location.png";

interface Props {
  appointmentBooking: boolean,
  doctorName: string;
  doctorSpecialization: string;
  location?: string;
  appointmentHour?: string;
  appointmentTime?: string;
  appointmentDay?: string;
  status?: string;
  studies?: string
}

const AppointmentCardForUser = ({
  appointmentBooking,
  doctorName,
  doctorSpecialization,
  location,
  appointmentHour,
  appointmentTime,
  appointmentDay,
  status,
  studies
}: Props) => {
  let containerStyle = location
    ? styles.containerFullInfo
    : styles.containerPartialInfo;

  return (
    <View style={containerStyle}>
      { appointmentBooking ? 
        <View style={styles.view1234}>
          <View style={styles.view1}>
            <Image source={DoctorAvatar} style={styles.doctorAvatar} />
          </View>
          <View style={styles.view234}>
            <View style={styles.view2}>
              <Text style={styles.appointmentWithText}>
                {i18n.t("components.AppointmentCardForUser.AppointmentWith")}
              </Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.doctorNameText}>{doctorName}</Text>
            </View>
            <View style={styles.view4}>
              <Text style={styles.doctorSpecializationText}>
                {doctorSpecialization}
              </Text>
            </View>
          </View>
        </View>
      :
        <View style={styles.view1234}>
          <View style={styles.view1AB}>
            <Image source={DoctorAvatar} style={styles.doctorAvatarAB} />
          </View>
          <View style={styles.view234}>
            <View style={styles.view2AB}>
              <Text style={styles.appointmentWithText}>
               {doctorName}
              </Text>
            </View>
            <View style={styles.view3AB}>
              <Text style={styles.doctorSpecializationText}>{doctorSpecialization}</Text>
            </View>
            <View style={styles.view4AB}>
              <Text style={styles.studiesText}>
                {studies}
              </Text>
            </View>
            <View style={styles.view56AB}>
              <Image source={Location} style={styles.view5AB}/>
              <View style={styles.view6AB}>
                <Text style={styles.studiesText}>
                  {location}
                </Text>
              </View>
            </View>  
          </View>
        </View>
      }
      {location && appointmentBooking && (
        <View style={styles.view56}>
          <View style={styles.view5}>
            <Text style={styles.doctorLocationText}>
              {i18n.t("components.AppointmentCardForUser.DoctorLocation")}
            </Text>
          </View>
          <View style={styles.view6}>
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      )}
      <View style={styles.view7to12}>
        {appointmentHour && (
          <View style={styles.view7to12}>
            <View style={styles.view7}>
              <Text style={styles.timeText}>
                {i18n.t("components.AppointmentCardForUser.AppointmentTime")}
              </Text>
            </View>
            <View style={styles.view8}>
              <Text style={styles.appointmentHourText}>{appointmentHour} </Text>
            </View>
          </View>
        )}
        {appointmentTime && (
          <View style={styles.view9}>
            <Text style={styles.dayTimeText}>{appointmentTime} </Text>
          </View>
        )}
        {appointmentDay && (
          <View style={styles.view10}>
            <Text style={styles.dayText}>{appointmentDay}</Text>
          </View>
        )}
        {status && (
          <View style={styles.view11to12}>
            <View style={styles.view11}>
              <Text style={styles.statusText}>{i18n.t("common.Status")}</Text>
            </View>
            <View style={styles.view12}>
              <Text style={styles.statusValueText}> {status}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFullInfo: {
    width: SCREEN_WIDTH * 0.89,
    height: SCREEN_WIDTH * 0.42,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    // for IOS
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    // for android
    elevation: 8,
  },
  containerPartialInfo: {
    width: SCREEN_WIDTH * 0.89,
    height: SCREEN_WIDTH * 0.37,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    // for IOS
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    // for android
    elevation: 8,
  },
  statusValueText: {
    fontFamily: FONT1REGULAR,
    color: COLORS.blue,
    fontSize: 12,
    textAlign: "center",
    left: SCREEN_WIDTH * -0.1,
    top: SCREEN_WIDTH * 0.008,
  },
  statusText: {
    fontFamily: FONT1MEDIUM,
    color: COLORS.themeGradientColor,
    fontSize: 13,
    textAlign: "center",
    left: SCREEN_WIDTH * 0.001,
    top: SCREEN_WIDTH * 0.008,
  },
  dayText: {
    fontFamily: FONT1REGULAR,
    color: COLORS.blue,
    fontSize: 12,
    textAlign: "center",
    left: SCREEN_WIDTH * 0.001,
    top: SCREEN_WIDTH * 0.008,
  },
  dayTimeText: {
    fontFamily: FONT1REGULAR,
    color: COLORS.blue,
    fontSize: 12,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    left: SCREEN_WIDTH * 0.001,
    top: SCREEN_WIDTH * 0.008,
  },
  appointmentHourText: {
    fontFamily: FONT1MEDIUM,
    color: COLORS.blue,
    fontSize: 12,
    textAlign: "center",
    left: SCREEN_WIDTH * 0.001,
    top: SCREEN_WIDTH * 0.008,
  },
  timeText: {
    fontFamily: FONT1MEDIUM,
    color: COLORS.themeGradientColor,
    fontSize: 13,
    textAlign: "center",
    left: SCREEN_WIDTH * 0.03,
    top: SCREEN_WIDTH * 0.008,
  },
  locationText: {
    height: 17,
    fontFamily: FONT1REGULAR,
    color: COLORS.blue,
    fontSize: 12,
    textAlign: "center",
    left: SCREEN_WIDTH * -0.12,
    top: SCREEN_WIDTH * 0.025,
  },
  studiesText: {
    height: 17,
    fontFamily: FONT1REGULAR,
    color: COLORS.blue,
    fontSize: 12,
    textAlign: "justify",
    left: SCREEN_WIDTH * 0.0186,
  },
  doctorLocationText: {
    fontFamily: FONT1MEDIUM,
    color: COLORS.themeGradientColor,
    fontSize: 13,
    textAlign: "center",
    left: SCREEN_WIDTH * 0.03,
    top: SCREEN_WIDTH * 0.025,
  },
  doctorSpecializationText: {
    fontFamily: FONT1REGULAR,
    color: COLORS.themeGradientColor,
    fontSize: 13,
    textAlign: "justify",
    left: SCREEN_WIDTH * 0.0186,
  },
  doctorNameText: {
    fontFamily: FONT1REGULAR,
    color: COLORS.darkerGrey,
    fontSize: 16,
    textAlign: "justify",
    left: SCREEN_WIDTH * 0.0186,
  },
  appointmentWithText: {
    fontFamily: FONT1MEDIUM,
    color: COLORS.darkerGrey,
    fontSize: 16,
    textAlign: "justify",
    left: SCREEN_WIDTH * 0.0186,
    top: SCREEN_WIDTH * 0.072,
  },
  doctorAvatar: {
    width: SCREEN_WIDTH * 0.18,
    height: SCREEN_WIDTH * 0.17,
    left: SCREEN_WIDTH * 0.053,
    top: SCREEN_WIDTH * 0.072,
    borderRadius:4
  },
  doctorAvatarAB: {
    width: SCREEN_WIDTH * 0.2543,
    height: SCREEN_WIDTH * 0.232,
    left: SCREEN_WIDTH * 0.053,
    top: SCREEN_WIDTH * 0.072,
    borderRadius:4
  },
  view1234: {
    flexDirection: "row",
  },
  view234: {
    alignItems: "center",
  },
  view56: {
    flexDirection: "row",
  },
  view7to12: {
    flexDirection: "row",
  },
  view11to12: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
  view1: {
    width: SCREEN_WIDTH * 0.2613,
    height: SCREEN_WIDTH * 0.2533,
  },
  view1AB: {
    width: SCREEN_WIDTH * 0.2986,
    height: SCREEN_WIDTH * 0.328,
  },
  view2AB: {
    top: SCREEN_WIDTH * 0.013,
    width: SCREEN_WIDTH * 0.576,
    height: SCREEN_WIDTH * 0.1173,
    paddingLeft: SCREEN_WIDTH * 0.016,
  },
  view3AB: {
    top: SCREEN_WIDTH * 0.026,
    width: SCREEN_WIDTH * 0.576,
    height: SCREEN_WIDTH * 0.053,
    paddingLeft: SCREEN_WIDTH * 0.016,
  },
  view4AB: {
    top: SCREEN_WIDTH * 0.025,
    width: SCREEN_WIDTH * 0.576,
    height: SCREEN_WIDTH * 0.053,
    paddingLeft: SCREEN_WIDTH * 0.016,
  },
  view5AB: {
    top: SCREEN_WIDTH * 0.02,
    left: SCREEN_WIDTH * 0.05,
    width: SCREEN_WIDTH * 0.053,
    height: SCREEN_WIDTH * 0.053,
  },
  view6AB: {
    top: SCREEN_WIDTH * 0.030,
    left: SCREEN_WIDTH * 0.02,
    width: SCREEN_WIDTH * 0.576,
    height: SCREEN_WIDTH * 0.064,
    paddingLeft: SCREEN_WIDTH * 0.016,
  },
  view56AB: {
    flexDirection: "row"
  },
  view2: {
    width: SCREEN_WIDTH * 0.628,
    height: SCREEN_WIDTH * 0.1293,
  },
  view3: {
    width: SCREEN_WIDTH * 0.628,
    height: SCREEN_WIDTH * 0.064,
  },
  view4: {
    width: SCREEN_WIDTH * 0.628,
    height: SCREEN_WIDTH * 0.06,
  },
  view5: {
    width: SCREEN_WIDTH * 0.212,
    height: SCREEN_WIDTH * 0.0797,
  },
  view6: {
    width: SCREEN_WIDTH * 0.679,
    height: SCREEN_WIDTH * 0.0797,
  },
  view7: {
    width: SCREEN_WIDTH * 0.1506,
    height: SCREEN_WIDTH * 0.085,
  },
  view8: {
    width: SCREEN_WIDTH * 0.1107,
    height: SCREEN_WIDTH * 0.085,
  },
  view9: {
    width: SCREEN_WIDTH * 0.05,
    height: SCREEN_WIDTH * 0.085,
  },
  view10: {
    width: SCREEN_WIDTH * 0.1659,
    height: SCREEN_WIDTH * 0.085,
  },
  view11: {
    width: SCREEN_WIDTH * 0.1693,
    height: SCREEN_WIDTH * 0.085,
  },
  view12: {
    width: SCREEN_WIDTH * 0.24,
    height: SCREEN_WIDTH * 0.085,
  },
});

export default AppointmentCardForUser;