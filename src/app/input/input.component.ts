import { Component, Input, OnInit,  } from '@angular/core';
import { itemsService } from '../items.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor(private itemsService: itemsService) {}

  ngOnInit(): void {}

  onNewTask(taskElement: HTMLInputElement) {
    this.itemsService.addNewTask(taskElement.value);
    taskElement.value = '';
  }
}
