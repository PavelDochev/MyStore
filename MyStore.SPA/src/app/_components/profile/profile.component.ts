import { Component, OnInit } from '@angular/core';
import { Web3Service, ContractService } from '../../_services';
import { UserHistory } from '../../_models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userHistory:UserHistory;
  constructor(private contractService:ContractService) { }

  async ngOnInit() {

    this.getEventsEmitted();
  }

  getEventsEmitted(){
    // 'topics':['0x' + tweb3.sha3('DepositMade(hexstring,uint256)')] custom select event to filter
    this.contractService.getHistoryForUser("test").then(function(events){
      console.log(events);
      events.forEach(element => {

        // var history = new UserHistory();
        // history.itemName = element.returnValues.itemName
        // history.price = element.returnValues.value;
        // history.date = element.
      });
    });
  }

}
