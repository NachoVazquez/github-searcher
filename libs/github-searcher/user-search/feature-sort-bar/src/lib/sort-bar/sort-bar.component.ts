import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  State,
  UserSearchFiltersActions,
  UserSearchFilterSelectors,
  UserSearchSelectors,
} from '@github-searcher/github-searcher/user-search/data-access';
import { SortType } from '@github-searcher/github-searcher/user-search/domain';

@Component({
  selector: 'github-searcher-sort-bar',
  template: `<github-searcher-sort-bar-ui
    [sortType]="sortType$ | async"
    [totalItems]="totalItems$ | async"
    (updateSortType)="updateSortType($event)"
  ></github-searcher-sort-bar-ui>`,
})
export class SortBarComponent {
  sortType$: Observable<SortType>;
  totalItems$: Observable<number>;

  constructor(private store: Store<State>) {
    this.sortType$ = this.store.select(UserSearchFilterSelectors.selectSort);
    this.totalItems$ = this.store.select(UserSearchSelectors.selectTotalItems);
  }

  updateSortType(sortType: SortType): void {
    this.store.dispatch(
      UserSearchFiltersActions.patchSortBy({ sortBy: sortType })
    );
  }
}
