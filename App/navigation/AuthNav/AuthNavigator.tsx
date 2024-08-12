import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {AuthRoutes} from '../types';
import {
  ConfirmCode,
  ForgotPassword,
  Login,
  ResetPassword,
  SignUp,
} from '@screen';
import {useDotSelector} from '@store';
import {OnboardNavigator} from '@navigation';

const {Group, Navigator, Screen} = createStackNavigator<AuthRoutes>();

export default function AuthNavigator(): JSX.Element {
  const {isNewUser, isUserOnboarded} = useDotSelector(state => state.ui);
  return isUserOnboarded ? (
    <Navigator initialRouteName={isNewUser ? 'Login' : 'SignUp'}>
      <Group
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerMode: 'screen',
          headerShown: false,
        }}>
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="ResetPassword" component={ResetPassword} />
        <Screen name="ConfirmCode" component={ConfirmCode} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Login" component={Login} />
      </Group>
    </Navigator>
  ) : (
    <OnboardNavigator />
  );
}
