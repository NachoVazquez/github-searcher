import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  State,
  userSearchAdapter,
  UserSearchPartialState,
  USER_SEARCH_FEATURE_KEY,
} from './user-search.reducer';

// Lookup the 'UserSearch' feature state managed by NgRx
export const getUserSearchState = createFeatureSelector<
  UserSearchPartialState,
  State
>(USER_SEARCH_FEATURE_KEY);

const { selectAll, selectEntities } = userSearchAdapter.getSelectors();

export const getUserSearchLoaded = createSelector(
  getUserSearchState,
  (state: State) => state.loaded
);

export const getUserSearchError = createSelector(
  getUserSearchState,
  (state: State) => state.error
);

export const getAllUserSearch = createSelector(
  getUserSearchState,
  (state: State) => selectAll(state)
);

export const getUserSearchEntities = createSelector(
  getUserSearchState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUserSearchState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUserSearchEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
