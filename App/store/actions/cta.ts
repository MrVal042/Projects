import {createAction} from '@reduxjs/toolkit';

export const showCTA = createAction<CTAtState>('cta/show');
export const hideCTA = createAction('cta/hide');
export const runOnCTA = createAction('cta/run');
//Last will accept a function as a payload and run it in the middleware
