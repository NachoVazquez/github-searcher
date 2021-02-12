import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserSearchUiComponent } from '@github-searcher/github-searcher/user-search/ui-user-search';

export const userSearchRoutes: Route[] = [
  {
    path: '',
    component: UserSearchUiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(userSearchRoutes)],
})
export class GithubSearcherUserSearchShellRoutingModule {}
