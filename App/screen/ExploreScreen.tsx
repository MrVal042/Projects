import React, {useState} from 'react';
import {ComingSoon, RootContainer} from '@component';
import {Icon} from '@assets';
import {Colors} from '@constant';
import {View, TextInput, Platform, StyleSheet} from 'react-native';
import {useStackNavigationProp, AppRoute} from '@navigation';
import {useNavigation} from '@react-navigation/native';

export default function ExploreScreen() {
  const navigation =
    useNavigation<useStackNavigationProp<AppRoute, 'HomeScreen'>>();
  const [query, setQuery] = useState('');

  return (
    <RootContainer title="Explore" hideBackIcon>
      <View style={styles.inputWrap}>
        <Icon name="search" size={4.5} />
        <TextInput
          placeholder="Search...."
          style={styles.input}
          value={query}
          onChangeText={txt => setQuery(txt)}
        />
        <Icon
          size={4.5}
          color={query ? Colors.darkGrey : undefined}
          name={
            query
              ? 'close-round'
              : Platform.OS === 'android'
              ? 'google'
              : 'apple'
          }
        />
      </View>
      <ComingSoon title="Explore" onPress={() => navigation.goBack()} />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  inputWrap: {
    borderWidth: 0.2,
    borderRadius: 20,
    height: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },
  input: {
    padding: 10,
    flex: 1,
    color: Colors.text,
  },
});
