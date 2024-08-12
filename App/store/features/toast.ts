import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: ToastState = {
  duration: 'medium',
  message: '',
  status: 'info',
  title: '',
  visible: false,
};

const {actions, reducer} = createSlice({
  initialState,
  name: 'toast',
  reducers: {
    resetToast: state => {
      state.visible = false;
      state.title = '';
      state.message = '';
      state.duration = 'medium';
      state.status = 'info';
    },
    showToast: (state, {payload}: PayloadAction<ToastState>) => {
      state.duration = payload.duration;
      state.message = payload.message;
      state.title = payload.title;
      state.status = payload.status;
      state.visible = true;
    },
  },
});

export const {resetToast, showToast} = actions;

export default reducer;
