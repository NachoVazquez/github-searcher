import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  State,
  UserSearchSelectors,
} from '@github-searcher/github-searcher/user-search/data-access';

@Component({
  selector: 'github-searcher-search-results',
  template: `<github-searcher-search-results-ui
    [isSearching]="isSearching$ | async"
    [searchHasRan]="searchHasRan$ | async"
    [isCurrentSearchSuccessful]="isCurrentSearchSuccessful$ | async"
    [isCurrentSearchFailure]="isCurrentSearchFailure$ | async"
    [searchError]="searchError$ | async"
  ></github-searcher-search-results-ui>`,
})
export class SearchResultsComponent {
  isSearching$: Observable<boolean>;
  searchHasRan$: Observable<boolean>;
  isCurrentSearchSuccessful$: Observable<boolean>;
  isCurrentSearchFailure$: Observable<boolean>;
  searchError$: Observable<string | null | undefined>;

  constructor(private store: Store<State>) {
    this.isSearching$ = this.store.select(
      UserSearchSelectors.selectIsSearching
    );
    this.searchHasRan$ = this.store.select(
      UserSearchSelectors.selectAtLeastOneSearchAttempted
    );
    this.isCurrentSearchSuccessful$ = this.store.select(
      UserSearchSelectors.selectIsCurrentSearchSuccessful
    );
    this.isCurrentSearchFailure$ = this.store.select(
      UserSearchSelectors.selectIsCurrentSearchFailure
    );
    this.searchError$ = this.store.select(
      UserSearchSelectors.selectSearchError
    );
  }
}
