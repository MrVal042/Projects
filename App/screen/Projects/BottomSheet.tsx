import React, {useRef} from 'react';
import {ComingSoon, Text, RootContainer, Divider} from '@component';
import {View} from 'react-native';
import {BottomSheet} from '@base';
import {IBottomSheetRef} from 'base/BottomSheet';
import {Colors} from '@constant';

export default function BottomSheetScreen() {
  const ref = useRef<IBottomSheetRef>(null);

  return (
    <RootContainer title="BottomSheet">
      <ComingSoon
        title={`Hey!. Touch me, \n\n i have a surprise for you`}
        disableComingSoon
        onTouchText={() => {
          ref.current?.handleOpen();
        }}
      />
      <Divider space="l" />
      <BottomSheet ref={ref} enableCloseOnTouch>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: Colors.lightGrey,
          }}>
          <Divider space="xl" />
          <Text variant="title">Try to drag me up or down</Text>
          <Divider />
          <Text variant="bold">I promise to follow you</Text>
        </View>
      </BottomSheet>
    </RootContainer>
  );
}
