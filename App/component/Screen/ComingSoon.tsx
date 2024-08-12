import {View, Text} from 'react-native';
import React from 'react';

export default function ComingSoon({title}: {title: string}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{title} Coming Soon</Text>
    </View>
  );
}
