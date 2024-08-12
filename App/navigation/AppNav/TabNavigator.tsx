import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {Platform} from 'react-native';
import * as React from 'react';

import {Icon} from '@assets';
import {Text} from '@component';
import {TabRoutes} from '@navigation';
import {Colors, height} from '@constant';
import {About, Explore, Home, Projects} from '@screen';

const {Screen, Navigator} = createBottomTabNavigator<TabRoutes>();

export default function TabNavigator() {
  return (
    <Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarIcon: ({color}) => {
          const name: IconName = getName(route.name);
          return <Icon {...{color, name}} style={{marginTop: 5}} />;
        },

        tabBarHideOnKeyboard: true,
        tabBarLabel: ({color}) => {
          return (
            <Text
              color={color}
              variant="bold"
              numberOfLines={1}
              adjustsFontSizeToFit={true}>
              {route.name}
            </Text>
          );
        },
        tabBarStyle: [
          Platform.OS === 'android'
            ? {height: height * 0.07}
            : {height: height * 0.1},
        ],
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="Explore" component={Explore} />
      <Screen name="Projects" component={Projects} />
      <Screen name="About" component={About} />
    </Navigator>
  );
}

const getName = (name: string) => {
  switch (name) {
    case 'Home':
      return 'home';
    case 'Card':
      return 'card';
    case 'Transfer':
      return 'transfer';
    case 'Budget':
      return 'budget';
    case 'More':
      return 'menu';

    default:
      return 'home';
  }
};
