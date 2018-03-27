import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    storeSelected:any;
    profileSelected:any;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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