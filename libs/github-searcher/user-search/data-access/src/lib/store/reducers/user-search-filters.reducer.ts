import { createReducer, on } from '@ngrx/store';

import { GithubUserSearch } from '@github-searcher/github-searcher/user-search/domain';

import { UserSearchFiltersActions } from '../actions';

export const USER_SEARCH_FILTERS_FEATURE_KEY = 'userSearchFilters';

export interface State {
  searchFilters: GithubUserSearch;
}

export const initialState: State = {
  searchFilters: {
    name: '',
    pagination: { page: 1, perPage: 10 },
    userQuery: {},
  },
};

export const reducer = createReducer(
  initialState,

  on(UserSearchFiltersActions.patchNameFilter, (state, { name }) => ({
    ...state,
    searchFilters: { ...state.searchFilters, name },
  })),

  on(UserSearchFiltersActions.patchPagination, (state, { pagination }) => ({
    ...state,
    searchFilters: { ...state.searchFilters, pagination },
  })),

  on(UserSearchFiltersActions.patchSortBy, (state, { sortBy }) => ({
    ...state,
    searchFilters: { ...state.searchFilters, sort: sortBy },
  })),

  on(UserSearchFiltersActions.patchUserFilters, (state, { userFilters }) => ({
    ...state,
    searchFilters: { ...state.searchFilters, userQuery: userFilters },
  }))
);

export const selectSearchFilters = (state: State) => state.searchFilters;
