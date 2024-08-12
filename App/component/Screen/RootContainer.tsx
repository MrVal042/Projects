import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import React from 'react';
import {
  ColorValue,
  Keyboard,
  Pressable,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  DimensionValue,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {Colors, responsiveSizes, width} from '@constant';
import {Icon} from '@assets';
import Text from './Text';

interface RootContainerProps extends SafeAreaViewProps {
  backgroundColor?: ColorValue;
  headerBackgroundColor?: ColorValue;
  hideBackIcon?: boolean;
  onBackPress?: () => void;
  rightAdornment?: JSX.Element;
  title?: string;
  titleWidth?: string;
  rightAdornmentWidth?: number | `${string}%`;
  marginBottom?: number;
  marginTop?: number;
  headerChildren?: React.ReactNode;
  backIcon?: Extract<IconName, 'close' | 'chevron-left'>;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  style?: StyleProp<ViewStyle>;
  barStyle?: StatusBarStyle;
  children?: React.ReactNode;
  height?: DimensionValue;
  hasForm?: boolean;
}

const {padding} = responsiveSizes;

const RootContainer: React.FC<RootContainerProps> = ({
  backgroundColor = Colors.background,
  headerBackgroundColor,
  backIcon = 'chevron-left',
  hideBackIcon = false,
  marginBottom = 10,
  rightAdornment,
  marginTop,
  alignItems,
  onBackPress,
  style,
  hasForm,
  children,
  barStyle,
  title,
  headerChildren,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  const {bottom} = insets;
  const RenderHeader = () => {
    const navigation = useNavigation();
    const handleBackIcon = () => navigation.canGoBack() && navigation.goBack();
    if (headerChildren) {
      return <View>{headerChildren}</View>;
    }
    return (
      <View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor || backgroundColor,
            paddingVertical: 7.5,
          },
          style,
        ]}>
        {navigation.canGoBack() && !hideBackIcon ? (
          <Icon
            showWrap
            name={backIcon || 'chevron-left'}
            color={Colors.primary}
            onPress={() => {
              if (onBackPress) {
                onBackPress();
              } else {
                handleBackIcon();
              }
            }}
          />
        ) : (
          <View style={{width: '10%'}} />
        )}
        {title ? (
          <Text
            numberOfLines={1}
            variant="title"
            textAlign="center"
            style={{maxWidth: '80%'}}>
            {title}
          </Text>
        ) : (
          <View style={{flex: 1, maxWidth: '50%'}} />
        )}
        {rightAdornment ? (
          <View style={{width: '10%'}}>{rightAdornment}</View>
        ) : (
          <View style={{width: '10%'}} />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginBottom: -bottom,
        backgroundColor: headerBackgroundColor || backgroundColor,
      }}>
      <StatusBar
        backgroundColor={headerBackgroundColor || 'transparent'}
        barStyle={
          barStyle || headerBackgroundColor ? 'light-content' : 'dark-content'
        }
      />
      <RenderHeader />
      <Pressable
        {...props}
        onPress={() => Keyboard.dismiss()}
        style={{
          flex: 1,
          backgroundColor,
          paddingTop: 10,
          paddingHorizontal: 15,
        }}>
        {hasForm ? (
          <KeyboardAvoidingView behavior="height">
            {children}
          </KeyboardAvoidingView>
        ) : (
          children
        )}
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: padding,
    width,
  },
  backIcon: {
    width: 30,
    height: 30,
    borderRadius: 6,
    padding: 7.5,
    backgroundColor: `${Colors.primary}33`,
  },
});
export default RootContainer;
