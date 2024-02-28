import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from '../../constants/colors';
import Moment from 'moment';
import Divider from '../Divider/Divider';
import {useTheme} from '@react-navigation/native';

const RaceItem = ({race}) => {
  const theme = useColorScheme();
  const {colors} = useTheme();

  Moment.locale('en');
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={styles.card}>
        <View style={styles.dateBlock}>
          <Text style={[styles.dateTextNum, {color: colors.text}]}>
            {Moment(race.date).format('Do')}
          </Text>
          <View style={styles.monthBlock}>
            <Text style={[styles.dateTextMonth, {color: colors.text}]}>
              {Moment(race.date).format('MMM')}
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
  },
  card: {
    flexDirection: 'row',
  },
  dateBlock: {
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
  },
  infoBlock: {
    justifyContent: 'space-around',
    padding: 10,
  },
  monthBlock: {
    backgroundColor: Colors.gray,
    borderRadius: 24,
    width: 32,
    paddingTop: 2,
    paddingBottom: 2,
  },
  dateTextNum: {
    fontSize: 13,
    fontWeight: '500',
  },
  dateTextMonth: {
    fontSize: 11,
    fontWeight: '400',

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
    //color: '#cccdd7',
  },
});

export default RaceItem;
