import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import type {AppDispatch, AppStateType} from '../store';
/**
 * NOTE .... Use throughout your app instead of plain `useDispatch` and `useSelector`
 */

export const useDotDispatch: () => AppDispatch = useDispatch;
export const useDotSelector: TypedUseSelectorHook<AppStateType> = useSelector;
