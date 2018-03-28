import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { Web3Service } from '../../_services/web3.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    storeSelected:any;
    profileSelected:any;
    userAddress:any;


    constructor(private userService: UserService,
                private web3Service:Web3Service) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userAddress = this.web3Service.account.address;
    }

    storeShown(){
        this.storeSelected = !this.storeSelected;
        if(this.storeSelected){
            this.profileSelected = false;
        }
    }

    profileShown(){
        this.profileSelected = !this.profileSelected;
        if(this.profileSelected){
            this.storeSelected=false;
        }
    }

    ngOnInit() {
        this.storeSelected=true;
    }
}