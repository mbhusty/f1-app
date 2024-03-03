import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from '../../constants/colors';
import moment from 'moment-timezone';
import TimeZone from 'react-native-timezone';
import Divider from '../Divider/Divider';
import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const RaceItem = ({race}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const theme = useColorScheme();
  const {colors} = useTheme();
  moment.locale('en');
  const timezone = TimeZone.getTimeZone();

  const [isPastDate, setIsPastDate] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const raceDate = new Date(race.date);

    if (raceDate < currentDate) {
      setIsPastDate(true);
    } else {
      setIsPastDate(false);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailRace', {id: race.raceName})}
      style={[
        styles.container,
        {backgroundColor: colors.primary, opacity: isPastDate ? 0.7 : 1},
      ]}>
      <View style={styles.card}>
        <View style={styles.dateBlock}>
          <Text style={[styles.dateTextNum, {color: colors.text}]}>
            {moment(race.date).format('Do')}
          </Text>
          <View style={styles.monthBlock}>
            <Text style={[styles.dateTextMonth, {color: colors.text}]}>
              {moment(race.date).format('MMM')}
            </Text>
          </View>
        </View>
        <Divider
          orientation={'vertical'}
          width={2}
          color={theme === 'dark' ? '#000' : '#fff'}
        />
        <View style={styles.infoBlock}>
          <Text style={[styles.round, {color: colors.text}]}>
            Round {race.round}
          </Text>
          <Text style={[styles.country, {color: colors.text}]}>
            {race.Circuit.Location.country}
          </Text>
          <Text style={[styles.raceName, {color: colors.text}]}>
            {race.raceName}
          </Text>
          <Text style={[styles.circuitName, {color: colors.text}]}>
            {race.Circuit.circuitName}
          </Text>
          {race.time && (
            <Text style={[styles.circuitName, {color: colors.text}]}>
              Race start:
              {moment
                .tz(race.date + ' ' + race.time, timezone)
                .format('H:mm:ss')}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 16,
    paddingTop: 20,
    paddingBottom: 20,
    height: 130,
  },
  card: {
    flexDirection: 'row',
  },
  dateBlock: {
    justifyContent: 'space-around',
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    height: '100%',
  },
  infoBlock: {
    justifyContent: 'space-between',
    padding: 10,
  },
  monthBlock: {
    backgroundColor: Colors.gray,
    borderRadius: 24,
    width: 40,
    paddingTop: 2,
    paddingBottom: 2,
  },
  dateTextNum: {
    fontSize: 15,
    fontWeight: '700',
  },
  dateTextMonth: {
    fontSize: 15,
    fontWeight: '400',
    textTransform: 'uppercase',
    alignItems: 'center',
    alignSelf: 'center',
  },
  round: {
    fontFamily: 'Formula1',
    fontWeight: '400',
    fontSize: 11,
  },
  country: {
    fontFamily: 'Extreme',
    fontWeight: '700',
    fontSize: 15,
  },
  raceName: {
    fontFamily: 'Extreme',
    fontWeight: '700',
    fontSize: 15,
  },
  circuitName: {
    fontFamily: 'Extreme',
    fontWeight: '200',
    fontSize: 15,
  },
});

export default RaceItem;
