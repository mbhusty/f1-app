import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Standings} from '../screens/main/Standings';
import {Statistic} from '../screens/main/Statistic';
import {Races} from '../screens/main/Races';
import {Colors} from '../constants/colors';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator<any>();

export const BottomNavigator: FC = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: Colors.gray,
          tabBarItemStyle: styles.tabBarItemStyle,
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
});
