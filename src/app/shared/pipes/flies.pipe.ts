import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flies'
})
export class FliesPipe implements PipeTransform {

  transform(flies: boolean): string {
    return (flies) ? 'vuela': 'no vuela';
  }

}
