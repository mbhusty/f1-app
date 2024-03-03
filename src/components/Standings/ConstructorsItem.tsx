import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from '../../constants/colors';
import Divider from '../Divider/Divider';
import {useTheme} from '@react-navigation/native';

const ConstructorsItem = ({constructor}) => {
  const theme = useColorScheme();
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={styles.card}>
        <View style={styles.dateBlock}>
          <Text style={[styles.position, {color: colors.text}]}>
            {constructor.position}
          </Text>
        </View>
        <Divider
          orientation={'vertical'}
          width={2}
          color={theme === 'dark' ? '#000' : '#fff'}
        />
        <View style={styles.infoBlock}>
          <Text style={[styles.round, {color: colors.text}]}>
            {constructor.Constructor.name}
          </Text>
          <Text style={[styles.raceName, {color: colors.text}]}>
            {constructor.Constructor.nationality}
          </Text>
          <Text style={[styles.round, {color: colors.text}]}>
            Wins: {constructor.wins}
          </Text>
        </View>
        <View style={styles.pointsBlock}>
          <Text style={[styles.points, {color: colors.text}]}>
            {constructor.points}
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
    height: 130,
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
    fontSize: 18,
  },
  country: {
    fontFamily: 'Extreme',
    fontWeight: '700',
    fontSize: 15,
  },
  raceName: {
    fontFamily: 'Extreme',
    fontWeight: '700',
    fontSize: 20,
  },
  circuitName: {
    fontFamily: 'Extreme',
    fontWeight: '200',
    fontSize: 15,
  },
  pointsBlock: {
    justifyContent: 'space-around',
    flex: 1,
    padding: 10,
  },
  points: {
    fontSize: 35,
    fontFamily: 'Formula1',
    textAlign: 'right',
  },
});

export default ConstructorsItem;
