import { Component, OnInit } from '@angular/core';
import {  ContractService } from '../../_services';
import { UserHistory } from '../../_models';
import { Web3Service } from '../../_services/web3.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userHistory:any[] = [];

  constructor(private contractService:ContractService,
              private web3Service:Web3Service) { }

  async ngOnInit() {
    this.getEventsEmitted();
  }

  getEventsEmitted(){
    this.contractService.getHistoryForUser().then(events=>{
      events.forEach(element => {
        var history = new UserHistory();
        history.itemName = element.returnValues.itemName
        history.price = this.web3Service.web3.utils.fromWei(element.returnValues.value,'ether');
        
        var newDate = new Date(element.returnValues.timestamp*1000);
        var dateString =
        newDate.getHours()+'h '+ newDate.getMinutes() +'min '+
          + (newDate.getMonth()+1) + '/'
          + newDate.getDate() + '/' 
          +  newDate.getFullYear();
        history.date = dateString;
        this.userHistory.push(history);
      });
    });
  }

}
