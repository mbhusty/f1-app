import {FC} from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import Divider from '../../components/Divider/Divider';
import React from 'react';
import moment from 'moment';
import TimeZone from 'react-native-timezone';

export const DetailRace: FC = ({route}) => {
  const {detail} = route.params;
  const theme = useColorScheme();

  moment.locale('en');
  const timezone = TimeZone.getTimeZone();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{detail.raceName}</Text>
      <Divider
        orientation={'horizontal'}
        width={3}
        color={theme === 'dark' ? '#fff' : '#000'}
      />
      <Text style={styles.dateTitle}>First Practice:</Text>
      <Text style={styles.text}>
        {detail.FirstPractice.date}
        {moment
          .tz(
            detail.FirstPractice.date + ' ' + detail.FirstPractice.time,
            timezone,
          )
          .format('H:mm:ss')}
      </Text>
      <Text style={styles.dateTitle}>Second Practice:</Text>
      <Text style={styles.text}>
        {detail.SecondPractice.date}
        {moment
          .tz(
            detail.SecondPractice.date + ' ' + detail.SecondPractice.time,
            timezone,
          )
          .format('H:mm:ss')}
      </Text>
      <Text style={styles.dateTitle}>Qualifying</Text>
      <Text style={styles.text}>
        {detail.Qualifying.date}
        {moment
          .tz(detail.Qualifying.date + ' ' + detail.Qualifying.time, timezone)
          .format('H:mm:ss')}
      </Text>
      {detail.Sprint && (
        <>
          <Text style={styles.dateTitle}>Sprint</Text>
          <Text style={styles.text}>
            {detail.Sprint.date}
            {moment
              .tz(detail.Sprint.date + ' ' + detail.Sprint.time, timezone)
              .format('H:mm:ss')}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 56,
    fontFamily: 'Formula1',
  },
  dateTitle: {
    fontFamily: 'Extreme',
    fontWeight: '700',
    fontSize: 20,
  },
  text: {
    fontFamily: 'Extreme',
    fontWeight: '700',
    fontSize: 15,
  },
  date: {
    fontFamily: 'Extreme',
    fontWeight: '200',
    fontSize: 15,
  },
});
