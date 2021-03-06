import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GithubSearcherUserSearchUiUserListModule } from '@github-searcher/github-searcher/user-search/ui-user-list';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [CommonModule, GithubSearcherUserSearchUiUserListModule],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class GithubSearcherUserSearchFeatureUserListModule {}
