import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const {actions, reducer} = createSlice({
  initialState: {
    code: 'NG',
    country: 'Nigeria',
    currency: 'NGN',
    name: 'Naira',
  },
  name: 'currency',
  reducers: {
    resetCurrency: state => {
      state.code = '';
      state.country = 'Nigeria';
      state.currency = '';
      state.name = '';
    },
    setCurrency: (
      state,
      action: PayloadAction<{
        code: string;
        country: FlagName;
        currency: string;
        name: string;
      }>,
    ) => {
      state.code = action.payload.code;
      state.country = action.payload.country;
      state.currency = action.payload.currency;
      state.name = action.payload.name;
    },
  },
});

export const {resetCurrency, setCurrency} = actions;

export default reducer;
