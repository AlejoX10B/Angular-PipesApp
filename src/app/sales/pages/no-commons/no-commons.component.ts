import { Component } from '@angular/core';
import { interval } from "rxjs";

enum genders {
  m = 'male',
  f = 'female'
}

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  // i18nSelect
  name: string = 'Alejandro';
  gender: string = genders.m;

  invMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['Maria', 'Jorge', 'Carlos', 'Ana', 'Luisa'];

  cliMap = {
    '=0': '# clientes',
    '=1': '# cliente',
    'other': '# clientes'
  }

  // KeyValue
  person = {
    name: 'Jhon',
    age: 20,
    address: 'Bogota D.C'
  }

  //JSON
  heroes = [
    { name: 'Spiderman', flies: false },
    { name: 'Batman', flies: false },
    { name: 'Ironman', flies: true }
  ]

  //Async
  myObserv = interval(1000);

  valPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos una promesa');
    }, 3500);
  });

  clickChangeClient(): void {

    switch (this.name) {
      case 'Alejandro':
        this.name = 'Sonia';
        this.gender = genders.f;
        break;

      case 'Sonia':
        this.name = 'Alejandro';
        this.gender = genders.m;
        break;
    }
  }

  clickDeleteClient(): void {
    if (this.clients.length != 0) {
      this.clients.pop();
    }
  }

}
