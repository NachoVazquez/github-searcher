import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'github-searcher-content-ui',
  templateUrl: './content-ui.component.html',
  styleUrls: ['./content-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentUiComponent {}
