import { Action } from '@ngrx/store';

import * as UserSearchActions from './user-search.actions';
import { UserSearchEntity } from './user-search.models';
import { initialState, reducer, State } from './user-search.reducer';

describe('UserSearch Reducer', () => {
  const createUserSearchEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserSearchEntity);

  describe('valid UserSearch actions', () => {
    it('loadUserSearchSuccess should return set the list of known UserSearch', () => {
      const userSearch = [
        createUserSearchEntity('PRODUCT-AAA'),
        createUserSearchEntity('PRODUCT-zzz'),
      ];
      const action = UserSearchActions.loadUserSearchSuccess({ userSearch });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
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
