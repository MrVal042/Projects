import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import FastImage from 'react-native-fast-image';
import {Button, Divider, RootContainer} from '@component';

const dummyImag = 'https://unsplash.it/400/400?image=1';

const BUTTONS_SIZE = 10;

import {Options, openCamera, openPicker} from 'react-native-image-crop-picker';
import store, {showToast} from '@store';
import {handleError} from '@utils';
import {Colors} from '@constant';
import {Icon} from '@assets';

export default function Camera() {
  const [photo, setPhoto] = useState<
    | {
        base64: string;
        mediaType: string;
        height: number;
        width: number;
        size: number;
        filename: string;
        sourceURL: string;
        localIdentifier: string;
      }
    | undefined
  >();

  const takePicture = async (type: 'camera' | 'picker') => {
    const result = await handleCamera({type});
    setPhoto(result);
  };

  return (
    <RootContainer title="Camera">
      {photo ? (
        <FastImage
          style={styles.img}
          source={{
            uri: validateImgSrc(photo?.sourceURL),
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      ) : (
        <View style={[styles.img, {borderColor: Colors.grey}]}>
          <Icon name="user" size={50} />
        </View>
      )}
      <Divider />
      <Button
        variants="secondary"
        label={`${photo ? 'Retake' : 'Take'} picture`}
        onPress={() => takePicture('camera')}
      />
      <Divider />
      <Button
        label={`${photo ? 'Select another' : 'Choose'} photo`}
        onPress={() => takePicture('picker')}
      />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '70%',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 0.2,
    justifyContent: 'center',
  },

  button: {
    borderWidth: 0.5,
    borderRadius: BUTTONS_SIZE * 1.7,
    margin: BUTTONS_SIZE / 2,
    minWidth: '30%',
    alignItems: 'center',
    padding: BUTTONS_SIZE,
  },
});

const handleCamera = async ({
  type,
  height = 400,
  useFrontCamera,
  width = 300,
}: {
  type: 'camera' | 'picker';
  height?: number;
  width?: number;
  useFrontCamera?: boolean;
}) => {
  const options: Options = {
    height: height,
    useFrontCamera,
    includeBase64: true,
    mediaType: 'photo',
    compressImageQuality: 1,
    multiple: false,
    cropping: true,
    forceJpg: true,
    width,
  };
  try {
    const photo =
      type === 'camera' ? await openCamera(options) : await openPicker(options);

    return {
      base64: photo.data || '',
      mediaType: photo.mime,
      height: photo.height,
      width: photo.width,
      size: photo.size,
      filename: photo.filename || 'dotPhoto.jpg',
      sourceURL: photo.sourceURL || photo.path,
      localIdentifier: photo.localIdentifier || '',
    };
  } catch (error) {
    const err = handleError(error);
    console.log('error occurred:', error);
    store.dispatch(
      showToast({
        title: 'Error occurred',
        status: 'error',
        message: err.message || 'unknown error',
      }),
    );

    return;
  }
};

const validateImgSrc = (src?: string) => {
  if (src?.trim() === '') {
    return dummyImag;
  }
  const isValidUrl = typeof src === 'string';
  return isValidUrl ? src.replace('http:', 'https:') : dummyImag;
};
