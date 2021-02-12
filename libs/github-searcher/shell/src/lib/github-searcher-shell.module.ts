import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GithubSearcherCoreDataAccessModule } from '@github-searcher/github-searcher/core/data-access';
import { GithubSearcherCoreUiLayoutModule } from '@github-searcher/github-searcher/core/ui-layout';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GithubSearcherCoreDataAccessModule,
    GithubSearcherCoreUiLayoutModule,
  ],
})
export class GithubSearcherShellModule {}
