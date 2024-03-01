import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const NoData: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Not enough data yet...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height - 100,
  },
  subtitle: {
    fontFamily: 'Formula1',
    fontSize: 20,
  },
});

export default NoData;
