import React from 'react';
import {GalleryImageProps, useGetImages} from '@hooks';

import {
  StatusBar,
  FlatList,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Divider, RootContainer, Text} from '@component';
import {Colors} from '@constant';
import {ProjectRoutes, StackNavigationProps} from '@navigation';

const {width, height} = Dimensions.get('screen');

const IMAGE_SIZE = width / 3.35;
const IMAGE_GAP = (width - IMAGE_SIZE * 3) * 0.05;

export default function Gallery({
  navigation,
}: StackNavigationProps<ProjectRoutes, 'Gallery'>) {
  const {data, isLoading} = useGetImages();

  if (!data?.photos && isLoading) {
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
    <RootContainer title="Gallery">
      <FlatList
        ListHeaderComponent={<Divider space="m" />}
        numColumns={3}
        data={data?.photos}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, indx) => String(indx)}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              if (data?.photos) {
                navigation.navigate('GalleryView', {
                  data: data?.photos as GalleryImageProps[],
                  photoIndex: index,
                });
              }
              return;
            }}>
            <Image
              resizeMode="cover"
              src={item.src.portrait}
              alt={item.src.portrait}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE * 1.5,
                borderWidth: 0.5,
                borderRadius: IMAGE_SIZE / 10,
                margin: IMAGE_GAP,
              }}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{paddingBottom: width * 0.1}}
      />
    </RootContainer>
  );
}
