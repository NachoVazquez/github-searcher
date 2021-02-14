import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'github-searcher-search-bar-ui',
  templateUrl: './search-bar-ui.component.html',
  styleUrls: ['./search-bar-ui.component.scss'],
})
export class SearchBarUiComponent {
  @Input() nameFilter: string | null = '';

  @Output() search = new EventEmitter<void>();
  @Output() updateNameFilter = new EventEmitter<string>();

  onSearch(): void {
    this.search.emit();
  }

  onUpdateNameFilter(value: string): void {
    this.updateNameFilter.emit(value);
  }
}
