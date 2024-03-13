import {View, StyleSheet, Button, Text} from 'react-native';
import React, {FC} from 'react';
import useRaceUpdate from '../../utils/useRaceUpdate';
import {useTheme} from '@react-navigation/native';

export const Statistic: FC = () => {
  const {play, reset, counter} = useRaceUpdate();
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: colors.primary}]}>
        LAPS {counter} / 50
      </Text>
      <Button title="Start Activity" onPress={play} />
      {/* <Button title="Update Activity" onPress={updateActivity} /> */}
      <Button title="End Activity" onPress={reset} />
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
    fontSize: 100,
    fontFamily: 'Formula1',
    textAlign: 'center',
  },
});
