import React, { Component, ReactNode } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Agenda } from "react-native-calendars"
import moment from 'moment-timezone';
import { FONT1REGULAR, COLORS, SCREEN_WIDTH } from '../config';
import i18n from '../utils/i18n';
import GradientButton from './GradientButton';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

class DatePicker extends Component<Props> {

  componentDidUpdate(prevProps: Props){
    if (prevProps.value !== this.props.value){
      this.forceUpdate()
    }
  }

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  renderEmpty = (day?: any) => {
    const isToday = moment(this.props.value, "YYYY-MM-DD").isSame(moment(), "day")
    const setToday = () =>  this.props.setValue(moment().format("YYYY-MM-DD"))
    
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemDay}>{moment(day ? moment(day) : moment(this.props.value, "YYYY-MM-DD")).format("DD")}</Text>
        <View style={styles.dateInfo}>
          <Text style={styles.iteDayMonth}>{moment(day ? moment(day) : moment(this.props.value, "YYYY-MM-DD")).format("dddd")}</Text>
          <View style={styles.row}>
            <Text style={styles.iteDayMonth}>{moment(day ? moment(day) : moment(this.props.value, "YYYY-MM-DD")).format("MMMM")}</Text>
            <Text style={[styles.iteDayMonth, { marginLeft: 5 }]}>{moment(day ? moment(day) : moment(this.props.value, "YYYY-MM-DD")).format("yyyy")}</Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
          {/* Προσωρινά εκτός, διοτι πατώντας το  δεν σκρολαρει να παει στην ημερομηνία που επιλέξαμε */}
          {/* {!isToday && (
            <GradientButton 
              text={i18n.t("common.Today")}
              transparent
              borderRadius={4}
              height={40}
              alignSelf="flex-end"
              backgroundColor="#EBFBFB"
              textColor={COLORS.themeGradientColor}
              onPress={setToday}
              marginTopHide
              fontSize={14}
              width={100}
            />
          )} */}
        </View>
      </View>
    )
  }

  changeValue = (day: {dateString: string}) =>  this.props.setValue(day.dateString)

  render(): ReactNode {
    return (
      <Agenda
        testID="calendar"
        selected={this.props.value}
        // key={this.props.value} // this force render component
        renderEmptyData={this.renderEmpty}
        onDayPress={this.changeValue}
        showClosingKnob={true}
        theme={{ 
          backgroundColor: 'white',
          selectedDayBackgroundColor: "#EBFBFB",
          textSectionTitleColor: COLORS.blue,
          dayTextColor: COLORS.themeGradientColor,
          todayTextColor: COLORS.darkerGrey,
          selectedDayTextColor: COLORS.themeGradientColor,
          agendaKnobColor: "rgba(103, 114, 148, 0.6)"
        }}
      />
    )
  }    
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  row: {
    flexDirection: "row"
  },
  itemContainer: {
    height: 65,
    padding: 15,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 5,
    backgroundColor: "#fff",
    width: SCREEN_WIDTH - 47,
    overflow: "visible",
    borderRadius: 6,
    shadowColor: Platform.OS === "ios" ? COLORS.shadow : "rgba(0, 0, 0, 0.8)" ,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 10
  },
  itemDay:{
    fontSize: 28,
    fontFamily: FONT1REGULAR,
    color: "#00CCCB"
  },
  iteDayMonth: {
    fontFamily: FONT1REGULAR,
    fontSize: 16,
    color: COLORS.blue
  },
  dateInfo: {
    flexDirection:"column", 
    marginLeft: 10
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default DatePicker