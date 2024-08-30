import React from 'react';
import {ComingSoon, Divider, RootContainer, Text} from '@component';
import {FlatList} from 'react-native';
import {budgetData} from './data';
import BudgetCard from './BudgetCard';

export default function Budget() {
  /**
   income | expenses
   add INCOME = salary| business| interest| trade| rental| realized
   add EXPENSE
  
   */
  return (
    <RootContainer title="Budget">
      <Text>
        <Text variant="bold">Do you know?: </Text>A budget is a financial plan
        that helps you track your income and expenses.
      </Text>
      <Divider />
      <Text variant="bold">September Budgets</Text>
      <Divider space="s" />
      <FlatList
        data={budgetData}
        keyExtractor={(_, indx) => String(indx)}
        renderItem={({item}) => <BudgetCard {...{item}} />}
      />
      <Text>INCOME</Text>
      <Text>EXPENSE</Text>
      <Text>Add Budget</Text>
    </RootContainer>
  );
}
