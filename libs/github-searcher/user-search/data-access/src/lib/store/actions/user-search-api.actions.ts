import { createAction, props } from '@ngrx/store';

import { GithubUserResult } from '@github-searcher/github-searcher/user-search/domain';

export const searchGithubUsersSuccess = createAction(
  '[UserSearch/API] Search Users Success',
  props<{ userSearchResult: GithubUserResult }>()
);

export const searchGithubUsersFailure = createAction(
  '[UserSearch/API] Search Users Failure',
  props<{ error: string }>()
);
