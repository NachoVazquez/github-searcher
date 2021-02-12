import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { GithubSearcherCoreDataAccessModule } from '@github-searcher/github-searcher/core/data-access';

@NgModule({
  imports: [BrowserModule, CommonModule, GithubSearcherCoreDataAccessModule],
})
export class GithubSearcherShellModule {}
