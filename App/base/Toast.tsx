import {useDispatch} from 'react-redux';
import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Icon} from '@assets';
import {boxShadow} from '@component';
import {Colors, width} from '@constant';
import {resetToast, useDotSelector} from '@store';

const successColor = '#6dcf81';
const failColor = '#bf6060';

const Toaster = () => {
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get('window').height;
  const {message, title, status} = useDotSelector(state => state.toast);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const popIn = () => {
    const toValue =
      Platform.OS === 'ios' ? -windowHeight + 90 : -windowHeight + 50;
    Keyboard.dismiss();
    Animated.timing(popAnim, {
      duration: 300,
      toValue,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(popAnim, {
        duration: 300,
        toValue: windowHeight * -1,
        useNativeDriver: true,
      }).start();
      dispatch(resetToast());
    }, 10000);
  };

  Boolean(message?.trim()) && popIn();

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      duration: 150,
      toValue: windowHeight * -1,
      useNativeDriver: true,
    }).start();

    dispatch(resetToast());
  };

  return message?.trim() ? (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          ...boxShadow,
          transform: [{translateY: popAnim}],
        },
      ]}>
      <View style={styles.toastRow}>
        <Icon
          name={
            status === 'success'
              ? 'tick-circle'
              : status === 'error'
              ? 'info-circle'
              : 'info-circle'
          }
          size={8}
          color={
            status === 'success'
              ? successColor
              : status === 'error'
              ? failColor
              : 'orange'
          }
        />
        <View style={styles.toastText}>
          {title ? (
            <Text
              style={styles.title}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              {title?.toLocaleUpperCase()}
            </Text>
          ) : null}
          <Text
            style={styles.message}
            adjustsFontSizeToFit={true}
            numberOfLines={2}>
            {message}
          </Text>
        </View>
        <TouchableOpacity onPress={instantPopOut}>
          <Icon name="close-round" size={7} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  ) : null;
};

export default React.memo(Toaster);

const styles = StyleSheet.create({
  message: {color: Colors.black, fontSize: 12},
  title: {color: Colors.black, fontSize: 15, fontWeight: 'bold'},
  toastContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    bottom: -25,
    justifyContent: 'center',
    paddingVertical: 5,
    position: 'absolute',
    width: width - 30,
    paddingHorizontal: 10,
  },
  toastRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
  },
  toastText: {
    justifyContent: 'center',
    minHeight: 50,
    padding: 2,
    width: '80%',
  },
});
