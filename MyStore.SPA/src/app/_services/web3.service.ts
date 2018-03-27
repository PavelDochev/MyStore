import { Injectable } from "@angular/core";
var web3 = require('web3');


//since its demo purpose(quick and dirty fix)
declare var require:any;

@Injectable()
export class Web3Service{
    public account: any;
    public web3:any;

    constructor() {

    }

    public createNewAccount(userPassword:string){
        this.account = this.web3.eth.accounts.create();
        // this.web3.eth.accounts.wallet.add(this.account);
        // this.web3.eth.accounts.wallet.save(userPassword);
    }

    public createAccountFromPrivateKey(privateKey){
        //get private key from db
        this.account = this.web3.eth.accounts.privateKeyToAccount(privateKey);
        this.web3.eth.accounts.wallet.add(this.account);

    }

    public initWeb3(){
        this.web3 = new web3("https://ropsten.infura.io");
    }
}