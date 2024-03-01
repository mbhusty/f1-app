import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import RaceItem from './RaceItem';
import {Colors} from '../../constants/colors';
import {apiRequest} from '../../utils/apiRequest';
import NoData from '../Empty/NoData';

interface Race {
  round: string;
}

const RaceList: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);

  const fetchDataRaces = async () => {
    try {
      const response = await apiRequest.get('2024.json');
      const fetchedRaces = response.data.MRData.RaceTable.Races;
      setRaces(fetchedRaces);
    } catch (error) {
      console.log('Error fetching races:', error);
    }
  };

  useEffect(() => {
    fetchDataRaces();
  }, []);

  return (
    <FlatList
      data={races}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <RaceItem race={item} />}
      keyExtractor={item => item.round}
      ListEmptyComponent={NoData}
    />
  );
};

export default RaceList;
