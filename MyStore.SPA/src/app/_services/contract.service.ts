import { Injectable } from "@angular/core";
import { default as Web3} from 'web3';
import { ContractConfig } from "../../contract-config/ContractConfig";
import { Web3Service } from "./web3.service";

@Injectable()
export class ContractService {
    public account: any;
    private myContract:any;
    constructor(private web3Service:Web3Service) {}

    public async buyItem(ether:number,itemName:string) {

        this.myContract.methods.buyItem(itemName).send({value:this.web3Service.web3.utils.toWei(ether.toString(),'ether'),
        from:this.web3Service.account.address,
        gas:400000}).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.error(error);
        });
    }
    initContract(){
        this.myContract = new this.web3Service.web3.eth.Contract(ContractConfig.contract.abi);
        this.myContract.options.address = ContractConfig.contract.address;
    }
    
    getHistoryForUser(){
        return this.myContract.getPastEvents('BoughtItem', {
            //filter to get only for current user
            filter: { _from: this.web3Service.account.address },
            fromBlock: 0,
            toBlock: 'latest'
        })
    }
}