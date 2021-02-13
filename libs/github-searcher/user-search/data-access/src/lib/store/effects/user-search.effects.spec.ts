import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot } from '@nrwl/angular/testing';

import {
  createServiceGetByHandleResult,
  createServiceSearchResult,
  createUserSearchResult,
} from '@github-searcher/github-searcher/user-search/shared/utils-test';

import { UserSearchService } from '../../services';
import { UserSearchActions, UserSearchAPIActions } from '../actions';

import { UserSearchEffects } from './user-search.effects';

describe(UserSearchEffects.name, () => {
  let effects: UserSearchEffects;
  let userSearchService: UserSearchService;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserSearchEffects,
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
      const userSearch = {
        name: 'Nacho Vazquez',
        pagination: { page: 1, perPage: 10 },
        userQuery: {},
      };
      const action = UserSearchActions.searchGithubUsers({
        userSearch,
      });
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
      expect(userSearchService.search).toHaveBeenCalledWith(userSearch);
      expect(userSearchService.getByHandle).toHaveBeenCalledTimes(2);
      expect(userSearchService.getByHandle).toHaveBeenCalledWith(
        'NachoVazquez'
      );
      expect(userSearchService.getByHandle).toHaveBeenCalledWith('LayZeeDK');
    });
  });
});
