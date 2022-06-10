import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Item } from './item.model';
import { itemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: Item[];
  constructor(private itsemsService: itemsService){};
    
  ngOnInit(): void {
    this.items = this.itsemsService.getItems();
    timer(0, 1000).subscribe(()=> {
      this.dateTime = new Date
    })
  }

  dateTime: Date;
}
