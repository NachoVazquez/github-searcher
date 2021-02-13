import { Injectable } from '@angular/core';

import {
  GithubUserQuery,
  GithubUserSearch,
  Pagination,
} from '@github-searcher/github-searcher/user-search/domain';

@Injectable({ providedIn: 'root' })
export class GithubUserSearchStringifierService {
  stringify(userSearch: GithubUserSearch): string {
    return `q=${userSearch.name}${this.stringifyUserQuery(
      userSearch.userQuery
    )}${this.stringifySort(userSearch)}${this.stringifyPagination(
      userSearch.pagination
    )}`;
  }

  private stringifySort(userSearch: GithubUserSearch): string {
    switch (userSearch.sort) {
      case 'MostFollowers':
        return `&sort=followers&order=desc`;
      case 'FewestFollowers':
        return `&sort=followers&order=asc`;
      case 'MostRecentlyJoined':
        return `&sort=joined&order=desc`;
      case 'LeastRecentlyJoined':
        return `&sort=joined&order=asc`;
      case 'MostRepositories':
        return `&sort=repositories&order=desc`;
      case 'FewestRepositories':
        return `&sort=repositories&order=asc`;
      default:
        return ``;
    }
  }

  private stringifyPagination(pagination?: Pagination): string {
    return pagination
      ? `&per_page=${pagination.perPage}&page=${pagination.page}`
      : '';
  }

  private stringifyUserQuery(userQuery: GithubUserQuery): string {
    const location = userQuery.location
      ? `+location:${userQuery.location}`
      : '';

    const followers = userQuery.followers
      ? `+followers:${userQuery.followers}`
      : '';

    const repositories = userQuery.repositories
      ? `+repos:${userQuery.repositories}`
      : '';

    return location + followers + repositories;
  }
}
