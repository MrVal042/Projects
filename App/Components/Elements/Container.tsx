import {
  SafeAreaViewComponent,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import React, {ReactNode} from 'react';

type ContainerProps = {
  children: ReactNode;
};
export default function Container({}: ContainerProps) {
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaViewComponent style={[styles.container, {height, width}]}>
      <Text>VaContainer</Text>
    </SafeAreaViewComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
