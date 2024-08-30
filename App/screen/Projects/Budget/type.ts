type SubCategories =
  | '401(k)'
  | 'Accessories'
  | 'Books/Supplies'
  | 'Car Insurance'
  | 'Car payment'
  | 'Charitable contributions'
  | 'Cleaning products'
  | 'Clothes'
  | 'Concerts'
  | 'Cooking Gas'
  | 'Cosmetics'
  | 'Credit card payments'
  | 'Dental Care'
  | 'Dining Out'
  | 'Doctor Visits'
  | 'Electricity'
  | 'Education'
  | 'Education Savings'
  | 'Emergency Fund'
  | 'Gas/Fuel'
  | 'Gifts for Birthdays/Holidays'
  | 'Groceries'
  | 'Gym memberships'
  | 'Haircuts'
  | 'Health Insurance'
  | 'Home Maintenance/Repairs'
  | "Homeowner's insurance"
  | 'Hobbies'
  | 'Insurance'
  | 'Internet'
  | 'Investment Accounts'
  | 'IRA'
  | 'Magazine subscriptions'
  | 'Medications/Prescriptions'
  | 'mortgage'
  | 'Movies'
  | 'Online Courses'
  | 'Other Debts'
  | 'Paper products'
  | 'Parking/Tolls'
  | 'Personal loans'
  | 'Pet expenses'
  | 'Phone'
  | 'Property taxes'
  | 'Public Transportation'
  | 'Rent'
  | 'Retirement Savings (401k| IRA)'
  | 'Savings for specific goals like a down payment'
  | 'Savings for unexpected expenses'
  | 'Shoes'
  | 'Snacks/Beverages'
  | 'Streaming services'
  | 'Student loans'
  | 'Tithing/Religious Contributions'
  | 'Toiletries'
  | 'Tuition/School Fees'
  | 'Travel'
  | 'Unexpected costs'
  | 'Vehicle Maintenance/Repairs'
  | 'Vision Care'
  | 'Vacation'
  | 'Water';

type FixedCategory =
  | 'Debt Payments'
  | 'Housing'
  | 'Subscriptions'
  | 'Transportation'
  | 'Utilities';

type VariableCategory =
  | 'Entertainment'
  | 'Education'
  | 'Food'
  | 'Gifts and Donations'
  | 'Health and Medical'
  | 'Household Supplies'
  | 'Miscellaneous'
  | 'Personal Care';

type SavingCategory =
  | 'Emergency'
  | 'Goal-Based Savings'
  | 'Investment'
  | 'Retirement: 401(k)| IRA';

  type BudgetStatus = "completed" | "pending" | "active"

type BudgetProps = {
  createdAt: string;
  type: 'Fixed' | 'Variable' | 'Saving & Investment';
  category: FixedCategory | VariableCategory | SavingCategory;
  status: BudgetStatus;
  subCategory: SubCategories;
  completedAt: string;
  expiredOn: string;
  amount: number;
  spent: number;
  month: string;
  year: string;
};
