import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Standings} from '../screens/main/Standings';
import {Statistic} from '../screens/main/Statistic';
import {Races} from '../screens/main/Races';
import {Colors} from '../constants/colors';
import {StyleSheet, Text, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {RaceDemo} from '../screens/main/RaceDemo';

const Tab = createBottomTabNavigator<any>();

export const BottomNavigator: FC = () => {
  const {colors} = useTheme();
  const theme = useColorScheme();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: Colors.gray,
          tabBarItemStyle: styles.tabBarItemStyle,
          header: ({...props}) => (
            <Text
              style={[
                styles.text,
                theme === 'dark' ? styles.darkText : styles.lightText,
              ]}>
              {props.options.title}
            </Text>
          ),
        }}>
        <Tab.Screen
          name="Races"
          component={Races}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="timetable" size={20} color={colors.primary} />;
            },
            title: 'Races',
          }}
        />
        <Tab.Screen
          name="Standings"
          component={Standings}
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <Icon name="racing-helmet" size={20} color={colors.primary} />
              );
            },
            title: 'Standings',
          }}
        />
        <Tab.Screen
          name="Statistic"
          component={Statistic}
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <Icon name="flag-checkered" size={20} color={colors.primary} />
              );
            },
            title: 'Statistic ',
          }}
        />
        <Tab.Screen
          name="Demo"
          component={RaceDemo}
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <Icon name="flag-checkered" size={20} color={colors.primary} />
              );
            },
            title: 'Demo ',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 45,
    //backgroundColor: Colors.red50,
  },
  tabBarLabelStyle: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    //lineHeight: 20,
    fontFamily: 'Formula1',
    textTransform: 'uppercase',
  },
  tabBarItemStyle: {
    height: 40,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 56,
    fontFamily: 'Formula1',
    paddingLeft: 15,
  },
  darkText: {
    color: Colors.background,
  },
  lightText: {
    color: Colors.totalBlack,
  },
});
