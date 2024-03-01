import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
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
        '2023/constructorstandings.json',
      );
      const fetchedStandings =
        responseConstructorStandings.data.MRData.StandingsTable
          .StandingsLists[0];
      if (fetchedStandings.ConstructorStandings) {
        setConstructors(fetchedStandings.ConstructorStandings);
      }
    } catch (error) {
      console.log('Error fetching races:', error);
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
    />
  );
};

export default ConstructorsItemList;
