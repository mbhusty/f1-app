import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import DriversItem from './DriversItem';
import {apiRequest} from '../../utils/apiRequest';

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
        responseDriverStandings.data.MRData.StandingsTable.StandingsLists[0]
          .DriverStandings;
      setDrivers(fetchedStandings);
    } catch (error) {
      console.error('Error fetching races:', error);
    }
  };

  useEffect(() => {
    fetchDataStandings();
  }, []);

  const renderDrivers = ({item}: {item: Driver}) => (
    <DriversItem driver={item} />
  );

  return (
    <FlatList
      data={drivers}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderDrivers}
      keyExtractor={item => item.positionText}
      // ListEmptyComponent={EmptyList}
    />
  );
};

export default DriversList;
