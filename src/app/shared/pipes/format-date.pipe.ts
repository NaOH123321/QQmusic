import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.formatTime(value);
  }

  formatTime(timestamp): string {
    timestamp = Math.floor(timestamp);
    const minute = Math.floor(timestamp / 60)
      .toString()
      .padStart(2, '0');
    const second = (timestamp % 60).toString().padStart(2, '0');
    return `${minute}:${second}`;
  }
}
