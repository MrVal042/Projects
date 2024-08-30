import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import {Colors} from '@constant';

interface ITextProps extends TextProps {
  variant?:
    | 'title'
    | 'body'
    | 'bold'
    | 'small'
    | 'light'
    | 'extrabold'
    | 'semiBold';
  size?: TextStyle['fontSize'];
  style?: StyleProp<TextStyle>;
  textAlign?: TextStyle['textAlign'];
  children?: React.ReactNode | string;
  color?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

export default function VaText({
  children,
  color = Colors.text,
  style,
  variant,
  textAlign,
  size,
  textTransform,
  ...props
}: ITextProps) {
  const styles = ((): StyleProp<TextStyle> => {
    switch (variant) {
      case 'title':
        return {fontWeight: '600', fontSize: size || 16};
      case 'bold':
        return {fontWeight: '600', fontSize: size || 14};
      case 'extrabold':
        return {fontWeight: '700', fontSize: size || 14};
      case 'light':
        return {fontWeight: '300', fontSize: size || 13};
      case 'semiBold':
        return {fontWeight: '500', fontSize: size || 13};
      case 'small':
        return {fontWeight: '300', fontSize: size || 12};
      default:
        return {fontWeight: '400', fontSize: size || 14};
    }
  })();
  return (
    <Text {...props} style={[styles, {textAlign, color, textTransform}, style]}>
      {children}
    </Text>
  );
}
