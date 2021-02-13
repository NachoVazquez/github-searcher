import { createAction, props } from '@ngrx/store';

import { GithubUserSearch } from '@github-searcher/github-searcher/user-search/domain';

export const searchGithubUsers = createAction(
  '[UserSearch] Search Users',
  props<{ userSearch: GithubUserSearch }>()
);
