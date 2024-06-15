import {
  StyleSheet,
  Button,
  View,
  ButtonProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Text from './Text';

interface IButtonProps extends ButtonProps {
  variants?: 'primary' | 'secondary';
  title: string;
}
export default function VaButton({variants, title, ...props}: IButtonProps) {
  switch (variants) {
    case 'secondary':
      return (
        <TouchableOpacity style={styles.button}>
          <Text>{title}</Text>
        </TouchableOpacity>
      );

    default:
      return (
        <View>
          <Button {...{title, props}} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 'auto',
  },
});
