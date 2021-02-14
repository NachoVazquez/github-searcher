import { createAction, props } from '@ngrx/store';

import { GithubUser } from '@github-searcher/github-searcher/user-search/domain';

export const searchGithubUsers = createAction('[SearchBar] Search Users');

export const selectUser = createAction(
  '[SearchBar] Select Users',
  props<{ user: GithubUser }>()
);
