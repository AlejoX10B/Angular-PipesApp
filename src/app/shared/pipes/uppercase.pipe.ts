import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayus'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, truMayus: boolean = true): string {
    return ( truMayus ) ? value.toUpperCase() : value.toLowerCase();
  }

}
