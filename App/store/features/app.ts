import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
  authEndpoints,
} from '@service';

const initialState: AppState = {
  currentWallet: null,
  deviceId: null,
  group: null,
  isAuthenticated: false,
  userId: '',
  logoutToast: false,
  token: null,
  user: null,
  kycDocs: null,
  userEmail: null,
  userController: null,
  wallets: [],
};

const {actions, reducer} = createSlice({
  extraReducers: builder => {
    builder.addMatcher(
      authEndpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.token = {
          accessToken: payload.result.token,
          refreshToken: payload.result.refreshToken,
          dStr: state.deviceId as string,
        };
        const result = payload.result;
        state.user = {...result};
        const userId = result.applicationUserId;
        state.userId = userId;
        state.isAuthenticated = Boolean(userId);
      },
    );
  },
  initialState,
  name: 'app',
  reducers: {
    logout: (state: AppState) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.wallets = [];
      state.currentWallet = null;
      state.userController = null;
    },
    setLogoutToast: (state, action: PayloadAction<boolean>) => {
      state.logoutToast = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    setUserController: (state, actions: PayloadAction<UserControlProps>) => {
      console.log('userController called:', actions.payload);
      state.userController = actions.payload;
    },
  },
});

export const {
  logout,
  setLogoutToast,
  setUserController,
  setUserEmail,
} = actions;

export default reducer;
