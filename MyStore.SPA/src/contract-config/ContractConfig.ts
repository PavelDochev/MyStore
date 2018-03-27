export const ContractConfig = {
    contract:
    {
        address:"0xd16dee17855472cb494167ac01689db38c5260d3",
        abi:[
            {
              "inputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "itemName",
                  "type": "string"
                }
              ],
              "name": "BoughtItem",
              "type": "event"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "itemName",
                  "type": "string"
                }
              ],
              "name": "buyItem",
              "outputs": [],
              "payable": true,
              "stateMutability": "payable",
              "type": "function"
            }
          ]
    }
}