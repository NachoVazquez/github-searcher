import { GithubUserQuery } from './github-user-query';
import { Pagination } from './pagination';
import { SortType } from './sort-type';

export interface GithubUserSearch {
  name: string;
  sort: SortType;
  pagination: Pagination;
  userQuery: GithubUserQuery;
}
