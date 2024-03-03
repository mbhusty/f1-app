import React, {useState, useEffect} from 'react';
import {Alert, FlatList} from 'react-native';
import RaceItem from './RaceItem';
import {apiRequest} from '../../utils/apiRequest';
import NoData from '../Empty/NoData';
import Loader from '../Loader/Loader';

interface Race {
  round: string;
}

const RaceList: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDataRaces = async () => {
    setLoading(true);
    try {
      const response = await apiRequest.get('2024.json');
      const fetchedRaces = response.data.MRData.RaceTable.Races;
      setRaces(fetchedRaces);
    } catch (error) {
      Alert.alert('Error', 'Error fetching races');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataRaces();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={races}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <RaceItem race={item} />}
          keyExtractor={item => item.round}
          ListEmptyComponent={NoData}
        />
      )}
    </>
  );
};

export default RaceList;
