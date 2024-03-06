import React from 'react';
import {FlatList} from 'react-native';
import RaceItem from './RaceItem';

import NoData from '../Empty/NoData';

const RaceList: React.FC = ({raceData}) => {
  return (
    <FlatList
      data={raceData}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <RaceItem race={item} />}
      keyExtractor={item => item.round}
      ListEmptyComponent={NoData}
    />
  );
};

export default RaceList;
