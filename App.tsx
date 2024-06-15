import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome and don't give up</Text>
      <View style={styles.flexWrap}>
        <Text>Tab 1</Text>
        <Text>Tab 2</Text>
        <Text>Tab 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  flexWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
