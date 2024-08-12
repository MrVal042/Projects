import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Animated,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {BG_IMG, Colors, SPACING, width} from '@constant';
import {shadowStyle, Text} from '@component';
import {ProjectRoutes} from '@navigation';
import {Icon} from '@assets';
import {users} from '@data';

export const AVATAR_SIZE = 40;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3.5;

export default function ScrollList({
  navigation,
}: StackScreenProps<ProjectRoutes, 'ScrollList'>) {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Image
        src={BG_IMG}
        style={StyleSheet.absoluteFillObject}
        blurRadius={5}
      />
      <Animated.FlatList
        data={users}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: SPACING * 0.5,
          paddingTop: StatusBar.currentHeight || width * 0.15,
        }}
        keyExtractor={(_, indx) => String(indx)}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={[
                styles.item,
                {
                  backgroundColor: Colors.background,
                  transform: [{scale}],
                  opacity,
                },
              ]}>
              <View style={styles.flexWrap}>
                <Image src={item.avatar} style={styles.avatar} />
                <View>
                  <Text variant="semiBold">{item.fullName}</Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
            </Animated.View>
          );
        }}
      />
      <StatusBar hidden />

      <Icon
        showWrap
        name="chevron-left"
        color={Colors.white}
        size={5}
        style={{
          left: 10,
          position: 'absolute',
          top: Platform.OS === 'ios' ? 30 : 5,
          zIndex: 1000,
        }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  item: {
    ...shadowStyle,
    padding: SPACING,
    marginBottom: SPACING,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING * 0.8,
    borderWidth: 0.5,
  },
  flexWrap: {flexDirection: 'row', alignItems: 'center'},
});
