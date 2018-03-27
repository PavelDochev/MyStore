import { Component, OnInit } from '@angular/core';
import { Item } from '../../_models';
import { AlertService,ItemService } from '../../_services';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  items:Item[];

  constructor(private itemService:ItemService,
              private alertService:AlertService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      data=>{
        this.items = data as Item[];
      },
      error=>{
        this.alertService.error(error);
      });
  }

}
