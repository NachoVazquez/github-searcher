import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GithubSearcherCoreLayoutUiLayoutModule } from '@github-searcher/github-searcher/core/layout/ui-layout';
import { GithubSearcherCoreDataAccessModule } from '@github-searcher/github-searcher/core/data-access';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GithubSearcherCoreDataAccessModule,
    GithubSearcherCoreLayoutUiLayoutModule,
  ],
})
export class GithubSearcherShellModule {}
