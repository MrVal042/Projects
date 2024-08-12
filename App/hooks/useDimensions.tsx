import {useWindowDimensions} from 'react-native';

export default function useDimensions() {
  const {fontScale, height, scale, width} = useWindowDimensions();
  const spacing = {small: width * 0.01, default: 0, medium: 0, large: 0};
  const fontSize = {small: fontScale * 0.01, text: fontScale, title: fontScale};

  return {fontSize, height, scale, spacing, width};
}
