import {View} from 'react-native';
import React, {useEffect} from 'react';
import {RootContainer} from '@component';
import {
  AppRoute,
  ProjectRoutes,
  StackNavigationProps,
  useStackNavigationProp,
} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@assets';
import {Colors} from '@constant';

export default function RenderProjects({
  route,
}: StackNavigationProps<ProjectRoutes, 'Entry'>) {
  const {item} = route.params;
  const navigation =
    useNavigation<useStackNavigationProp<AppRoute, 'ProjectNavigator'>>();

  useEffect(() => {
    const subscribe = setTimeout(() => {
      if (item.name) {
        navigation.replace('ProjectNavigator', {
          screen: item.name,
          params: {item},
        });
      }
    }, 1500);
    return () => clearTimeout(subscribe);
  }, []);

  return (
    <RootContainer hideBackIcon>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name={item.icon} size={30} color={Colors.primary} />
      </View>
    </RootContainer>
  );
}
