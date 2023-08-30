import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personne: string = 'Bad_Machine';
  age: number = 31;
  adresse: any = {street: 'rue de madrid', city: 'Ariana'};

  getEmail() {
    return this.personne + '@gmail.com';
  }
}
