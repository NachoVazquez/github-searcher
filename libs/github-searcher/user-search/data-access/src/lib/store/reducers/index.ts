import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

import * as fromUserSearch from './user-search.reducer';

export const USER_SEARCH_FEATURE_KEY = 'userSearch';

export interface UserSearchState {
  [fromUserSearch.USER_SEARCH_FEATURE_KEY]: fromUserSearch.State;
}

export interface State {
  [USER_SEARCH_FEATURE_KEY]: UserSearchState;
}

export function reducers(state: UserSearchState | undefined, action: Action) {
  return combineReducers({
    [fromUserSearch.USER_SEARCH_FEATURE_KEY]: fromUserSearch.reducer,
  })(state, action);
}

export const selectUserSearchState = createFeatureSelector<
  State,
  UserSearchState
>(USER_SEARCH_FEATURE_KEY);
