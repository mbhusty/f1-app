import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import RaceItem from './RaceItem';
import {Colors} from '../../constants/colors';
import {apiRequest} from '../../utils/apiRequest';

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
      console.error('Error fetching races:', error);
    }
  };

  useEffect(() => {
    fetchDataRaces();
  }, []);

  const renderRaces = ({item}: {item: Race}) => <RaceItem race={item} />;

  return (
    <FlatList
      data={races}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderRaces}
      keyExtractor={item => item.round}
      // ListEmptyComponent={EmptyList}
    />
  );
};

export default RaceList;
