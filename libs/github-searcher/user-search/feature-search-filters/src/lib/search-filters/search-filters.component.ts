import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  State,
  UserSearchFiltersActions,
  UserSearchFilterSelectors,
} from '@github-searcher/github-searcher/user-search/data-access';
import { GithubUserQuery } from '@github-searcher/github-searcher/user-search/domain';

@Component({
  selector: 'github-searcher-search-filters',
  template: `<github-searcher-search-filters-ui
    [userFilters]="userFilters$ | async"
    (updateUserFilters)="updateUserFilters($event)"
  ></github-searcher-search-filters-ui>`,
})
export class SearchFiltersComponent {
  userFilters$: Observable<GithubUserQuery>;

  constructor(private readonly store: Store<State>) {
    this.userFilters$ = this.store.select(
      UserSearchFilterSelectors.selectUserFilters
    );
  }

  updateUserFilters(userFilters: GithubUserQuery): void {
    this.store.dispatch(
      UserSearchFiltersActions.patchUserFilters({ userFilters })
    );
  }
}
