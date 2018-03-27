export const ContractConfig = {
    contract:
    {
        address:"0xbc3c0789ea9ec48de048959d95b03aa232ebc271",
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
                "indexed": true,
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
              },
              {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
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
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
    }
}