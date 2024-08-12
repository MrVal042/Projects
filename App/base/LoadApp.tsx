import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigation/navigationRef';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from './Toast';
import { AppNavigator } from '@navigation';

export default function LoadApp() {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <AppNavigator />
        <Toast />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
