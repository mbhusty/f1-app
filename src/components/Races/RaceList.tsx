import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import RaceItem from './RaceItem';
import NoData from '../Empty/NoData';
import {useTheme} from '@react-navigation/native';

const RaceList: React.FC = ({raceData}) => {
  const {colors} = useTheme();
  return (
    <SectionList
      sections={raceData}
      keyExtractor={item => item.round}
      renderItem={({item}) => <RaceItem race={item} />}
      renderSectionHeader={({section: {title}}) => (
        <View style={[styles.header, {backgroundColor: colors.background}]}>
          <Text style={[styles.title, {color: colors.primary}]}>{title}</Text>
        </View>
      )}
      ListEmptyComponent={NoData}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 3,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Oxanium-Light',
  },
});

export default RaceList;
