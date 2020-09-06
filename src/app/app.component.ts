import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cours';
  liczba = Math.PI;
  dog = new Dog('Reksio', 12);
  date = new Date();
  days = ['monday', 'thusaday', 'wendsday', 'thursday', 'friday', 'saturday', 'sunday' ];
  dogs = new Array<Dog>();
  constructor(){
    this.dogs.push(new Dog('reksio', 12), new Dog('atos', 2));
  }
  showDog(){
    return('Imię psa: ' + this.dog.name);
  }
}

class Dog {
  constructor(public name: string, public age: number){
  }
}
