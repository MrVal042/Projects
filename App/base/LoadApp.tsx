import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigation/navigationRef';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from '@navigation';
import Toast from './Toast';

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
