import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {showCTA} from '../actions';

const initialState: CTAtState = {
  message: '',
  title: '',
  type: undefined,
  visible: false,
};

const {actions, reducer} = createSlice({
  initialState,
  name: 'cta',
  reducers: {
    hide: state => {
      state.visible = false;
      state.message = '';
      state.type = undefined;
      state.title = '';
    },
    show: (state, action: PayloadAction<CTAtState>) => {
      console.log(action.payload);

      state.visible = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.title = action.payload.title;
    },
  },
});

export const {hide, show} = actions;

export const displayCTA = ({message, visible, type, title}: CTAtState) =>
  showCTA({
    message,
    title,
    type,
    visible,
  });

export const hideCTA = () => hide();

export default reducer;
