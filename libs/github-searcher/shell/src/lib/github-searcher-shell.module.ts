import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GithubSearcherCoreDataAccessModule } from '@github-searcher/github-searcher/core/data-access';
import {
  GithubSearcherCoreUiLayoutModule,
  LayoutUiComponent,
} from '@github-searcher/github-searcher/core/ui-layout';

import { GithubSearcherShellRoutingModule } from './github-searcher-shell-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GithubSearcherShellRoutingModule,
    GithubSearcherCoreDataAccessModule,
    GithubSearcherCoreUiLayoutModule,
  ],
  bootstrap: [LayoutUiComponent],
})
export class GithubSearcherShellModule {}
