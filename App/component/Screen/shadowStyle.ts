import {Colors} from '@constant';
import {Platform} from 'react-native';

const backgroundColor = Colors.background;
const shadowColor = Colors.black;
const borderRadius = 10;
const shadowHeight = 5;

export const shadowStyle =
  Platform.OS === 'ios'
    ? {
        backgroundColor,
        shadowColor,
        shadowOffset: {width: 0, height: shadowHeight},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius,
      }
    : {
        backgroundColor,
        borderRadius,
        elevation: shadowHeight,
      };

export default shadowStyle;
