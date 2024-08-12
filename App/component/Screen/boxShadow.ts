import {Colors} from '@constant';
import {Platform} from 'react-native';

const backgroundColor = Colors.background;
const shadowColor = Colors.black;
const borderRadius = 15;
const shadowHeight = 0.5;

const boxShadow =
  Platform.OS === 'ios'
    ? {
        shadowColor,
        backgroundColor,
        shadowOffset: {width: 0, height: shadowHeight},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius,
      }
    : {
        borderRadius,
        elevation: shadowHeight + 2,
        backgroundColor,
        borderTopWidth: 0.2,
      };

export default boxShadow;
