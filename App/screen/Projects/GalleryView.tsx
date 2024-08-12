import {Icon} from '@assets';
import {Text} from '@component';
import {SPACING, Colors, width, height} from '@constant';
import {GalleryImageProps} from '@hooks';
import {ProjectRoutes} from '@navigation';
import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';

export default function GalleryView({
  navigation,
  route,
}: StackScreenProps<ProjectRoutes, 'GalleryView'>) {
  const {data, photoIndex} = route.params;
  const topRef = React.useRef<FlatList>(null);
  const bottomRef = React.useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = React.useState(photoIndex || 0);

  React.useEffect(() => {
    scrollToActiveIndex(activeIndex);
  }, [photoIndex]);

  const IMAGE_SIZE = width * 0.2;
  const IMAGE_SPACING = SPACING * 0.6;
  const ITEM_HEIGHT = width;

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
    topRef.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + IMAGE_SPACING) - IMAGE_SIZE / 2 > width / 2) {
      bottomRef.current?.scrollToOffset({
        offset:
          index * (IMAGE_SIZE + IMAGE_SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      bottomRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (!data) {
    return (
      <View
        style={{
          backgroundColor: Colors.background,
          paddingTop: StatusBar.currentHeight || width * 0.15,
          alignItems: 'center',
          justifyContent: 'center',
          height,
          width,
        }}>
        <Text>Loading ....</Text>
        <ActivityIndicator size={50} />
      </View>
    );
  }
  return (
    <View>
      <StatusBar hidden />
      <FlatList
        ref={topRef}
        horizontal
        pagingEnabled
        data={data as unknown as GalleryImageProps[]}
        style={{
          backgroundColor: Colors.background,
        }}
        initialScrollIndex={activeIndex}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, indx) => String(indx)}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width),
          );
        }}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <Image
                src={item.src.portrait}
                alt={item.src.portrait}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
              />
              <Icon
                showWrap
                name="chevron-left"
                color={Colors.white}
                style={{
                  position: 'absolute',
                  top: Platform.OS === 'ios' ? 50 : 20,
                  left: 10,
                }}
                onPress={() => navigation.goBack()}
              />
            </View>
          );
        }}
      />
      <FlatList
        horizontal
        ref={bottomRef}
        style={{
          position: 'absolute',
          bottom: IMAGE_SIZE,
        }}
        initialScrollIndex={activeIndex}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, indx) => String(indx)}
        data={data as unknown as GalleryImageProps[]}
        contentContainerStyle={{paddingHorizontal: IMAGE_SPACING}}
        getItemLayout={(_, index) => ({
          length: IMAGE_SIZE,
          offset:
            index * (IMAGE_SIZE + IMAGE_SPACING) - width / 2 + IMAGE_SIZE / 2,
          index,
        })}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => scrollToActiveIndex(index)}
              style={{
                borderWidth: 2,
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                marginRight: IMAGE_SPACING,
                borderRadius: IMAGE_SIZE * 0.1,
                borderColor:
                  index === activeIndex ? Colors.background : 'transparent',
              }}>
              <Image
                src={item.src.portrait}
                alt={item.src.portrait}
                style={{flex: 1, borderRadius: IMAGE_SIZE * 0.1}}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        }}
      />
      <StatusBar hidden />
    </View>
  );
}
