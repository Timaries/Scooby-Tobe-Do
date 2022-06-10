import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class itemsService {
  items: Item[] = [
    { description: 'ძაღლის გასეირნება', done: false },
    { description: 'პროექტზე მუშაობა', done: true },
    { description: 'კინოში წასვლა', done: true },
    { description: 'ზუმის შეხვედრა', done: false },
  ];

  addNewTask(newTaskDescription: string) {
    this.items.push({ description: newTaskDescription, done: false });
  }
}
