import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  GithubUser,
  GithubUserSearch,
  PartialGithubUserResult,
} from '@github-searcher/github-searcher/user-search/domain';

import { GithubUserSearchStringifierService } from './github-user-search-stringifier.service';

const BASE_URL = 'https://api.github.com';

@Injectable({ providedIn: 'root' })
export class UserSearchService {
  constructor(
    private httpClient: HttpClient,
    private stringifier: GithubUserSearchStringifierService
  ) {}

  search(
    githubUserSearch: GithubUserSearch
  ): Observable<PartialGithubUserResult> {
    const queryString = encodeURIComponent(
      this.stringifier.stringify(githubUserSearch)
    );

    const url = `${BASE_URL}/search/users?${queryString}`;

    return this.httpClient.get<PartialGithubUserResult>(url, {
      headers: this.getGithubHeaders(),
    });
  }

  getByHandle(handle: string): Observable<GithubUser> {
    const url = `${BASE_URL}/users/${handle}`;

    return this.httpClient.get<GithubUser>(url, {
      headers: this.getGithubHeaders(),
    });
  }

  private getGithubHeaders(): HttpHeaders {
    return new HttpHeaders().set('Accept', 'application/vnd.github.v3+json');
  }
}
