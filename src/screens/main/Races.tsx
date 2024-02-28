import {FC, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {Colors} from '../../constants/colors';
import RaceList from '../../components/Races/RaceList';
import React from 'react';
export const Races: FC = () => {
  const theme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          theme === 'dark' ? styles.darkText : styles.lightText,
        ]}>
        Races
      </Text>
      <RaceList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
