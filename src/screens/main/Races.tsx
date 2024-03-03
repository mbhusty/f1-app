import {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import RaceList from '../../components/Races/RaceList';
import React from 'react';
export const Races: FC = () => {
  return (
    <View style={styles.container}>
      <RaceList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
