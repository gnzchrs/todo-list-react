import React, { useRef, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
const windowHeight = Dimensions.get('screen').height
const windowWidth = Dimensions.get('screen').width
const s = require('../globalStyle')

const CalendarPop = (props) => {
  LocaleConfig.locales['en'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan.',
      'Feb.',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec.',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
    today: 'today',
  }
  LocaleConfig.defaultLocale = 'en'
  const opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: 500,
      useNativeDriver: true,
    }).start()
  }, [])
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      animationInTiming={1}
      animationOutTiming={1}
    >
      <TouchableWithoutFeedback onPress={props.backdropHandler}>
        <View style={styles.calendarBody}>
          <Animated.View style={{ ...opacity, ...styles.cal }}>
            <Calendar
              horizontal={true}
              enableSwipeMonths={true}
              style={styles.calendar}
              theme={styles.theme}
              onDayPress={props.onDayPress}
              onMonthChange={props.onMonthChange}
              initialDate={props.initialDate}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default CalendarPop

const styles = StyleSheet.create({
  calendarBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  cal: {
    width: windowWidth / 1.2,
    alignSelf: 'center',
    position: 'absolute',
  },
  calendar: {
    borderRadius: 20,
    padding: 5,
  },
  theme: {
    textSectionTitleColor: 'black',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#F76C6A',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    arrowColor: 'black',
    monthTextColor: 'black',
    textDayFontFamily: 'Montserrat-Regular',
    textMonthFontFamily: 'Montserrat-SemiBold',
    textDayHeaderFontFamily: 'Montserrat-Medium',
    textDayFontWeight: '300',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 14,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 16,
  },
})
