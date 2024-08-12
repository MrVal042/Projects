import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Camera} from '@component';

const BUTTONS_SIZE = 10;
export default function TestScreen() {
  return (
    <View>
      <View style={styles.flexWrap}>
        <TouchableOpacity style={styles.button}>
          <Text>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Tab 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Tab 3</Text>
        </TouchableOpacity>
      </View>
      <Camera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  button: {
    borderWidth: 0.5,
    borderRadius: BUTTONS_SIZE * 1.7,
    margin: BUTTONS_SIZE / 2,
    minWidth: '30%',
    alignItems: 'center',
    padding: BUTTONS_SIZE,
  },
  flexWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
