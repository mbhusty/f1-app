import {View, StyleSheet, Button, NativeModules} from 'react-native';
import {Colors} from '../../constants/colors';
const {RaceStat} = NativeModules;
import database from '@react-native-firebase/database';
import React, {useState} from 'react';
import Loader from '../../components/Loader/Loader';
export const Statistic: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    await database()
      .ref('races')
      .orderByChild('year')
      .equalTo(2024)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });
    setLoading(false);
  };

  const onStartActivity = () => {
    console.log(RaceStat);
    RaceStat.startActivity();
  };

  const onEndActivity = () => {
    RaceStat.endActivity();
  };

  const updateActivity = () => {
    RaceStat.updateActivity('Updated Activity 😀😃😄😁😆');
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Button title="Start Activity" onPress={onStartActivity} />
          <Button title="Update Activity" onPress={updateActivity} />
          <Button title="End Activity" onPress={onEndActivity} />
          <Button title="GetData" onPress={getData} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  text: {
    fontSize: 56,
    fontFamily: 'Formula1',
  },
  darkText: {
    color: Colors.background,
  },
  lightText: {
    color: Colors.totalBlack,
  },
});
