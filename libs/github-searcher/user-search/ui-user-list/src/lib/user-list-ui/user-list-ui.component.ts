import { Component, EventEmitter, Input, Output } from '@angular/core';

import { GithubUser } from '@github-searcher/github-searcher/user-search/domain';

@Component({
  selector: 'github-searcher-user-list-ui',
  templateUrl: './user-list-ui.component.html',
  styleUrls: ['./user-list-ui.component.scss'],
})
export class UserListUiComponent {
  @Input() userList: GithubUser[] | null = [];
  @Output() selectUser = new EventEmitter<GithubUser>();

  onSelectUser(user: GithubUser): void {
    this.selectUser.emit(user);
  }

  trackById(_: number, user: GithubUser): number {
    return user.id;
  }
}
