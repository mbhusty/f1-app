import React, {useState, useEffect} from 'react';
import {Alert, FlatList, StyleSheet} from 'react-native';
import ConstructorsItem from './ConstructorsItem';
import {apiRequest} from '../../utils/apiRequest';
import NoData from '../Empty/NoData';

interface Constructor {
  positionText: string;
}

const ConstructorsItemList: React.FC = () => {
  const [constructors, setConstructors] = useState<Constructor[]>([]);

  const fetchDataStandings = async () => {
    try {
      const responseConstructorStandings = await apiRequest.get(
        '2024/constructorstandings.json',
      );
      const fetchedStandings =
        responseConstructorStandings.data.MRData.StandingsTable
          .StandingsLists[0];
      if (fetchedStandings.ConstructorStandings) {
        setConstructors(fetchedStandings.ConstructorStandings);
      }
    } catch (error) {
      Alert.alert('Error', 'Error constructor list');
    }
  };

  useEffect(() => {
    fetchDataStandings();
  }, []);

  return (
    <FlatList
      data={constructors}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <ConstructorsItem constructor={item} />}
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

export default ConstructorsItemList;
