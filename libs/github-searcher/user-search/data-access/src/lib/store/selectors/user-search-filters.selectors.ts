import { createSelector } from '@ngrx/store';

import * as fromUserSearchFilters from '../reducers/user-search-filters.reducer';
import { selectUserSearchState } from '../reducers';

export const selectUserSearchFilterSliceState = createSelector(
  selectUserSearchState,
  state => state.userSearchFilters ?? ''
);

export const selectUserSearchFilters = createSelector(
  selectUserSearchFilterSliceState,
  fromUserSearchFilters.selectSearchFilters
);

export const selectNameFilter = createSelector(
  selectUserSearchFilters,
  searchFilters => searchFilters.name
);

export const selectPagination = createSelector(
  selectUserSearchFilters,
  searchFilters => searchFilters.pagination
);

export const selectSort = createSelector(
  selectUserSearchFilters,
  searchFilters => searchFilters.sort
);

export const selectUserFilters = createSelector(
  selectUserSearchFilters,
  searchFilters => searchFilters.userQuery
);
