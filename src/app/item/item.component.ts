import { Component, Input } from '@angular/core';
import { Item } from '../item.model';
import { itemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() tasks: Item;
  @Input() itemIndex: number;


  constructor( private itemsService: itemsService ) {}

  onDeleteTask() {
    this.itemsService.deleteTask(this.itemIndex)
  }
}
