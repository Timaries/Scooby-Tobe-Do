import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Item[] = [
    { description: 'ძაღლის გასეირნება', done: true },
    { description: 'პროექტზე მუშაობა', done: true },
    { description: 'კინოში წასვლა', done: true },
    { description: 'ზუმის შეხვედრა', done: true },
  ];
}
