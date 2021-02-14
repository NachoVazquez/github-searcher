import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  State,
  UserSearchActions,
  UserSearchFiltersActions,
  UserSearchFilterSelectors,
} from '@github-searcher/github-searcher/user-search/data-access';

@Component({
  selector: 'github-searcher-search-bar',
  template: `<github-searcher-search-bar-ui
    [nameFilter]="nameFilter$ | async"
    (search)="search()"
    (updateNameFilter)="updateNameFilter($event)"
  ></github-searcher-search-bar-ui>`,
})
export class SearchBarComponent {
  nameFilter$: Observable<string>;

  constructor(private readonly store: Store<State>) {
    this.nameFilter$ = this.store.select(
      UserSearchFilterSelectors.selectNameFilter
    );
  }

  updateNameFilter(name: string): void {
    this.store.dispatch(UserSearchFiltersActions.patchNameFilter({ name }));
  }

  search() {
    this.store.dispatch(UserSearchFiltersActions.resetPagination());
    this.store.dispatch(UserSearchActions.searchGithubUsers());
  }
}
