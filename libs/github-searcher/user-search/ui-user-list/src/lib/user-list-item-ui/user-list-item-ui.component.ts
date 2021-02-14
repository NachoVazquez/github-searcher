import { Component, EventEmitter, Input, Output } from '@angular/core';

import { GithubUser } from '@github-searcher/github-searcher/user-search/domain';

@Component({
  selector: 'github-searcher-user-list-item-ui',
  templateUrl: './user-list-item-ui.component.html',
  styleUrls: ['./user-list-item-ui.component.scss'],
})
export class UserListItemUiComponent {
  @Input() user: GithubUser | null = null;
  @Output() selectUser = new EventEmitter<GithubUser>();

  select() {
    if (this.user) {
      this.selectUser.emit(this.user);
    }
  }
}
