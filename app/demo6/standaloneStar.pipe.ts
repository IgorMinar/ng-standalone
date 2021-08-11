import { Pipe } from '../../standaloneShim';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'standaloneStar',
  standalone: true
})
export class StandaloneStarPipe implements PipeTransform {
  transform(value) {
    const stars = new Array(value.length);
    return stars.fill('*').join('');
  }
}
