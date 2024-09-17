import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '@assets';
import {projects} from '@data';
import {Colors} from '@constant';
import {useDimensions} from '@hooks';
import {capitalize, searchData} from '@utils';
import {Divider, RootContainer, Text} from '@component';
import {AppRoute, useStackNavigationProp} from '@navigation';

const BUTTONS_SIZE = 10;
export default function ProjectScreen() {
  const navigation =
    useNavigation<useStackNavigationProp<AppRoute, 'HomeScreen'>>();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const {width} = useDimensions();

  const iconSpace = width * 0.03;
  const iconSize = {
    marginRight: iconSpace,
    height: width * 0.3,
    width: width / 4.8,
  };

  // Simulate a loading period to mimic async data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate data load complete
    }, 1000); // You can replace this with actual data fetching logic
    return () => clearTimeout(timer);
  }, []);

  // Memoized search results to avoid re-computation on every render
  const filteredProjects = useMemo(() => {
    return searchData({
      query,
      queryItem: 'name',
      queryData: projects,
    });
  }, [query]);

  const renderItem = useCallback(
    ({item}: {item: IProjectProps}) => (
      <Pressable style={[styles.appWrap, iconSize]}>
        <TouchableOpacity
          style={[styles.app]}
          onPress={() =>
            item.name === 'About'
              ? navigation.navigate('TabNavigator', {screen: 'More'})
              : navigation.navigate('ProjectNavigator', {
                  screen: 'Entry',
                  params: {
                    item,
                  },
                })
          }>
          <Icon name={item.icon} size={9} />
        </TouchableOpacity>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={{
            color: Colors.text,
            fontWeight: '600',
            textAlign: 'justify',
          }}>
          {capitalize(item.name)}
        </Text>
      </Pressable>
    ),
    [navigation, iconSize],
  );

  return (
    <RootContainer hideBackIcon>
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
      {isLoading ? (
        <View style={styles.loader}>
          <Text>Please wait, Loading projects...</Text>
          <Divider />
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <FlatList
          numColumns={4}
          windowSize={3} // Number of windows worth of items to render
          renderItem={renderItem}
          data={filteredProjects}
          initialNumToRender={10} // Load fewer items initially to improve performance
          removeClippedSubviews={true} // Improves performance by unmounting off-screen components
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, indx) => String(indx)}
          ListFooterComponent={<Divider space="m" />}
        />
      )}
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
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
  appWrap: {
    alignItems: 'center',
    marginBottom: 10,
  },
  app: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 20,
    padding: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGrey,
  },
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
