pragma solidity ^0.4.18;

contract Store {
    address owner;

    function Store() public {
        owner = msg.sender;
    }

    event BoughtItem(address indexed _from, uint value,string itemName,uint256 timestamp);

    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    function buyItem(string itemName) public payable {

        BoughtItem(msg.sender,msg.value,itemName,block.timestamp);
    }

    function withdraw(uint256 amount) public isOwner {
        require(amount < this.balance);
        owner.transfer(amount);
    }
}