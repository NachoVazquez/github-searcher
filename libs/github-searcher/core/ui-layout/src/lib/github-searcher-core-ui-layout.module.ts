import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutUiComponent } from './layout-ui/layout-ui.component';
import { TopbarUiComponent } from './topbar-ui/topbar-ui.component';
import { ContentUiComponent } from './content-ui/content-ui.component';

@NgModule({
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  declarations: [LayoutUiComponent, TopbarUiComponent, ContentUiComponent],
  exports: [LayoutUiComponent],
})
export class GithubSearcherCoreUiLayoutModule {}
