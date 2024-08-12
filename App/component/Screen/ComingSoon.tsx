import {View} from 'react-native';
import React from 'react';
import {Button, Divider, Text} from '@component';

export default function ComingSoon({
  title,
  onPress,
}: {
  title?: string;
  onPress?: () => void;
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text textAlign="center">{title} Coming Soon</Text>
      <Divider />
      {onPress ? (
        <Button label="Got it" onPress={onPress} style={{width: '70%'}} />
      ) : null}
    </View>
  );
}
