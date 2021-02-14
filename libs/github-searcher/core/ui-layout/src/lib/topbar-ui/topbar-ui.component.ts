import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'github-searcher-topbar-ui',
  templateUrl: './topbar-ui.component.html',
  styleUrls: ['./topbar-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarUiComponent {}
