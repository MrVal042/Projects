import {StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useDimensions} from '@hooks';
import {Button, Divider, Text} from '@component';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {Colors} from '@constant';

const TIME = 2000;
export default function ComingSoon({
  title,
  onPress,
}: {
  title?: string;
  onPress?: () => void;
}) {
  const {height} = useDimensions();
  const linear = useSharedValue<number>(0);
  const pressed = useSharedValue<boolean>(false);
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{translateY: linear.value}],
  }));

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const OFFSET = height / 10;
  React.useEffect(() => {
    linear.value = withDelay(
      TIME / 4,
      withSequence(
        // start from -OFFSET
        withTiming(-OFFSET, {duration: TIME / 2}),
        // shake between -OFFSET and OFFSET 5 times
        withRepeat(withTiming(OFFSET, {duration: TIME}), 3, true),
        // go back to 0 at the end
        withTiming(0, {duration: TIME / 2}),
      ),
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    color: pressed.value ? Colors.green : Colors.text,
    transform: [{scale: withTiming(pressed.value ? 1.2 : 1)}],
  }));
  const secondStyles = useAnimatedStyle(() => ({
    opacity: withTiming(pressed.value ? 1 : 0, {duration: 100}),
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={tap}>
        <Animated.View style={[styles.box, animatedChanged, animatedStyles]}>
          <Animated.View style={[styles.box, secondStyles]}>
            <Text textAlign="center" color={Colors.primary}>
              Hey!....Don't touch me
            </Text>
          </Animated.View>
          <Text textAlign="center" style={styles.text}>
            {title} Coming Soon {pressed.value}
          </Text>
          {pressed.value ? (
            <Text textAlign="center">Hey!....Don't touch me</Text>
          ) : null}
        </Animated.View>
      </GestureDetector>
      <Divider />
      {onPress ? (
        <Button label="Got it" onPress={onPress} style={{width: '70%'}} />
      ) : null}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    // height: 80,
    width: '100%',
    margin: 20,
    alignSelf: 'center',
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
