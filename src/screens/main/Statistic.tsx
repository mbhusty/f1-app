import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import {Colors} from '../../constants/colors';

export const Statistic: React.FC = () => {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          theme === 'dark' ? styles.darkText : styles.lightText,
        ]}>
        Statistic
      </Text>
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
