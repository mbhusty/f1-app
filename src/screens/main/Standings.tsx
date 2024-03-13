import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FC} from 'react';
import {
  View,
  StyleSheet,
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
    <ConstructorsList />
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
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              style={[{opacity}, styles.tabBlock]}>
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
    paddingTop: StatusBar.currentHeight,
  },
  tabText: {
    fontFamily: 'Formula1',
    fontSize: 20,
    padding: 5,
  },
  tabBlock: {
    borderWidth: 3,
    borderBottomColor: 'red',
    borderTopWidth: 0,
    borderStartWidth: 0,
    borderEndWidth: 0,
    borderEndStartRadius: 15,
  },
});
