import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { FlashquoteActions } from '../action-types';

export const flashquoteFeatureKey = 'flashquote';

export interface FlashState {}

export const initialFlashState: FlashState = {};

export const reducers = createReducer(
  initialFlashState,
  on(FlashquoteActions.flashquoteLoaded, (state, { flashquote }) => {
    return {
      ...state,
      ...flashquote,
    };
  })
);
