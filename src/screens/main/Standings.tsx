import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import DriversList from '../../components/Standings/DriversList';
import ConstructorsList from '../../components/Standings/ConstructorsList';

const FirstRoute = () => (
  <View>
    <DriversList />
  </View>
);

const SecondRoute = () => (
  <View>
    <Text>ConstructorsList</Text>
  </View>
);

const renderScene = SceneMap({
  drivers: FirstRoute,
  constructors: SecondRoute,
});

export const Standings: FC = () => {
  const layout = useWindowDimensions();
  const {colors} = useTheme();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'drivers', title: 'Drivers'},
    {key: 'constructors', title: 'Constructors'},
  ]);

  const renderTabBar = (props: {
    navigationState: {routes: any[]};
    position: {interpolate: (arg0: {inputRange: any; outputRange: any}) => any};
  }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity onPress={() => setIndex(i)}>
              <Animated.Text
                style={[{opacity}, styles.tabText, {color: colors.primary}]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: colors.primary}]}>Standings</Text>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingTop: 16,
  },
  text: {
    fontSize: 56,
    fontFamily: 'Formula1',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: StatusBar.currentHeight,
  },
  tabText: {
    fontFamily: 'Formula1',
    fontSize: 20,
    padding: 10,
  },
});
