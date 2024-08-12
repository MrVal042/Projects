import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {AppStateType} from 'store/store';
import {Endpoints} from './config';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://',
    prepareHeaders: (header, {getState}) => {
      const token = (getState() as AppStateType).app.token?.accessToken;
      token && header.set('Authorization', `Bearer ${token}`);
      return header;
    },
  }),
  endpoints: builder => ({
    getToken: builder.query<string, string>({
      query: body => `${Endpoints.auth}token/${body}`,
    }),
  }),
  tagTypes: [
    'GetUserAccount',
    'GetProfile',
    'GetBudget',
    'Carts',
    'Favourite',
    'GetWallets',
    'GetTransactions',
    'GetRequestHistory',
  ],
});

export const {
  reducer: apiReducer,
  reducerPath: apiReducerPath,
  useGetTokenQuery,
  middleware: apiMiddleware,
  enhanceEndpoints,
  injectEndpoints,
  endpoints,
} = api;
