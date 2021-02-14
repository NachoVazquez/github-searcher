import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

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
    HttpClientModule,
    GithubSearcherShellRoutingModule,
    GithubSearcherCoreDataAccessModule,
    GithubSearcherCoreUiLayoutModule,
    OverlayModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  bootstrap: [LayoutUiComponent],
})
export class GithubSearcherShellModule {}
