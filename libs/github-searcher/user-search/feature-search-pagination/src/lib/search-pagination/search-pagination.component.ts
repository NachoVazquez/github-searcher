import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import {
  State,
  UserSearchActions,
  UserSearchFiltersActions,
  UserSearchFilterSelectors,
  UserSearchSelectors,
} from '@github-searcher/github-searcher/user-search/data-access';
import { Pagination } from '@github-searcher/github-searcher/user-search/domain';

@Component({
  selector: 'github-searcher-search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.scss'],
})
export class SearchPaginationComponent {
  pagination$: Observable<Pagination>;
  totalItems$: Observable<number>;

  constructor(private readonly store: Store<State>) {
    this.pagination$ = this.store.select(
      UserSearchFilterSelectors.selectPagination
    );

    this.totalItems$ = this.store.select(UserSearchSelectors.selectTotalItems);
  }

  updatePagination(value: PageEvent): void {
    this.store.dispatch(
      UserSearchFiltersActions.patchPagination({
        pagination: { perPage: value.pageSize, page: value.pageIndex + 1 },
      })
    );
  }
}
