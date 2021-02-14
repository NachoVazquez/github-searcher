import { createAction, props } from '@ngrx/store';

import {
  GithubUserQuery,
  Pagination,
  SortType,
} from '@github-searcher/github-searcher/user-search/domain';

export const patchNameFilter = createAction(
  '[SearchBar] Patch Name filter',
  props<{ name: string }>()
);

export const patchSortBy = createAction(
  '[SearchBar] Patch Sort',
  props<{ sortBy: SortType }>()
);

export const patchPagination = createAction(
  '[SearchBar] Patch Pagination',
  props<{ pagination: Pagination }>()
);

export const patchUserFilters = createAction(
  '[SearchBar] Patch User Filters',
  props<{ userFilters: GithubUserQuery }>()
);
