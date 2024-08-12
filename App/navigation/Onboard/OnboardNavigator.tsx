import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Onboard } from '@screen'

type OnboardRoutes = {
  Onboard: undefined
}

const { Navigator, Screen } = createStackNavigator<OnboardRoutes>()

export default function OnboardNavigator(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Onboard' component={Onboard} />
    </Navigator>
  )
}
