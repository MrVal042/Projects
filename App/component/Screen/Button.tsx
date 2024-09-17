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
  disabled?: boolean;
  onPress?: () => void;
  marginBottom?: number;
}
const BUTTONS_SIZE = 10;

export default function VaButton({
  variants,
  label,
  marginBottom = 20,
  disabled,
  ...props
}: IButtonProps) {
  switch (variants) {
    case 'secondary':
      return (
        <TouchableOpacity
          disabled={disabled}
          {...props}
          style={[
            styles.button,
            props.style,
            {
              width: '95%',
              marginBottom,
              borderColor: disabled ? Colors.grey : Colors.primary,
              backgroundColor: disabled ? Colors.lightGrey : undefined,
            },
          ]}>
          <Text color={disabled ? Colors.grey : Colors.primary}>{label}</Text>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          {...props}
          disabled={disabled}
          style={[
            styles.button,
            props.style,
            {
              backgroundColor: disabled
                ? Colors.inactiveButton
                : Colors.primary,
              width: '95%',
              marginBottom,
            },
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
