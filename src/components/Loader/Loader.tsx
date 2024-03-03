import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height - 200,
  },
});

export default Loader;
