import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { GithubUser } from '@github-searcher/github-searcher/user-search/domain';

import { UserSearchActions, UserSearchAPIActions } from '../actions';

export const USER_SEARCH_FEATURE_KEY = 'userSearch';

export interface State extends EntityState<GithubUser> {
  searchStatus: 'initial' | 'searching' | 'success' | 'error' | 'idle';
  error?: string | null;
  totalItems: number;
}

export const adapter: EntityAdapter<GithubUser> = createEntityAdapter<GithubUser>(
  {
    sortComparer: false,
  }
);

export const initialState: State = adapter.getInitialState({
  searchStatus: 'initial',
  totalItems: 0,
});

export const reducer = createReducer(
  initialState,

  on(UserSearchActions.searchGithubUsers, state => ({
    ...state,
    searchStatus: 'searching',
  })),

  on(
    UserSearchAPIActions.searchGithubUsersSuccess,
    (state, { userSearchResult }) => ({
      ...adapter.setAll(userSearchResult.items, state),
      totalItems: userSearchResult.total_count,
      searchStatus: 'success',
    })
  ),

  on(UserSearchAPIActions.searchGithubUsersFailure, (state, { error }) => ({
    ...adapter.removeAll(state),
    searchStatus: 'error',
    totalItems: 0,
    error,
  }))
);

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

export const selectUserIds = selectIds;
export const selectUsers = selectEntities;
export const selectAllUsers = selectAll;
export const selectError = (state: State) => state.error;
export const selectSearchStatus = (state: State) => state.searchStatus;
export const selectTotalItems = (state: State) => state.totalItems;
