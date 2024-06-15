import {Text, TextProps} from 'react-native';
import React, {ReactNode} from 'react';

interface ITextProps extends TextProps {
  variants?: 'primary' | 'secondary';
  children?: ReactNode | string;
}

export default function VaText({children, ...props}: ITextProps) {
  return <Text {...{props}}>{children}</Text>;
}
