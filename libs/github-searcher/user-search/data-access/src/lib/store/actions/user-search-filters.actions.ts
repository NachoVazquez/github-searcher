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
  '[SortBar] Patch Sort',
  props<{ sortBy: SortType }>()
);

export const patchPagination = createAction(
  '[Paginator] Patch Pagination',
  props<{ pagination: Pagination }>()
);

export const resetPagination = createAction('[SearchBar] Reset Pagination');

export const patchUserFilters = createAction(
  '[SearchFilters] Patch User Filters',
  props<{ userFilters: GithubUserQuery }>()
);
