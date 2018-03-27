import { Injectable } from "@angular/core";
import { default as Web3} from 'web3';
import { ContractConfig } from "../../contract-config/ContractConfig";
import { Web3Service } from ".";
// import { default as contract } from 'truffle-contract';

// import { ContractConfig } from "../../ContractConfig/contract-config";

@Injectable()
export class ContractService {
    public account: any;
    public account_balance: number;
    private myContract:any;
    constructor(private web3Service:Web3Service) {}

    public async buyItem(ether:number) {
        this.myContract.buyItem({value:this.web3Service.web3.toWei(ether,'ether')},function(error, result){
            if(error)
                console.error(error);
        });
    }
    initContract(){
        this.myContract = new this.web3Service.web3.eth.Contract(ContractConfig.contract.abi);
        this.myContract.options.address = ContractConfig.contract.address;
        // this.contract = myContract.at(ContractConfig.contract.address);
    }
    
    getHistoryForUser(addr:string){
        return this.myContract.getPastEvents('BoughtItem', {
            filter: { _from: this.web3Service.account.address },
            fromBlock: 0,
            toBlock: 'latest'
        })
    }
}