import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizeCamelCase',
})
export class HumanizeCamelCasePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') {
      return value;
    }
    value = value.split(/(?=[A-Z])/).join(' ');
    return value;
  }
}
