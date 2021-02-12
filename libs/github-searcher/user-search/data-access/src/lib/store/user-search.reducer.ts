import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as UserSearchActions from './user-search.actions';
import { UserSearchEntity } from './user-search.models';

export const USER_SEARCH_FEATURE_KEY = 'userSearch';

export interface State extends EntityState<UserSearchEntity> {
  selectedId?: string; // which UserSearch record has been selected
  loaded: boolean; // has the UserSearch list been loaded
  error?: string | null; // last known error (if any)
}

export interface UserSearchPartialState {
  readonly [USER_SEARCH_FEATURE_KEY]: State;
}

export const userSearchAdapter: EntityAdapter<UserSearchEntity> = createEntityAdapter<UserSearchEntity>();

export const initialState: State = userSearchAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const userSearchReducer = createReducer(
  initialState,
  on(UserSearchActions.init, state => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserSearchActions.loadUserSearchSuccess, (state, { userSearch }) =>
    userSearchAdapter.setAll(userSearch, { ...state, loaded: true })
  ),
  on(UserSearchActions.loadUserSearchFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userSearchReducer(state, action);
}
