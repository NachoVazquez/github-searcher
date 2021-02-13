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

export const selectTotalItems = createSelector(
  selectUserSearchSliceState,
  fromUserSearch.selectTotalItems
);
