import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'github-searcher-search-error-ui',
  templateUrl: './search-error-ui.component.html',
  styleUrls: ['./search-error-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchErrorUiComponent {
  @Input() searchError: string | null | undefined;
}
