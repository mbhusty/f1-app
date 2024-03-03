import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Image,
} from 'react-native';
import {Colors} from '../../constants/colors';
import {Drivers} from '../../constants/drivers';
import Divider from '../Divider/Divider';
import {useTheme} from '@react-navigation/native';

const RaceItem = ({driver}) => {
  const theme = useColorScheme();
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={styles.card}>
        <View style={styles.dateBlock}>
          <Text style={[styles.position, {color: colors.text}]}>
            {driver.position}
          </Text>
        </View>
        <Divider
          orientation={'vertical'}
          width={2}
          color={theme === 'dark' ? '#000' : '#fff'}
        />
        <View style={styles.infoBlock}>
          <Text style={[styles.round, {color: colors.text}]}>
            {driver.Driver.code}
          </Text>

          <Text style={[styles.country, {color: colors.text}]}>
            {driver.Driver.givenName} {driver.Driver.familyName}
          </Text>
          <Text style={[styles.raceName, {color: colors.text}]}>
            {driver.Constructors[0].name}
          </Text>
        </View>
        <View style={styles.pointsBlock}>
          <Image
            style={styles.driverImg}
            source={Drivers[driver.Driver.code]}
          />
          <View style={[styles.overflow, {borderColor: colors.background}]}>
            <Text style={[styles.points, {color: colors.text}]}>
              {driver.points}
            </Text>
          </View>
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
    overflow: 'hidden',
  },
  card: {
    height: '100%',
    flexDirection: 'row',
  },
  dateBlock: {
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    width: 70,
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
  position: {
    fontSize: 35,
    fontWeight: '400',
    fontFamily: 'Formula1',
  },
  round: {
    fontFamily: 'Formula1',
    fontWeight: '400',
    fontSize: 11,
  },
  country: {
    fontFamily: 'Extreme',
    fontWeight: '700',
    fontSize: 20,
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
  pointsBlock: {
    justifyContent: 'space-around',
    flex: 1,
    //padding: 3,
  },
  points: {
    fontSize: 30,
    fontFamily: 'Formula1',
    //textAlign: 'right',
  },
  driverImg: {
    width: 120,
    height: 135,
    alignSelf: 'flex-end',
  },
  overflow: {
    borderTopLeftRadius: 16,
    borderBottomEndRadius: 16,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    padding: 4,
    alignSelf: 'flex-end',
    width: 85,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});

export default RaceItem;
