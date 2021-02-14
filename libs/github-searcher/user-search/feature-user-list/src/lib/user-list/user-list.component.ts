import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubUser } from '@github-searcher/github-searcher/user-search/domain';
import {
  State,
  UserSearchActions,
  UserSearchSelectors,
} from '@github-searcher/github-searcher/user-search/data-access';

@Component({
  selector: 'github-searcher-user-list',
  template: `<github-searcher-user-list-ui
    [userList]="userList$ | async"
    (selectUser)="selectUser($event)"
  ></github-searcher-user-list-ui>`,
})
export class UserListComponent {
  userList$: Observable<GithubUser[]>;

  constructor(private store: Store<State>) {
    this.userList$ = this.store.select(UserSearchSelectors.selectAllUsers);
  }

  selectUser(user: GithubUser): void {
    this.store.dispatch(UserSearchActions.selectUser({ user }));
  }
}
