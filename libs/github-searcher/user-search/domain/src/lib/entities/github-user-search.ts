import { GithubUserQuery } from './github-user-query';

export interface Pagination {
  perPage: number;
  page: number;
}

export interface GithubUserSearch {
  name: string;
  sort?:
    | 'MostFollowers'
    | 'FewestFollowers'
    | 'MostRecentlyJoined'
    | 'LeastRecentlyJoined'
    | 'MostRepositories'
    | 'FewestRepositories';
  pagination: Pagination;
  userQuery: GithubUserQuery;
}
