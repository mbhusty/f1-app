import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigator} from './BottomNavigator';
import {DetailRace} from '../screens/main/DetailRace';

const Stack = createStackNavigator<any>();

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DetailRace" component={DetailRace} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
