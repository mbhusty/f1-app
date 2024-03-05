import {View, StyleSheet, Button, NativeModules} from 'react-native';
import {Colors} from '../../constants/colors';
const {RaceStat} = NativeModules;

export const Statistic: React.FC = () => {
  const onStartActivity = () => {
    console.log(RaceStat);
    RaceStat.startActivity();
  };

  const onEndActivity = () => {
    RaceStat.endActivity();
  };

  const updateActivity = () => {
    RaceStat.updateActivity('Updated Activity 😀😃😄😁😆');
  };

  return (
    <View style={styles.container}>
      <Button title="Start Activity" onPress={onStartActivity} />
      <Button title="Update Activity" onPress={updateActivity} />
      <Button title="End Activity" onPress={onEndActivity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  text: {
    fontSize: 56,
    fontFamily: 'Formula1',
  },
  darkText: {
    color: Colors.background,
  },
  lightText: {
    color: Colors.totalBlack,
  },
});
