import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from '@github-searcher/shared/utils-router';

export const rootRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('@github-searcher/github-searcher/user-search/shell').then(
        m => m.GithubSearcherUserSearchShellModule
      ),
    data: { preload: true },
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes, {
      initialNavigation: 'enabled',
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class GithubSearcherShellRoutingModule {}
