import { Component } from '@angular/core';

import '../assets/app.css';
import {  ContractService } from './_services';
import { Web3Service } from './_services/web3.service';

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