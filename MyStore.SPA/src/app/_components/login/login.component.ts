import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, UserService, Web3Service } from '../../_services/index';
import { CryptoJSUtils } from '../../_helpers';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService:UserService,
        private alertService: AlertService,
        private cryptoJSUtils:CryptoJSUtils,
        private web3Service:Web3Service) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    async login() {
        this.loading = true;
        this.authenticationService.login(this.model.userName)
            .subscribe(
                data => {
                    if(data.password == this.cryptoJSUtils.sha256(this.model.password))
                    {
                        this.web3Service.createAccountFromPrivateKey(this.cryptoJSUtils.decrypt(data.privateKey,this.model.password))
                        this.router.navigate([this.returnUrl]);
                    }
                    else{
                        this.alertService.error("Wrong password");
                        this.loading = false;
                    }
                },
                error => {
                    this.alertService.error("User doesnt exist");
                    this.loading = false;
                });
    }
}
