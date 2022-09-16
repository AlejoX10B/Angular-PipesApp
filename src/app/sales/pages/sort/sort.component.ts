import { Component } from '@angular/core';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {

  mayusBool = true;

  toggleMayus(): void {
    this.mayusBool = !this.mayusBool;
  }

}
