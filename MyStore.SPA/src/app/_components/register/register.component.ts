import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';
import { CryptoJSUtils } from '../../_helpers';
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
        private web3Service:Web3Service,
        private cryptoJSUtils:CryptoJSUtils) { }

    ngOnInit(): void {
        
    }

    async register() {
        this.loading = true;
        
        //web3 creates account 
        await this.web3Service.createNewAccount(this.model.password);

        //encrypt private key with password
        this.model.privateKey = (this.cryptoJSUtils.encrypt(this.web3Service.account.privateKey,this.model.password)).toString();

        //sha256 password
        this.model.password = this.cryptoJSUtils.sha256(this.model.password);

        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error("There is user with such username");
                    this.loading = false;
                });
    }
}
