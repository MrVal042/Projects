import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {Colors, height, width} from '@constant';
import {Icon} from '@assets';

interface IBottomSheet {
  enableCloseOnTouch?: boolean;
  children: React.ReactNode;
}
export type IBottomSheetRef = {
  handleOpen: () => void;
  handleClose: () => void;
};
const CLOSE_SIZE = 30;
const TIME = 2000;
const OFFSET = -height / 2;
const MAX_HEIGHT = -height + 20;
React.forwardRef<IBottomSheetRef, IBottomSheet>;

export const BottomSheet = forwardRef<IBottomSheetRef, IBottomSheet>(
  ({children, enableCloseOnTouch}, ref) => {
    const translationY = useSharedValue(0);
    const context = useSharedValue({y: 0});
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
      scrollTo(OFFSET);
    };

    const handleClose = () => {
      scrollTo(0);
      setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({handleClose, handleOpen}), [
      handleClose,
      handleOpen,
    ]);

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      translationY.value = withSequence(
        withTiming(destination - 30, {duration: TIME / 2}),
        withTiming(destination, {duration: TIME / 2}),
      );
      context.value = {y: destination};
    }, []);

    const handleGesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translationY.value};
      })
      .onUpdate(event => {
        translationY.value = event.translationY + context.value.y;
        translationY.value = Math.max(translationY.value, -height);
      })
      .onEnd(() => {
        if (translationY.value >= OFFSET - 50) {
          scrollTo(OFFSET);
        } else if (translationY.value < height / 1.1) {
          scrollTo(MAX_HEIGHT);
        }
      });

    const animatedStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translationY.value,
        [MAX_HEIGHT + 10, MAX_HEIGHT],
        [30, 5],
        Extrapolation.CLAMP,
      );
      return {
        borderRadius,
        transform: [{translateY: translationY.value}],
      };
    });
    const flapperStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translationY.value,
        [0, OFFSET],
        [0, 0.7],
        Extrapolation.CLAMP,
      );
      return {
        opacity,
        flex: 1,
      };
    });
    return (
      <>
        <Animated.View
          style={[styles[isOpen ? 'flapper' : 'close'], flapperStyle]}>
          <Pressable
            style={styles[isOpen ? 'flapper' : 'close']}
            onPress={enableCloseOnTouch ? handleClose : null}
          />
        </Animated.View>
        <Animated.View
          style={[styles[isOpen ? 'container' : 'close'], animatedStyle]}>
          <GestureDetector gesture={handleGesture}>
            <View style={styles.header}>
              <View />
              <View style={styles.line} />
              <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
                <Icon
                  onPress={handleClose}
                  name="close"
                  color={Colors.text}
                  size={(CLOSE_SIZE / 4) * 0.6}
                />
              </TouchableOpacity>
            </View>
          </GestureDetector>
          {children}
        </Animated.View>
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderBlockColor: Colors.darkGrey,
    backgroundColor: Colors.background,
    position: 'absolute',
    alignSelf: 'center',
    height: height,
    top: height,
    borderRadius: 30,
    borderWidth: 0.2,
    paddingVertical: 20,
    width,
  },
  line: {
    backgroundColor: Colors.grey,
    height: 10,
    width: '50%',
    borderRadius: 5,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  closeBtn: {
    borderWidth: 1,
    borderRadius: CLOSE_SIZE / 2,
    padding: 2,
    height: CLOSE_SIZE,
    width: CLOSE_SIZE,
    alignItems: 'center',
    borderColor: Colors.text,
    justifyContent: 'center',
  },
  flapper: {
    backgroundColor: Colors.black,
    opacity: 0.7,
    position: 'absolute',
    height,
    width,
    alignSelf: 'center',
    top: -113,
  },
  close: {bottom: -height, top: height, display: 'none'},
});

export default BottomSheet;
