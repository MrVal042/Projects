import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import Text from './Text';
import {Colors} from '@constant';

interface IButtonProps extends TouchableOpacityProps {
  variants?: 'primary' | 'secondary';
  label: string;
  onPress?: () => void;
}
const BUTTONS_SIZE = 10;

export default function VaButton({variants, label, ...props}: IButtonProps) {
  switch (variants) {
    case 'secondary':
      return (
        <TouchableOpacity
          {...props}
          style={[
            styles.button,
            props.style,
            {width: '95%', borderColor: Colors.primary},
          ]}>
          <Text color={Colors.primary}>{label}</Text>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          {...props}
          style={[
            styles.button,
            props.style,
            {backgroundColor: Colors.primary, width: '95%'},
          ]}>
          <Text color={Colors.white}>{label}</Text>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    borderRadius: BUTTONS_SIZE * 1.7,
    margin: BUTTONS_SIZE / 2,
    minWidth: '30%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    minHeight: BUTTONS_SIZE * 5,
  },
});
