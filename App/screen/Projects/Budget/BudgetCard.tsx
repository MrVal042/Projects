import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppRoute, useStackNavigationProp} from '@navigation';
import {Divider, shadowStyle, Text} from '@component';
import {Colors} from '@constant';
import {formatCurrency} from '@utils';

export const RenderStatus = ({
  status,
  textAlign,
  style,
}: {
  status: BudgetStatus;
  textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify';
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <Text
      {...{style, textAlign}}
      variant="light"
      textTransform="capitalize"
      color={
        Colors[
          status === 'active'
            ? 'green'
            : status === 'pending'
            ? 'orange'
            : 'primary'
        ]
      }>
      {status}
    </Text>
  );
};
export default function BudgetCard({item}: {item: BudgetProps}) {
  const navigation =
    useNavigation<useStackNavigationProp<AppRoute, 'HomeScreen'>>();
  return (
    <TouchableOpacity
      style={[styles.container, shadowStyle]}
      onPress={() => navigation.navigate('BudgetDetail', {item})}>
      <View style={styles.flexWrap}>
        <Text variant="title">{item.type} Budget</Text>
        <RenderStatus status={item.status} />
      </View>
      <Divider space="t" />
      <Text>
        You have budgeted of{' '}
        <Text variant="bold">{formatCurrency(item.amount, 'USD')}</Text> for
        <Text variant="bold"> {item.subCategory}</Text>
      </Text>
      <Divider space="t" />
      <Text>Duration: {item.month}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  flexWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2.5,
  },
});
