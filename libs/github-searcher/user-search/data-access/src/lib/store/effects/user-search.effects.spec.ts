import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot } from '@nrwl/angular/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';

import {
  createEmptyServiceSearchResult,
  createEmptyUserSearchResult,
  createServiceGetByHandleResult,
  createServiceSearchResult,
  createUserSearchResult,
  userSearchFilters,
} from '@github-searcher/github-searcher/user-search/shared/utils-test';

import { UserSearchService } from '../../services';
import { UserSearchActions, UserSearchAPIActions } from '../actions';
import { UserSearchFilterSelectors } from '../selectors';

import { UserSearchEffects } from './user-search.effects';

describe(UserSearchEffects.name, () => {
  let effects: UserSearchEffects;
  let userSearchService: UserSearchService;
  let actions$: Observable<Action>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserSearchEffects,
        provideMockStore({
          selectors: [
            {
              selector: UserSearchFilterSelectors.selectUserSearchFilters,
              value: userSearchFilters,
            },
          ],
        }),
        provideMockActions(() => actions$),
        {
          provide: UserSearchService,
          useValue: {
            search: jest.fn(),
            getByHandle: jest.fn(),
          },
        },
      ],
    });
    effects = TestBed.inject<UserSearchEffects>(UserSearchEffects);
    actions$ = TestBed.inject(Actions);
    userSearchService = TestBed.inject(UserSearchService);
  });

  describe('searchGithubUsers$', () => {
    it('should return a UserSearchAPIActions.searchGithubUsersSuccess with a list of users on success', () => {
      const action = UserSearchActions.searchGithubUsers();
      const result = createUserSearchResult();
      const resultSearch = createServiceSearchResult();
      const responseSearch = cold('-a|', { a: resultSearch });
      const responseGetByHandle = (login: string) =>
        cold('-a|', { a: createServiceGetByHandleResult(login) });
      userSearchService.search = jest.fn(() => responseSearch);
      userSearchService.getByHandle = jest.fn((login: string) =>
        responseGetByHandle(login)
      );
      const completion = UserSearchAPIActions.searchGithubUsersSuccess({
        userSearchResult: result,
      });

      actions$ = hot('-a', { a: action });
      const expected = cold('----b', { b: completion });

      expect(effects.searchGithubUsers$).toBeObservable(expected);
      expect(userSearchService.search).toHaveBeenCalledTimes(1);
      expect(userSearchService.search).toHaveBeenCalledWith(userSearchFilters);
      expect(userSearchService.getByHandle).toHaveBeenCalledTimes(2);
      expect(userSearchService.getByHandle).toHaveBeenCalledWith(
        'NachoVazquez'
      );
      expect(userSearchService.getByHandle).toHaveBeenCalledWith('LayZeeDK');
    });

    it('should return a UserSearchAPIActions.searchGithubUsersSuccess with a empty list of users when the search returned no element success', () => {
      const action = UserSearchActions.searchGithubUsers();
      const result = createEmptyUserSearchResult();
      const resultSearch = createEmptyServiceSearchResult();
      const responseSearch = cold('-a|', { a: resultSearch });
      userSearchService.search = jest.fn(() => responseSearch);
      userSearchService.getByHandle = jest.fn();
      const completion = UserSearchAPIActions.searchGithubUsersSuccess({
        userSearchResult: result,
      });

      actions$ = hot('-a', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.searchGithubUsers$).toBeObservable(expected);
      expect(userSearchService.search).toHaveBeenCalledTimes(1);
      expect(userSearchService.search).toHaveBeenCalledWith(userSearchFilters);
      expect(userSearchService.getByHandle).not.toHaveBeenCalled();
    });

    it('should return a UserSearchAPIActions.searchGithubUsersFailure when the search has errors', () => {
      const action = UserSearchActions.searchGithubUsers();
      const error = { message: 'Unexpected Error. Try again later.' };
      const responseSearch = cold('-#|', {}, error);
      userSearchService.search = jest.fn(() => responseSearch);
      userSearchService.getByHandle = jest.fn();
      const completion = UserSearchAPIActions.searchGithubUsersFailure({
        error: error.message,
      });

      actions$ = hot('-a', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.searchGithubUsers$).toBeObservable(expected);
      expect(userSearchService.search).toHaveBeenCalledTimes(1);
      expect(userSearchService.search).toHaveBeenCalledWith(userSearchFilters);
      expect(userSearchService.getByHandle).not.toHaveBeenCalled();
    });
  });
});
