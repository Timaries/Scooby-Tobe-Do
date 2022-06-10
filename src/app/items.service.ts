import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class itemsService {
  items: Item[] = [
    { description: 'Walk the dog', done: false },
    { description: 'Have breakfast', done: true },
    { description: 'Get ready for work', done: true },
  ];

  private saveItems() {
    localStorage.setItem('tasks', JSON.stringify(this.items));
  }

  getItems() {
    const taskItems = localStorage.getItem('tasks');
    if (taskItems) {
      this.items = JSON.parse(taskItems);
    }
    return this.items;
  }

  addNewTask(newTaskDescription: string) {
    this.items.push({ description: newTaskDescription, done: false });
    this.saveItems();
  }

  deleteTask(index: number) {
    this.items.splice(index, 1);
    this.saveItems();
  }
}
