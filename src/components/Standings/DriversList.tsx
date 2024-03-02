import React, {useState, useEffect} from 'react';
import {Alert, FlatList, StyleSheet} from 'react-native';
import DriversItem from './DriversItem';
import {apiRequest} from '../../utils/apiRequest';
import NoData from '../Empty/NoData';

interface Driver {
  positionText: string;
}

const DriversList: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const fetchDataStandings = async () => {
    try {
      const responseDriverStandings = await apiRequest.get(
        '2024/driverStandings.json',
      );
      const fetchedStandings =
        responseDriverStandings.data.MRData.StandingsTable.StandingsLists[0];
      if (fetchedStandings.DriverStandings) {
        setDrivers(fetchedStandings.DriverStandings);
      }
    } catch (error) {
      Alert.alert('Error', 'Error drivers list');
    }
  };

  useEffect(() => {
    fetchDataStandings();
  }, []);

  return (
    <FlatList
      data={drivers}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <DriversItem driver={item} />}
      keyExtractor={item => item.positionText}
      ListEmptyComponent={NoData}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default DriversList;
