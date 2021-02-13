import { RequiredSemiPartial } from '@github-searcher/shared/utils-types';

import { GithubUser } from './github-user';

export interface GithubUserResult {
  total_count: number;
  items: GithubUser[];
}

export interface PartialGithubUserResult {
  total_count: number;
  items: RequiredSemiPartial<GithubUser, 'login'>[];
}
