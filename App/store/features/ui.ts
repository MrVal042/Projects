import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialDoc = {
  base64EncodedDocument: '',
  documentType: '',
  mediaType: '',
  documentNumber: '',
};

const initialState: UIState = {
  isNewUser: true,
  isUserOnboarded: false,
  biometric: false,
  hasCAP: false,
  enableScreenShot: false,
  isFingerPrintEnable: false,
  transferOnboarded: false,
  storeOnboarded: false,
  budgetOnboarded: false,
  cardOnboarded: false,
  cameraPermission: '',
  shopOnboarded: false,
  hasProducts: false,
  kycStatus: {
    address: {
      addressType: '',
      city: '',
      code: '',
      country: '',
      line1: '',
      state: '',
      applicationUserId: '',
    },
    accountInfo: {
      phone1: '',
      userName: '',
      title: '',
      dateOfBirth: '',
      maritalStatus: '',
      gender: '',
    },
    docUrl: initialDoc,
    selfieUrl: initialDoc,
  },
};

const {actions, reducer} = createSlice({
  initialState,
  name: 'ui',
  reducers: {
    setIsNewUser: (state: UIState) => {
      state.isNewUser = true;
    },
    setIsUserOnboarded: (state: UIState) => {
      state.isUserOnboarded = true;
    },
    setBiometric: (state: UIState, action: PayloadAction<boolean>) => {
      state.biometric = action.payload;
    },
    updateKYC: (state, action: PayloadAction<KYCProps>) => {
      state.kycStatus = action.payload;
    },
    toggleCAP: state => {
      state.hasCAP = false;
    },
    toggleBudgetOnBoard: (state: UIState) => {
      state.budgetOnboarded = true;
    },
    toggleCardOnBoard: (state: UIState) => {
      state.cardOnboarded = true;
    },
    toggleShopOnBoard: (state: UIState) => {
      state.shopOnboarded = true;
    },
    toggleStoreOnBoard: (state: UIState) => {
      state.storeOnboarded = true;
    },
    toggleTransfer: (state: UIState) => {
      state.transferOnboarded = true;
    },
    toggleHasProducts: (state: UIState) => {
      state.hasProducts = true;
    },
    toggleScreenShot: (state: UIState, action: PayloadAction<boolean>) => {
      state.enableScreenShot = action.payload;
    },
  },
});

export const {
  setIsUserOnboarded,
  setIsNewUser,
  setBiometric,
  toggleCAP,
  updateKYC,
  toggleTransfer,
  toggleShopOnBoard,toggleStoreOnBoard,
  toggleBudgetOnBoard,
  toggleCardOnBoard,
  toggleHasProducts,
  toggleScreenShot,
} = actions;
export default reducer;
