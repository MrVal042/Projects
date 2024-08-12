import {configureStore} from '@reduxjs/toolkit';
// import createDebugger from 'redux-flipper';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducer from './reducer';

import {apiMiddleware} from '@service';
import {cta, rtkQueryErrorLogger} from './middleware';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['ui', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(cta, apiMiddleware, rtkQueryErrorLogger),
  reducer: persistedReducer,
});

// eslint-disable-next-line prefer-const
export let persistor = persistStore(store);

export default store;
export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
