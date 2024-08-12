import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppRoute} from '../types';
import ProjectNavigator from './ProjectNavigator';
import {HomeScreen} from '@screen';
import TabNavigator from './TabNavigator';

const {Navigator, Screen} = createStackNavigator<AppRoute>();

export default function AppNavigator(): JSX.Element {
  return (
    <Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="TabNavigator" component={TabNavigator} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="ProjectNavigator" component={ProjectNavigator} />
      {/* <Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      /> */}
    </Navigator>
  );
}
