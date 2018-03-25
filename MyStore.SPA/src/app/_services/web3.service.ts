import { Injectable } from "@angular/core";
var web3 = require('web3');

@Injectable()
export class Web3Service{
    public account: any;
    private web3:any;

    constructor() {

    }

    public async CreateAccount(){
        this.account == await new Promise((resolve,reject)=>{
            console.log(this.web3.eth.accounts.create(this.web3.utils.randomHex(32)));

        })
        return Promise.resolve(this.account);
    }

    public initWeb3(){
        this.web3 = new web3("https://ropsten.infura.io");
        console.log(this.web3);
    }
}