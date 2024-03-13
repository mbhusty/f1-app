import {FC, useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import RaceList from '../../components/Races/RaceList';
import React from 'react';
import {apiRequest} from '../../utils/apiRequest';
import Loader from '../../components/Loader/Loader';

interface Race {
  date: string;
}

export const Races: FC = () => {
  const [races, setRaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDataRaces = async () => {
    setLoading(true);
    try {
      const response = await apiRequest.get('2024.json');
      const fetchedRaces: Race[] = response.data.MRData.RaceTable.Races;
      const currentDate = new Date().toISOString().split('T')[0];
      const prevRaces = fetchedRaces.filter(race => race.date < currentDate);
      const nextRaces = fetchedRaces.filter(race => race.date >= currentDate);
      const formattedRaces = [
        {title: 'Previous', data: prevRaces},
        {title: 'Next', data: nextRaces},
      ];
      setRaces(formattedRaces);
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
    <View style={styles.container}>
      {loading ? <Loader /> : <RaceList raceData={races} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
