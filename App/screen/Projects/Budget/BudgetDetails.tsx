import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Divider, RootContainer, shadowStyle, Text} from '@component';
import {AppRoute, StackNavigationProps} from '@navigation';
import {RenderStatus} from './BudgetCard';
import {formatCurrency} from '@utils';

const RenderList = ({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) => {
  return (
    <View style={styles.flexWrap}>
      <Text style={{flex: 1}} variant="bold" textTransform="capitalize">
        {label}:
      </Text>
      {label.toLowerCase() === 'status' ? (
        <RenderStatus status={value as BudgetStatus} />
      ) : (
        <Text textAlign="left">{value}</Text>
      )}
    </View>
  );
};
export default function BudgetDetails({
  route,
}: StackNavigationProps<AppRoute, 'BudgetDetail'>) {
  const {item} = route.params;
  return (
    <RootContainer title="Budget Details">
      <Divider />
      <View style={[styles.container, shadowStyle]}>
        <Text variant="title" textAlign="center">
          {item.subCategory} Budget
        </Text>
        <Divider />
        <RenderList label="Budget name" value={item.subCategory} />
        <RenderList label="Amount" value={formatCurrency(item.amount)} />
        <RenderList label="Status" value={item.status} />
        <RenderList label="Spent" value={formatCurrency(item.spent)} />
        <RenderList
          label="Remaining"
          value={formatCurrency(item.amount - item.spent)}
        />
        <RenderList label="Type" value={item.type} />
        <RenderList label="Category" value={item.category} />
        <RenderList label="Created on" value={item.createdAt} />
        <RenderList label="Month" value={item.month} />
        <RenderList label="Year" value={item.year} />
        <RenderList label="completedAt" value={item.completedAt} />
      </View>
      <Divider space="xl" />
      <Button label="Got it" />
      <Button label="Got it" variants="secondary" />
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    margin: 1.5,
  },
  flexWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7.5,
  },
});
