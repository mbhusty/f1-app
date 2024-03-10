import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {Colors} from '../../constants/colors';
import RaceItem from '../../components/Races/RaceItem';
import {apiRequest} from '../../utils/apiRequest';
import RaceItemCard from '../../components/Races/RaceItemCard';
const {width, height} = Dimensions.get('window');

const colors = [
  '#26292E',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = props => {
  const {animValue, index, length, backgroundColor} = props;
  const widthD = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-widthD, 0, widthD];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-widthD, 0, widthD];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: Colors.gray,
        width: 5,
        height: height / 6.9,
        //borderRadius: 50,
        overflow: 'hidden',
      }}>
      <Animated.View
        style={[
          {
            // borderRadius: 50,
            backgroundColor: Colors.totalBlack,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export const RaceDemo = () => {
  const progressValue = useSharedValue<number>(0);
  const [races, setRaces] = useState<any[]>([]);

  const fetchDataRaces = async () => {
    try {
      const response = await apiRequest.get('2024.json');
      const fetchedRaces = response.data.MRData.RaceTable.Races;
      setRaces(fetchedRaces);
    } catch (error) {
      Alert.alert('Error', 'Error fetching races');
    } finally {
    }
  };

  useEffect(() => {
    fetchDataRaces();
  }, []);

  const baseOptions = {
    vertical: true,
    width: width,
    height: height,
  };
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled={true}
        snapEnabled={true}
        autoPlay={false}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          //parallaxScrollingOffset: 25,
        }}
        data={races}
        renderItem={({item}) => <RaceItemCard race={item} />}
      />
      {!!progressValue && (
        <View
          style={{
            flexDirection: 'column',
            //justifyContent: 'space-between',
            width: 1,
            alignSelf: 'center',
            position: 'absolute',
            right: 3,
            top: 0,
          }}>
          {colors.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={Colors.totalBlack}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={true}
                length={colors.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};
