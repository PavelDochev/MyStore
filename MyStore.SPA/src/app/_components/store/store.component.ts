import { Component, OnInit } from '@angular/core';
import { Item } from '../../_models';
import { AlertService,ItemService, ContractService } from '../../_services';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  items:Item[];

  constructor(private itemService:ItemService,
              private alertService:AlertService,
              private contractService:ContractService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      data=>{
        this.items = data as Item[];
      },
      error=>{
        this.alertService.error(error);
      });
  }

  buyItem(){
    var selectedItem = this.items.find(x=>x.selected==true);
    if(selectedItem!=null){
      this.contractService.buyItem(selectedItem.price,selectedItem.name);
    }
    else{
      this.alertService.error("Please select item");
    }
  }

}
