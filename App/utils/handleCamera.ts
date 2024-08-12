import {DotImages} from '@assets';
import {Options, openCamera, openPicker} from 'react-native-image-crop-picker';

export const handleCamera = async ({
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
    multiple: false,
    forceJpg: true,
    width,
  };

  const photo =
    type === 'camera' ? await openCamera(options) : await openPicker(options);

  return {
    size: photo.size,
    width: photo.width,
    height: photo.height,
    mediaType: photo.mime,
    base64: photo.data || '',
    sourceURL: photo.sourceURL || photo.path,
    filename: photo.filename || 'dotPhoto.jpg',
    localIdentifier: photo.localIdentifier || '',
  };
};

export const validateImgSrc = (src?: string, alt?: string) => {
  if (src?.trim() === '') {
    return DotImages.avatar;
  }
  const isValidUrl = typeof src === 'string';
  return isValidUrl
    ? {uri: src.replace('http:', 'https:') || alt?.replace('http:', 'https:')}
    : DotImages.avatar;
};
