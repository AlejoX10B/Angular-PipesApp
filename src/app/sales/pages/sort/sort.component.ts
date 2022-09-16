import { Component } from '@angular/core';

import { Color, Hero } from "../../interfaces/sales.interfaces";


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {

  mayusBool = true;
  orderBy: string = '';

  heroes: Hero[] = [
    {name: 'Superman', flies: true, color: Color.azul},
    {name: 'Batman', flies: false, color: Color.negro},
    {name: 'Robin', flies: false, color: Color.rojo},
    {name: 'Linterna Verde', flies: true, color: Color.verde}
  ];

  toggleMayus(): void {
    this.mayusBool = !this.mayusBool;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }

}
