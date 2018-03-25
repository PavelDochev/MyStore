import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';
import { Web3Service } from '../../_services/web3.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit{
    
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private web3Service:Web3Service) { }

    ngOnInit(): void {
        this.web3Service.initWeb3();
    }
    async register() {
        this.loading = true;
        
        //TODO:
        //web3 creates account 

        // var test = await this.web3Service.CreateAccount();
        console.log(this.web3Service.CreateAccount());
        //encrypt private key with password
        //send public key to db and encrypted private key
        
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
