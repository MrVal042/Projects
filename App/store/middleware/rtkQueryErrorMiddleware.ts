import {Middleware, MiddlewareAPI, isRejectedWithValue} from '@reduxjs/toolkit';

import {setLogoutToast} from '../features/app';


interface Data {
  code: number;
  message: string;
  status: string;
}

interface Payload {
  status: number;
  displayMessage: string;
  succeeded: boolean;
  errorMessages: string[];
  result: Data;
}

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => (action: any) => {
    handleRejectedWithValue(action, api);
    return next(action);
  };

const handleRejectedWithValue = (action: any, api: MiddlewareAPI) => {
  if (isRejectedWithValue(action)) {
    if ((action.payload as Payload)?.status === 401) {
      api.dispatch(setLogoutToast(true));
      console.log('Status', (action.payload as Payload)?.status);
    }
    if ((action.payload as Payload)?.status === 400) {
      console.log('action.payload', {
        ...action.payload,
      } as Payload);
    }
  }
};
