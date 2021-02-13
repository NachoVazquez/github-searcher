import { Action } from '@ngrx/store';

import { createUserSearchResult } from '@github-searcher/github-searcher/user-search/shared/utils-test';

import { UserSearchAPIActions } from '../actions';

import { initialState, reducer, State } from './user-search.reducer';

describe('UserSearch Reducer', () => {
  describe('valid UserSearch actions', () => {
    it('searchGithubUsersSuccess should set the list of known UserSearch and set the correct status', () => {
      const userSearch = createUserSearchResult();
      const { total_count, items } = userSearch;
      const action = UserSearchAPIActions.searchGithubUsersSuccess({
        userSearchResult: userSearch,
      });
      const expected: State = {
        ...initialState,
        searchStatus: 'success',
        totalItems: total_count,
        ids: [9338604, 6364586],
        entities: {
          9338604: items[0],
          6364586: items[1],
        },
      };

      const result: State = reducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
