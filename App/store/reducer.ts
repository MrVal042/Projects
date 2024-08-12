import {combineReducers} from 'redux';

import {app, cta, toast, ui} from './features';

import {apiReducer, apiReducerPath} from '@service';

export default combineReducers({
  [apiReducerPath]: apiReducer,
  app,
  cta,
  toast,
  ui,
});
