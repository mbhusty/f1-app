import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Standings} from '../screens/main/Standings';
import {Statistic} from '../screens/main/Statistic';
import {Races} from '../screens/main/Races';
import {Colors} from '../constants/colors';
import {StyleSheet, useColorScheme} from 'react-native';

const Tab = createBottomTabNavigator<any>();

export const BottomNavigator: FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.gray,
          tabBarItemStyle: styles.tabBarItemStyle,
        }}>
        <Tab.Screen
          name="Races"
          component={Races}
          options={{
            title: 'Races',
          }}
        />
        <Tab.Screen
          name="Standings"
          component={Standings}
          options={{
            title: 'Standings',
          }}
        />
        <Tab.Screen
          name="Statistic"
          component={Statistic}
          options={{
            title: 'Statistic',
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
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Formula1',
    textTransform: 'uppercase',
  },
  tabBarItemStyle: {
    height: 40,
    alignSelf: 'flex-end',
  },
});
