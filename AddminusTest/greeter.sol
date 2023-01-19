// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "hardhat/console.sol";

contract Greeter {
    string private hello;

    constructor(string memory _hello) {
        console.log("Deploying a greeter with greeting:", _hello);
        hello = _hello;    
    }

    function greet() public view returns (string memory) {
        return hello;
    }

    function setGreeting(string memory _hello) public {
        console.log("Changing greeting from '%s' to '%s'", hello, _hello);
        hello = _hello; 
    }

    // Addition and Subtraction Functions

    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function subtract(uint256 x, uint256 y) public pure returns (uint256) {
        return x - y;
    }

}
