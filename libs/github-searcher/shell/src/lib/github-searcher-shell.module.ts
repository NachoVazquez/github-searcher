import { GithubSearcherCoreDataAccessModule } from '@github-searcher/github-searcher/core/data-access';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, CommonModule, GithubSearcherCoreDataAccessModule],
})
export class GithubSearcherShellModule {}
