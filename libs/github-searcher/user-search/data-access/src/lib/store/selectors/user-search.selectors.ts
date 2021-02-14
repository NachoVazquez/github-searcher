import { createSelector } from '@ngrx/store';

import * as fromUserSearch from '../reducers/user-search.reducer';
import { selectUserSearchState } from '../reducers';

export const selectUserSearchSliceState = createSelector(
  selectUserSearchState,
  state => state.userSearch
);

export const selectUserIds = createSelector(
  selectUserSearchSliceState,
  fromUserSearch.selectUserIds
);

export const selectUsers = createSelector(
  selectUserSearchSliceState,
  fromUserSearch.selectUsers
);

export const selectAllUsers = createSelector(
  selectUserSearchSliceState,
  fromUserSearch.selectAllUsers
);

export const selectSearchError = createSelector(
  selectUserSearchSliceState,
  fromUserSearch.selectError
);

export const selectSearchStatus = createSelector(
  selectUserSearchSliceState,
  fromUserSearch.selectSearchStatus
);

export const selectIsSearching = createSelector(
  selectSearchStatus,
  status => status === 'searching'
);

export const selectIsCurrentSearchSuccessful = createSelector(
  selectSearchStatus,
  status => status === 'success'
);

export const selectIsCurrentSearchFailure = createSelector(
  selectSearchStatus,
  status => status === 'error'
);

export const selectAtLeastOneSearchAttempted = createSelector(
  selectSearchStatus,
  status => status !== 'initial'
);

export const selectTotalItems = createSelector(
  selectUserSearchSliceState,
  fromUserSearch.selectTotalItems
);
