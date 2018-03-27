import { Component } from '@angular/core';

import '../assets/app.css';
import { Web3Service, ContractService } from './_services';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    constructor(private web3Service:Web3Service,
                private contractService:ContractService){
        this.web3Service.initWeb3();
        this.contractService.initContract();
    }
}