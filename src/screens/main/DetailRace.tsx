import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const DetailRace: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
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
});
